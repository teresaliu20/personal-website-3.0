import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import Container from '../../components/container';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown'
import { getAllPublished, getSingleBlogPostBySlug } from "../../lib/notion";
import utilStyles from '../../styles/utils.module.css';

function Post({ post }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Container>
        <section className={utilStyles.postContainer}> 
          <h2>{post.metadata.title}</h2>
          <span>{post.metadata.date}</span>
          <ReactMarkdown>{post.markdown}</ReactMarkdown>
        </section>
      </Container>
    </Layout>
  );
}

export async function getStaticProps ({ params }) {
  const post = await getSingleBlogPostBySlug(params.slug)
  return {
    props: {
      post,
    },
    revalidate: 60
  };
};

export async function getStaticPaths () {
  const posts = await getAllPublished()
  const paths = posts.map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: "blocking",
  };
};

export default Post;