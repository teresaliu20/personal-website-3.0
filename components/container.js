import Link from 'next/link';
import styles from './container.module.css';
import utilStyles from '../styles/utils.module.css';

const Container = ({children, className}) => {
  return (
    <div className={styles.container + ' ' + className}>
	    <div className={styles.contents}>
	    	{children}	
	    </div>
    </div>
  )
}

export default Container;