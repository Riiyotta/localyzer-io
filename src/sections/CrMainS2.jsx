import A from "../lib/A.jsx";

// cr-main-s — the section's real markup, read from the rendered page (route /de/careers, section 1).
export default function CrMainS2() {
  return (
    <section className="cr-main-s" data-clone-section="CrMainS2">
      <div className="container">
        <div className="cr-main-c">
          <div className="cr-main-title-w">
            <h1>
              {"Jobs mit einem impact! "}
              <br />
              im online marketing
            </h1>
            <p className="paragraph-l">
              {"Nicht nur ein Software Unternehmen: "}
              <br />
              Wir steigern ihr Marketingpotenzial und lassen Sie wachsen.
            </p>
          </div>
          <div className="cr-main-open-positions-c">
            <h3>Offene POSITIONen</h3>
            <div className="global-openjobs-listing-c w-dyn-list">
              <div role="list" className="global-openjobs-listing-w w-dyn-items">
                <div role="listitem" className="global-openjobs-job-c w-dyn-item">
                  <div className="ab-openjobs-job-w">
                    <h3>(Senior) Sales Consultant (all genders)</h3>
                    <p className="paragraph-m">Wir suchen eine/n (Senior) Sales Consultant (all genders) für den strategischen Ausbau des B2B-Neukundengeschäfts. Die Rolle verbindet Hunter-orientierten Pipeline-Aufbau mit beratungsintensivem Enterprise-Vertrieb in direkter Zusammenarbeit mit den Gründern. Gesucht sind 5+ Jahre B2B-SaaS-Vertriebserfahrung, Affinität zu HubSpot und KI-Tools sowie verhandlungssicheres Deutsch und sehr gutes Englisch. 100 % Remote oder hybrid über das Berliner Büro.</p>
                    <div className="ab-openjobs-job-btn-w">
                      <A href="/de/open-positions/senior-sales-consultant" className="btn-primary w-button">Zur Stellenanzeige</A>
                    </div>
                  </div>
                </div>
                <div role="listitem" className="global-openjobs-job-c w-dyn-item">
                  <div className="ab-openjobs-job-w">
                    <h3>Software Developer PHP / Python (m/f/d)</h3>
                    <p className="paragraph-m">Software developer PHP / Python (m/f/x) – Ettlingen in der Nähe von Karlsruhe - Job Beschreibung: wir suchen Unterstützung in der Konzeption und Entwicklung unserer neuesten Software-Features, sowie der kundenspezifischen Erweiterungen.</p>
                    <div className="ab-openjobs-job-btn-w">
                      <A href="/de/open-positions/software-developer-php-python" className="btn-primary w-button">Zur Stellenanzeige</A>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
