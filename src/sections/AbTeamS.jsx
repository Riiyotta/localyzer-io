import A from "../lib/A.jsx";

// ab-team-s — the section's real markup, read from the rendered page (route /about, section 3).
export default function AbTeamS() {
  return (
    <section className="ab-team-s" data-clone-section="AbTeamS">
      <div className="container">
        <div className="ab-team-c">
          <div className="ab-team-header-c">
            <div className="ab-team-header-title-w">
              <h2>our team</h2>
            </div>
            <div className="ab-team-header-text-w">
              <p className="paragraph-m">Our team at Localyzer is made up of experienced professionals who have helped numerous clients harness the power of our SaaS solution to improve their local online marketing. Our mix of software developers and marketing experts provide you with all the experience you need to make the most of your local online marketing.</p>
              <div className="ab-team-header-btn-w">
                <A href="/careers" className="btn-primary w-button outline">see open positions</A>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
