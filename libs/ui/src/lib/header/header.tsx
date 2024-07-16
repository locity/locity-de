import Link from 'next/link'
import { Nav } from '../nav'
import styles from './header.module.scss'

export function Header() {
  return (
    <header className={styles['header']}>
      <div className={styles['inner']}>
        <Link className={styles['brand-link']} href="/">
          <img className={styles['logo']} src="/locity.svg" alt="Locity Logo" />
          <h1 className={styles['brand']}>locity</h1>
        </Link>
        <Nav />
      </div>
    </header>
  )
}

export default Header
