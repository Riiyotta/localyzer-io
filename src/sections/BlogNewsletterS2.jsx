import A from "../lib/A.jsx";

// blog-newsletter-s — the section's real markup, read from the rendered page (route /de/blog, section 2).
export default function BlogNewsletterS2() {
  return (
    <section className="blog-newsletter-s" data-clone-section="BlogNewsletterS2">
      <div className="container-large">
        <div className="global-newsletter-c">
          <div className="global-newsletter-w">
            <h3>{"Abonniere unseren Newsletter für Die Neusten Marketing-Insights "}</h3>
            <p className="paragraph-s">Steigern Sie Ihre Sichtbarkeit und gewinnen Sie neue Kunden. Optimieren Sie Ihre Werbung für den lokalen Erfolg.</p>
            <div className="global-newsletter-form-c w-form">
              <form id="email-form" name="email-form" data-name="Email Form" method="post" className="global-newsletter-form-w" data-wf-page-id="6720eff3c44ec199e2d99fe3" data-wf-element-id="7c1b08bc-cc41-aa83-75be-5ecc82d0cffb" data-wf-locale-id="674d77a38df950c013ca5292" aria-label="Email Form" onSubmit={(e) => e.preventDefault()}>
                <div className="w-form-formrecaptcha g-recaptcha g-recaptcha-error g-recaptcha-disabled g-recaptcha-invalid-key"></div>
                <div className="global-newsletter-form-fields-c">
                  <input className="global-newsletter-form-field-w w-input" maxLength="256" name="EMAIL" data-name="EMAIL" placeholder="Ihre E-Mail Adresse" type="email" id="EMAIL" required />
                  <div className="global-newsletter-form-btn-w">
                    <input type="submit" data-wait="Bitte warten..." className="btn-primary newsletter w-button" defaultValue="Abonnieren" />
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
              {"Mit Klick auf abonnieren stimmen Sie zu, den Localyzer Newsletter zu erhalten. Sie können diesen jederzeit via Link im Newsletter abbestellen. Weitere Infos finden Sie in unserer "}
              <A href="/legal/privacy-policy">
                <strong>Datenschutzerklärung</strong>
              </A>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
