import styles from './page.module.scss'

export default function Contact() {
  return (
    <div className={styles['container']}>
      <h1>Kontakt</h1>
      <br />
      <p>
        <strong>Postadresse</strong>
        <br />
        Locity GmbH
        <br />
        Neusurenland 160
        <br />
        22159 Hamburg
      </p>
      <br />
      <p>
        <strong>Telefon</strong>
        <br />
        <a href="tel:+494060941595">+49.40.60941595</a>
      </p>
      <br />
      <p>
        <strong>eMail</strong>
        <br />
        <a href="mailto:contact@locity.de">contact@locity.de</a>
      </p>
      <br />
      <p>
        <strong>Geschäftsführung</strong>
        <br />
        Marco Steinhoff - <a href="mailto:steinhoff@locity.de">steinhoff@locity.de</a>
        <br />
        Tobias Krogh - <a href="mailto:krogh@locity.de">krogh@locity.de</a>
      </p>
    </div>
  )
}
