'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './breadcrumb.module.scss'

export function Breadcrumb() {
  const paths = usePathname()
    .split('/')
    .filter((path) => path)
  const pathNames = paths
    .filter((path) => path)
    .map((path, index) => {
      let name = path.replace(/-/g, ' ')
      if (name.length > 15) {
        name = name.slice(0, 15) + '…'
      }
      return { name, href: `/${paths.slice(0, index + 1).join('/')}` }
    })
  if (pathNames.length === 0) {
    return null
  }
  return (
    <ul className={styles['breadcrumb']}>
      <li className={styles['item']}>
        <Link href="/">home</Link>
      </li>
      {pathNames.map((item, index) => (
        <div key={index} className={styles['wrapper']}>
          <li className={styles['item']}>|</li>
          <li className={styles['item']}>
            <Link href={item.href}>{item.name}</Link>
          </li>
        </div>
      ))}
    </ul>
  )
}
