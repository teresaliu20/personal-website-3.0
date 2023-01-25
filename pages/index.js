import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hey there! I’m Teresa, and I love working on big problems. I’m currently a <a className={utilStyles.linkHighlight} href="https://www.776.org/" target="_blank">climate fellow</a> with the 776 Foundation, exploring startup ideas in the realm of achieving 0.5GT/yr GHG reductions.
        </p>
        <p>
          Prior to this, I was a product manager at Lyft. I used to code lot during university as a computer science major, going overboard at 15+ hackathons, coding for non-profits, and even spending my first summer at a  full-stack coding bootcamp. I've had the wonderful opportunities to work at Facebook internet.org, Google Maps as an APM intern, and Nextdoor as a KPCB Fellow. 
        </p>
        <p>
          Nowadays, I’ve been deep diving into many climate issues for my fellowship. Outside of that, I read books and I <a className={utilStyles.linkHighlight} href="https://drive.google.com/file/d/19fdNdBRGfCJdh694D8BSS8PeR_-lU8qq/view?usp=sharing" target="_blank">surf</a>. I consider myself to be both deeply curious about how the world works and how to meaningfully affect change, while also exploring my own creative expression and authenticity. 
        </p>
        <p>
         If you want to say hello, reach me at teresaliu20@gmail.com.
        </p>
      </section>
    </Layout>
  );
}