import { Metadata } from 'next'
import styles from './page.module.scss'

export const metadata: Metadata = {
  title: 'marco steinhoff',
  description: 'Frontend Architecktur und Entwicklung',
}

export default function MarcoSteinhoff() {
  return (
    <div className={styles['container']}>
      <h1>Marco Steinhoff</h1>
      <h4>Telefon</h4>
      <a href="tel:+491795201820">+49.179.5201820</a>
      <h4>eMail</h4>
      <a href="mailto:steinhoff@locity.de">steinhoff@locity.de</a>
      <h4>Baujahr</h4>
      1981 (Hamburg)
      <h4>Studium</h4>
      <p>
        FH-Wedel Studienrichtung Wirtschaftsinformatik
        <br />
        Abschluss: Diplom Wirtschaftsinformatiker (FH)
      </p>
      <h4>Werdegang</h4>
      <p>
        Nach meinem Diplom in Wirt.-Inf. gründete ich mit zwei Freunden das erste StartUp - TEAMSUNITED. Hier füllte ich die Position des CTOs aus und wuchs mit den entwicklungstechnischen sowie
        betriebswirtschaftlichen Aufgaben. Trotz vieler gewonnener Wettbewerbe und zahlreicher Investoren konnte die erforderliche Marktdurchdringung nicht erreicht werden und so wurde TEAMSUNITED
        2012 eingestellt. Seitdem arbeite ich als freiberuflicher Full-Stack Web- Entwickler für verschiedene StartUps, Kunden und Agenturen. Im Jahr 2013 gründete ich die Locity UG als Entwicklungs-
        und Beteiligungsgesellschaft und mit Aufnahme eines zweiten Gesellschafters wurde die Locity UG im Mai 2017 zur Locity GmbH.
      </p>
    </div>
  )
}
