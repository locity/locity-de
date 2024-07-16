import NavLink from '../nav-link/nav-link'
import styles from './nav.module.scss'

const menuItems = [
  // { text: 'Home', href: '/' },
  { text: 'projekte', href: '/projekte' },
  { text: 'team', href: '/team' },
  { text: 'kontakt', href: '/kontakt' },
  // { text: 'Impressum', href: '/impressum' },
]

export function Nav() {
  return (
    <nav className={styles['nav']}>
      {menuItems.map((item, index) => (
        <NavLink className={styles['item']} activeClassName={styles['active']} key={index} href={item.href}>
          {item.text}
        </NavLink>
      ))}
    </nav>
  )
}

export default Nav
