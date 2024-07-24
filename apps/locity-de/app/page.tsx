import Link from 'next/link'
import styles from './page.module.scss'

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className={styles['container']}>
      <h2>
        Ihre Experten für
        <br />
        Frontend-Entwicklung und Architektur
      </h2>
      <h3>Gemeinsam gestalten wir Ihre digitale Zukunft</h3>

      <p>
        Willkommen bei locity, Ihrem Partner für herausragende Frontend-Entwicklung und Architektur. Mit jahrzehntelanger Erfahrung im Entwurf und der Migration von Unternehmensarchitekturen bringen
        wir die Expertise mit, die Ihr Projekt benötigt.
      </p>

      <section>
        <h2>Wer wir sind</h2>
        <p>
          Wir sind zwei erfahrene Frontend Entwickler mit einer Leidenschaft für sauberen Code und innovative Lösungen. Unsere Karriere haben wir in großen Unternehmen gestartet, wo wir maßgeblich an
          der Gestaltung und Migration komplexer Architekturen beteiligt waren. Jetzt bringen wir dieses Wissen und diese Erfahrung direkt zu Ihnen.
        </p>
      </section>

      <section>
        <h2>Unsere Dienstleistungen</h2>
        <p>
          <strong>Architektur-Design und -Migration:</strong> Wir entwerfen skalierbare und effiziente Architekturen und unterstützen Sie bei der Migration bestehender Systeme.
        </p>
        <p>
          <strong>Frontend-Entwicklung:</strong> Von der ersten Idee bis zur finalen Umsetzung – wir liefern maßgeschneiderte Frontend-Lösungen.
        </p>
        <p>
          <strong>Beratung und Schulung:</strong> Profitieren Sie von unserer Expertise und schulen Sie Ihr Team in den neuesten Technologien und Best Practices.
        </p>
      </section>

      <section>
        <h2>Unsere Arbeitsweise</h2>
        <p>Jedes Projekt ist einzigartig, und so ist auch unsere Herangehensweise. Wir setzen auf:</p>
        <p>
          <strong>Agile Methoden:</strong> Flexibilität und Anpassungsfähigkeit sind der Schlüssel zu erfolgreichen Projekten.
        </p>
        <p>
          <strong>Transparente Kommunikation:</strong> Offener Austausch und regelmäßige Updates sorgen für Klarheit und Vertrauen.
        </p>
        <p>
          <strong>Qualität und Präzision:</strong> Wir legen großen Wert auf detailgenaue Arbeit und höchste Qualitätsstandards.
        </p>
      </section>

      <section>
        <h2>Unsere Kundenprojekte</h2>
        <p>
          Wir haben erfolgreich Projekte für namhafte Unternehmen realisiert.
          <br />
          <Link href="/projekte">hier zur Übersicht</Link>
        </p>
      </section>

      <section>
        <h2>Bereit für den nächsten Schritt?</h2>
        <p>Kontaktieren Sie uns noch heute und erfahren Sie, wie wir auch Ihr Projekt zum Erfolg führen können.</p>
        <Link href="/kontakt">Kontaktformular</Link>
      </section>
    </div>
  )
}
