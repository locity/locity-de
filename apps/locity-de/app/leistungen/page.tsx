import { Metadata } from 'next'
import styles from './page.module.scss'

export const metadata: Metadata = {
  title: 'leistungen',
  description: 'Frontend Architecktur und Entwicklung',
}

export default function Leistungen() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Leistungen!</h1>
    </div>
  )
}
