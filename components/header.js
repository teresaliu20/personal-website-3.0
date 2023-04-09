import Link from 'next/link';
import Container from './container';
import styles from './header.module.css';
import utilStyles from '../styles/utils.module.css';

const Header = () => {
  return (
    <Container className={styles.header}>
      <div className={styles.headerItems}>
        <Link href="/" className={utilStyles.codeText}>Logo</Link>
        <Link href="/" className={utilStyles.codeText}>About</Link>
        <Link href="/" className={utilStyles.codeText}>Writing</Link>
        <Link href="/" className={utilStyles.codeText}>Bookshelf</Link>
      </div>
    </Container>
  )
}

export default Header;