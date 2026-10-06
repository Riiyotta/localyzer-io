import A from "../lib/A.jsx";

// ab-team-s — the section's real markup, read from the rendered page (route /de/about, section 3).
export default function AbTeamS2() {
  return (
    <section className="ab-team-s" data-clone-section="AbTeamS2">
      <div className="container">
        <div className="ab-team-c">
          <div className="ab-team-header-c">
            <div className="ab-team-header-title-w">
              <h2>Unser team</h2>
            </div>
            <div className="ab-team-header-text-w">
              <p className="paragraph-m">Unser Team bei Localyzer besteht aus erfahrenen Experten, die zahlreichen Kunden geholfen haben, das Potenzial unserer SaaS-Lösung für ihr lokales Online-Marketing voll auszuschöpfen. Mit einer Kombination aus Softwareentwicklern und Marketingprofis bieten wir Ihnen genau die Expertise, um das Beste aus Ihrem lokalen Online-Marketing herauszuholen.</p>
              <div className="ab-team-header-btn-w">
                <A href="/de/careers" className="btn-primary w-button outline">Offene Stellenanzeigen</A>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
