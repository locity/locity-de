'use client'

import { usePathname } from 'next/navigation'
import { PropsWithChildren, useEffect, useState } from 'react'
import { NavLink } from '../nav-link/nav-link'
import { NavItem } from '../types'
import styles from './nav.module.scss'

type NavProps = {
  items: NavItem[]
}

export function Nav({ items }: PropsWithChildren<NavProps>) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (pathname) {
      setOpen(false)
    }
  }, [pathname])

  return (
    <nav className={styles['container']}>
      <div className={styles['nav']}>
        {items.map((item, index) => (
          <NavLink className={styles['item']} activeClassName={styles['active']} key={index} href={item.href}>
            {item.text}
          </NavLink>
        ))}
      </div>
      <button className={styles['menu']} onClick={() => setOpen(!open)}>
        <svg className={styles['menu-icon']} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {open ? <path d="M18 6L6 18M6 6l12 12"></path> : <path d="M3 12h18M3 6h18M3 18h18"></path>}
        </svg>
      </button>
      <div className={styles['backdrop'] + (open ? ' ' + styles['open'] : '')} onClick={() => setOpen(false)}></div>
      <aside className={styles['aside'] + (open ? ' ' + styles['open'] : '')}>
        {items.map((item, index) => (
          <NavLink className={styles['item']} activeClassName={styles['active']} key={index} href={item.href}>
            {item.text}
          </NavLink>
        ))}
      </aside>
    </nav>
  )
}
