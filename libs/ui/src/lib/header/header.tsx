import { Nav } from '../nav'
import styles from './header.module.scss'

export function Header() {
  return (
    <div className={styles['container']}>
      <img className={styles['logo']} src="./locity.svg" alt="Locity Logo" />
      <h1>Locity</h1>
      <Nav />
    </div>
  )
}

export default Header
