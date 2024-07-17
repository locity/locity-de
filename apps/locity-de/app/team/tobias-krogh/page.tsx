import styles from './page.module.scss'

export default function TobiasKrogh() {
  return (
    <div className={styles['container']}>
      <h1>Tobias Krogh</h1>
      <h4>eMail</h4>
      <a href="mailto:krogh@locity.de">krogh@locity.de</a>
      <h4>Baujahr</h4>
      1985 (Kaltenkirchen)
      <h4>Werdegang</h4>
      <p>
        Nach der Ausbildung habe ich bei Cellular mobile Webseiten und WebApps auf der Basis von HTML, CSS, Javascript und PHP erstellt und
        mich später bei der XING AG der Software-Architektur gewidmet und meine Kenntnisse in den Bereichen Struktur und Performance von
        Web-Anwendungen sowie den bekannten Technologie Stack erweitert. Im Jahr 2016 machte ich mich selbstständig und wurde 2017 zweiter
        Gesellschafter der Locity GmbH. Trotz überwiegend projektbasierten Einsatzes von Angular und React, verstehe ich mich auf nativen
        Einsatz von JavaScript und habe keine Berührungsängste mit dem Backend.
      </p>
    </div>
  )
}
