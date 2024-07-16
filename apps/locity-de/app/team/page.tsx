import Link from 'next/link'
import styles from './page.module.scss'

export default function Team() {
  return (
    <div className={styles['container']}>
      <h1>Team</h1>
      <br />

      <Link href="/team/marco-steinhoff">
        <h2>Marco Steinhoff</h2>
      </Link>

      <strong>Geschäftsführer</strong>
      <br />
      <Link href="/team/tobias-krogh">
        <h2>Tobias Krogh</h2>
      </Link>
      <strong>Geschäftsführer</strong>
    </div>
  )
}
