import Link from 'next/link'
import { PropsWithChildren } from 'react'
import { NavItem } from '../types'
import styles from './footer.module.scss'

type FooterProps = {
  items: NavItem[]
}

export function Footer({ items }: PropsWithChildren<FooterProps>) {
  const year = new Date().getFullYear()
  return (
    <div className={styles['container']}>
      <p>© {year} locity gmbh</p>
      {items.map((item, index) => (
        <Link className={styles['link']} key={index} href={item.href}>
          {item.text}
        </Link>
      ))}
    </div>
  )
}
