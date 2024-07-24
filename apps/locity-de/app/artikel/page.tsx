import { Metadata } from 'next'
import styles from './page.module.scss'

export const metadata: Metadata = {
  title: 'artikel',
  description: 'Frontend Architecktur und Entwicklung',
}

export default function Artikel() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Artikel!</h1>
    </div>
  )
}
