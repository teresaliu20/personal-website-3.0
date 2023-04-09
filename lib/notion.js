const { Client } = require("@notionhq/client")

const notion = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_TOKEN,
})

export const getAllPublished = async () => {
  const posts = await notion.databases.query({
    database_id: process.env.NEXT_PUBLIC_DATABASE_ID,
  });

  const allPosts = posts.results;
  return allPosts.map((post) => {
    return getPageMetaData(post);
  });
};

const getPageMetaData = (post) => {
  const getTags = (tags) => {
    const allTags = tags.map((tag) => {
      return tag.name;
    });

    return allTags;
  };

  let cover = post.cover;
  console.log(post)

  switch (cover.type) {
    case 'file':
      cover = post.cover.file
      break;
    case 'external':
      cover = post.cover.external.url;
      break;
    default:
      // Add default cover image if you want...
      cover = ''
  }
  console.log("COVER")
  console.log(cover)

  return {
    id: post.id,
    cover: cover,
    title: post.properties.Name.title[0].plain_text,
    tags: getTags(post.properties.Tags.multi_select),
    description: post.properties.Description.rich_text[0].plain_text,
    date: getToday(post.properties.Date.last_edited_time),
    slug: post.properties.Slug.rich_text[0].plain_text,
  };
};

function getToday (datestring) {
  const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  let date = new Date();

  if (datestring) {
    date = new Date(datestring);
  }

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  let today = `${month} ${day}, ${year}`;

  return today;
};

const { NotionToMarkdown } = require("notion-to-md");
const n2m = new NotionToMarkdown({ notionClient: notion });

export const getSingleBlogPostBySlug = async (slug) => {
  const response = await notion.databases.query({
    database_id: process.env.NEXT_PUBLIC_DATABASE_ID,
    filter: {
      property: "Slug",
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  });
  const page = response.results[0];
  const metadata = getPageMetaData(page);
  const mdblocks = await n2m.pageToMarkdown(page.id);
  const mdString = n2m.toMarkdownString(mdblocks);
  return {
      metadata,
      markdown: mdString,
  };
}