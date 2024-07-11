import { Nav } from '../nav'
import styles from './header.module.scss'

export function Header() {
  return (
    <div className={styles['container']}>
      <h1>Locity</h1>
      <Nav />
    </div>
  )
}

export default Header
