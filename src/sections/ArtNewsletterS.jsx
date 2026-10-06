import A from "../lib/A.jsx";

// art-newsletter-s — the section's real markup, read from the rendered page (route /blog/world-cup-2026-sponsor-stocks-analysis, section 4; shared by 28 routes).
export default function ArtNewsletterS() {
  return (
    <section className="art-newsletter-s" data-clone-section="ArtNewsletterS">
      <div className="container-large">
        <div className="global-newsletter-c">
          <div className="global-newsletter-w">
            <h3>subscribe to get Marketing insights to help you level up your ads reach</h3>
            <p className="paragraph-s">Increase your visibility and attract new customers. Improve your global advertising for local success.</p>
            <div className="global-newsletter-form-c w-form">
              <form id="email-form" name="email-form" data-name="Email Form" method="post" className="global-newsletter-form-w" data-wf-page-id="6720ad34dc7b193ae60a515c" data-wf-element-id="7c1b08bc-cc41-aa83-75be-5ecc82d0cffb" aria-label="Email Form" onSubmit={(e) => e.preventDefault()}>
                <div className="w-form-formrecaptcha g-recaptcha g-recaptcha-error g-recaptcha-disabled g-recaptcha-invalid-key"></div>
                <div className="global-newsletter-form-fields-c">
                  <input className="global-newsletter-form-field-w w-input" maxLength="256" name="EMAIL" data-name="EMAIL" placeholder="Enter your work email" type="email" id="EMAIL" required />
                  <div className="global-newsletter-form-btn-w">
                    <input type="submit" data-wait="Please wait..." className="btn-primary newsletter w-button" defaultValue="SUBSCRIBE" />
                  </div>
                </div>
              </form>
              <div className="success-message w-form-done" tabIndex="-1" role="region" aria-label="Email Form success">
                <div>
                  <strong>Thank you! Your submission has been received!</strong>
                </div>
              </div>
              <div className="error-message w-form-fail" tabIndex="-1" role="region" aria-label="Email Form failure">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
            <p className="paragraph-s paragraph-xs">
              {"By clicking Subscribe, you will receive our newsletter – revocable at any time. See our "}
              <A href="/legal/privacy-policy">privacy policy for det</A>
              ails.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
