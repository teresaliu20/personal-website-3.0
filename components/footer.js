import Link from 'next/link';
import Container from './container';
import styles from './footer.module.css';
import utilStyles from '../styles/utils.module.css';

const Footer = () => {
  return (
    <Container className={styles.footerWrapper}>
      <div className={styles.footerLogo}>
        <p className={utilStyles.codeText}>Get in touch.</p>
      </div> 
      <div>
        <Link href="/" className={styles.footerSocial}>Linkedin</Link>
        <Link href="/" className={styles.footerSocial}>Twitter</Link>
        <Link href="/" className={styles.footerSocial}>Github</Link>
        <p className={styles.footerCopyright}>© Teresa Liu, 2023</p>
      </div>
    </Container>
  )
}

export default Footer;