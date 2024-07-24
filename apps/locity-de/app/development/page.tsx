import { Metadata } from 'next'
import styles from './page.module.scss'

export const metadata: Metadata = {
  title: 'development',
  description: 'Frontend Architecktur und Entwicklung',
}

export default function Development() {
  return (
    <div className={styles['container']}>
      <h1>Development</h1>
    </div>
  )
}
