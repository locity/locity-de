import Link from 'next/link'
import styles from './footer.module.scss'

const footerItems = [
  { text: 'datenschutz', href: '/datenschutz' },
  { text: 'kontakt', href: '/kontakt' },
  { text: 'impressum', href: '/impressum' },
]

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <div className={styles['container']}>
      <p>© {year} locity gmbh</p>
      {footerItems.map((item, index) => (
        <>
          <p> - </p>
          <Link className={styles['link']} key={index} href={item.href}>
            {item.text}
          </Link>
        </>
      ))}
    </div>
  )
}

export default Footer
