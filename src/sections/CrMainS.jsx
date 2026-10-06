import A from "../lib/A.jsx";

// cr-main-s — the section's real markup, read from the rendered page (route /careers, section 1).
export default function CrMainS() {
  return (
    <section className="cr-main-s" data-clone-section="CrMainS">
      <div className="container">
        <div className="cr-main-c">
          <div className="cr-main-title-w">
            <h1>
              {"Jobs with impact! "}
              <br />
              in online marketing
            </h1>
            <p className="paragraph-l">
              More than just a software company.
              <br />
              {"We're here to help you grow your marketing reach."}
            </p>
          </div>
          <div className="cr-main-open-positions-c">
            <h3>OPEN POSITIONS</h3>
            <div className="global-openjobs-listing-c w-dyn-list">
              <div role="list" className="global-openjobs-listing-w w-dyn-items">
                <div role="listitem" className="global-openjobs-job-c w-dyn-item">
                  <div className="ab-openjobs-job-w">
                    <h3>(Senior) Sales Consultant (all genders)</h3>
                    <p className="paragraph-m">We are hiring a (Senior) Sales Consultant (all genders) to drive strategic B2B new business growth. The role combines hunter-style pipeline development with consultative enterprise selling and works directly alongside the founders. We are looking for 5+ years of B2B SaaS sales experience, a strong HubSpot/AI tool affinity, and business-fluent German plus strong English. 100% remote or hybrid via our Berlin office</p>
                    <div className="ab-openjobs-job-btn-w">
                      <A href="/open-positions/senior-sales-consultant" className="btn-primary w-button">Read More</A>
                    </div>
                  </div>
                </div>
                <div role="listitem" className="global-openjobs-job-c w-dyn-item">
                  <div className="ab-openjobs-job-w">
                    <h3>Software Developer PHP / Python (m/f/d)</h3>
                    <p className="paragraph-m">Software developer PHP / Python (m/f/x) – Ettlingen near Karlsruhe Job Description As the newest member of our crew, you should help us to continue to develop as dynamically as before.</p>
                    <div className="ab-openjobs-job-btn-w">
                      <A href="/open-positions/software-developer-php-python" className="btn-primary w-button">Read More</A>
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
