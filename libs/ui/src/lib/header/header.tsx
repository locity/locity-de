import Link from 'next/link'
import { PropsWithChildren } from 'react'
import { Nav } from '../nav'
import { NavItem } from '../types'
import styles from './header.module.scss'

type HeaderProps = {
  items: NavItem[]
}

export function Header({ items }: PropsWithChildren<HeaderProps>) {
  return (
    <header className={styles['header']}>
      <div className={styles['inner']}>
        <Link className={styles['brand-link']} href="/">
          <img className={styles['logo']} src="/locity.svg" alt="Locity Logo" />
          <h1 className={styles['brand']}>locity</h1>
        </Link>
        <Nav items={items} />
      </div>
    </header>
  )
}
