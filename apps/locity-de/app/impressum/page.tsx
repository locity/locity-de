import styles from './page.module.scss'

export default function Impressum() {
  return (
    <div className={styles['container']}>
      <h1>Impressum</h1>
      <br />
      <p>
        <strong>Angaben gemäß §5 TMG</strong>
      </p>
      <p>
        Locity GmbH
        <br /> Neusurenland 160
        <br /> 22159 Hamburg
      </p>
      <br />
      <p>
        <strong>Geschäftsführung:</strong> Marco Steinhoff, Tobias Krogh
        <br /> <strong>Steuer-Nr.:</strong> 50/740/01272
        <br /> <strong>USt-IdNr.:</strong> DE288843393
        <br /> <strong>Handelsregister:</strong> Amtsgericht Hamburg HRB 126691
        <br /> <strong>Sitz der Gesellschaft:</strong> Hamburg
        <br />
      </p>
      <h2>Kontakt</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Telefon:</td>
            <td>
              <a href="tel:+494060941595">+49.40.60941595</a>
            </td>
          </tr>
          <tr>
            <td>Fax:</td>
            <td>+49.40.60941595.9</td>
          </tr>
          <tr>
            <td>eMail:</td>
            <td>
              <a href="mailto:contact@locity.de">contact@locity.de</a>
            </td>
          </tr>
        </tbody>
      </table>
      <h2>Haftungsausschluss</h2>
      <h4>Haftung für Links</h4>
      <p>
        Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
        fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
        der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
        Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten
        Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden
        wir derartige Links umgehend entfernen.
      </p>
      <h4>Urheberrecht</h4>
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die
        Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
        schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht
        kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
        Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
        Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
        werden wir derartige Inhalte umgehend entfernen.
      </p>
      <h4>Datenschutz</h4>
      <p>
        Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten
        personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf
        freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. Wir weisen darauf hin, dass
        die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz
        der Daten vor dem Zugriff durch Dritte ist nicht möglich. Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
        Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit
        ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten
        Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.
      </p>
      <h4>Google Analytics</h4>
      <p>
        Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. (&quot;Google&quot;). Google Analytics verwendet sog.
        &quot;Cookies&quot;, Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie
        ermöglicht. Die durch den Cookie erzeugten Informationen über Ihre Benutzung diese Website (einschließlich Ihrer IP-Adresse) wird an
        einen Server von Google in den USA übertragen und dort gespeichert. Google wird diese Informationen benutzen, um Ihre Nutzung der
        Website auszuwerten, um Reports über die Websiteaktivitäten für die Websitebetreiber zusammenzustellen und um weitere mit der
        Websitenutzung und der Internetnutzung verbundene Dienstleistungen zu erbringen. Auch wird Google diese Informationen gegebenenfalls
        an Dritte übertragen, sofern dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten im Auftrag von Google verarbeiten. Google
        wird in keinem Fall Ihre IP-Adresse mit anderen Daten der Google in Verbindung bringen. Sie können die Installation der Cookies
        durch eine entsprechende Einstellung Ihrer Browser Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall
        gegebenenfalls nicht sämtliche Funktionen dieser Website voll umfänglich nutzen können. Durch die Nutzung dieser Website erklären
        Sie sich mit der Bearbeitung der über Sie erhobenen Daten durch Google in der zuvor beschriebenen Art und Weise und zu dem zuvor
        benannten Zweck einverstanden.
      </p>
    </div>
  )
}
