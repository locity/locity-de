import styles from './page.module.scss'

export default function Contact() {
  return (
    <div className={styles['container']}>
      <h1>Kontakt</h1>
      <p>
        <strong>Postadresse</strong>
        Locity GmbH Neusurenland 160 22159 Hamburg
      </p>
      <p>
        <strong>Telefon</strong>
        <a href="tel:+494060941595">+49.40.60941595</a>
      </p>
      <p>
        <strong>eMail</strong>
        <a href="mailto:contact@locity.de">contact@locity.de</a>
      </p>
      <p>
        <strong>Geschäftsführung</strong>
        Marco Steinhoff - <a href="mailto:steinhoff@locity.de">steinhoff@locity.de</a>
        Tobias Krogh - <a href="mailto:krogh@locity.de">krogh@locity.de</a>
      </p>
    </div>
  )
}
