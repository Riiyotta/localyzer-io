import A from "../lib/A.jsx";

// job-main-s — the section's real markup, read from the rendered page (route /de/open-positions/software-developer-php-python, section 1).
export default function JobMainS4() {
  return (
    <section className="job-main-s" data-clone-section="JobMainS4">
      <div className="container">
        <div className="job-main-c">
          <div className="job-main-title-w">
            <div className="job-main-title-btn-w">
              <A href="/de/careers" className="btn-primary secondary back w-inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <g clipPath="url(#clip0_14_6190)">
                    <path d="M5.21406 8.66602L8.9474 12.3993L7.9974 13.3327L2.66406 7.99935L7.9974 2.66602L8.9474 3.59935L5.21406 7.33268H13.3307V8.66602H5.21406Z" fill="currentColor" />
                  </g>
                  <defs>
                    <clipPath id="clip0_14_6190">
                      <rect width="16" height="16" fill="currentColor" />
                    </clipPath>
                  </defs>
                </svg>
                <div>zurück ZUR ÜBERSICHT</div>
              </A>
            </div>
            <h1 className="h2">Software Developer PHP / Python (m/f/d)</h1>
          </div>
          <div className="job-main-content-w">
            <div className="job-position-richtext w-richtext">
              <p>
                <strong>Stellenbeschreibung</strong>
              </p>
              <p>Als neustes Mitglied in unserer Crew sollst du uns helfen uns weiterhin so dynamisch wie bisher zu entwickeln.</p>
              <p>Du lernst den neuen und innovativen Bereich des plattformgetriebenen Online-Marketings kennen und arbeitest aktiv an der weiteren Gestaltung unseres Startup-Unternehmens mit.</p>
              <p>
                <strong>Das bieten wir Dir:</strong>
              </p>
              <ul role="list">
                <li>Ein innovatives Produkt, welches du von Anfang an aktiv und selbstverantwortlich mitgestaltest</li>
                <li>Flexible Arbeitszeiten inkl. Möglichkeiten für Home Office</li>
                <li>Zeit sich mit neuen Technologien zu beschäftigen und zu experimentieren</li>
                <li>Ein digitales, spannendes und sich stetig weiter entwickelndes Umfeld</li>
              </ul>
              <p>
                <strong>Das sind deine konkreten Aufgaben:</strong>
              </p>
              <ul role="list">
                <li>Konzeption und Entwicklung von neuen Software-Features</li>
                <li>Entwicklung von Kundenspezifischen Erweiterungen (z.B. Schnittstellen wie Single Signon)</li>
                <li>Du hilfst uns beim umfänglichen Re-Factoring unserer Software-Architektur</li>
                <li>Bug-Fixing und Maintenance</li>
              </ul>
              <p>
                <strong>Das solltest Du möglichst mitbringen:</strong>
              </p>
              <ul role="list">
                <li>Gute Kenntnisse in PHP und/oder Python</li>
                <li>Erfahrungen mit Backend-Frameworks wie Laravel, CakePHP oder Flask</li>
                <li>Praktische Erfahrung mit Javascript und Frontend-Frameworks wie Vue, Angular oder React</li>
              </ul>
              <p>Weitere Kenntnisse wie TDD, Security etc. sind ein Plus. Wir entwickeln mit agilen Methoden (Scrum, Kanban) und nutzen Git. Unsere Infrastruktur läuft auf Amazon AWS. Wir nutzen Devops (Ansible, Vagrant).</p>
              <p>
                <strong>
                  Das sind deine neuen Kollegen:
                  <br />
                </strong>
              </p>
              <p>
                {"Wir sind ein buntes Team von Marketern, Entwicklern, Grafikern und Sales-Profis und mit drei Standorten in ganz Deutschland verteilt. Unsere Software-Entwicklung sitzt in der "}
                <a target="_blank">{"Gründerspinnerei "}</a>
                in Ettlingen (bei Karlsruhe).
              </p>
              <p>Wir befinden uns gerade in einer spannenden Wachstumsphase, werden dieses Jahr einige neue Kunden onboarden und unser System stark weiter entwickeln.</p>
              <p>
                <strong>Das ist Localyzer</strong>
              </p>
              <p>Localyzer bietet großen und kleinen Unternehmen die Möglichkeit, mit unserer eigen entwickelten Online-Plattform hochperformantes lokales und individuelles Online-Marketing zu schalten. Für einzelne Standorte oder für ganze Filialketten. Ziel ist es, die Online-Sichtbarkeit des Standortes vor Ort zu stärken.</p>
              <p>Wir wollen das klassische Geschäft/dem Dienstleister vor Ort helfen, Kunden in seine Ladenfläche zu bringen. Innovation, Startup-Geist, Flexibilität, Respekt und Ehrlichkeit sowie eine große Wertschätzung gegenüber unseren Kunden, ist unser Credo.</p>
              <p>
                <strong>Deine Bewerbung</strong>
              </p>
              <p>Wenn wir überzeugt sind, geht es für Dich in einem 2-stufigen Auswahlverfahren weiter. Wir legen viel Wert auf die Wahl neuer Kollegen, damit Du wirklich zu uns und vor allem wir zu Dir passen. Nimmst Du die Herausforderung an?</p>
              <h6>‍</h6>
            </div>
            <div className="job-position-contact">
              <p className="paragraph-s">
                <span className="font-size-16">
                  <strong>{"Bitte sende bei Interesse Deinen Lebenslauf an "}</strong>
                </span>
                <a href="mailto:experts@localyzer.de?subject=Application%20for%20Open%20Position" className="job-mail-link">
                  <span className="font-size-16">
                    <strong>Matthias</strong>
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
