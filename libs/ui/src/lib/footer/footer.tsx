import Link from 'next/link'
import styles from './footer.module.scss'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <div className={styles['container']}>
      <p>© {year} locity gmbh</p>
      <p> - </p>
      <Link className={styles['link']} href="/datenschutz">
        datenschutz
      </Link>
      <p> - </p>
      <Link className={styles['link']} href="/kontakt">
        kontakt
      </Link>
      <p> - </p>
      <Link className={styles['link']} href="/impressum">
        impressum
      </Link>
    </div>
  )
}
