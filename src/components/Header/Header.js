import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

import Container from '@components/Container';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <p className={styles.headerTitle}>
          <Link href="/">
            <a>Hyper Bros. Trading Cards</a>
          </Link>
        </p>
        {/* <p className={styles.headerCart}>
          <button>
            <FaShoppingCart />
            <span>
              $0.00
            </span>
          </button>
        </p> */}
      </Container>
    </header>
  )
}

export default Header;