import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';
import styles from './postGrid.module.css';
import Container from './container';
import utilStyles from '../styles/utils.module.css';
import { getAllPublished } from '../lib/notion';

function PostGrid({posts}) {
  return (
    <div className={styles.grid}>
      {posts.map((post, index) => (
          <div key={index} className={styles.card}>
            <div style={{width: '100%', height: '200px', position: 'relative'}}>
              <Image
               src={post.cover}
               layout='fill'
               objectFit='cover'
               />
             </div>
             <div>
              <Link href={`/posts/${post.slug}`}>
                <h2>
                  {post.title}
                </h2>
              </Link>
              <p>
                {post.date}
              </p>
              <p>
                {post.description}
              </p>
            </div>
          </div>
      ))}
    </div>
  )
}

export default PostGrid