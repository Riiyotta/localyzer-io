// ct-main-s — the section's real markup, read from the rendered page (route /contact, section 1).
export default function CtMainS() {
  return (
    <section className="ct-main-s" data-clone-section="CtMainS">
      <div className="container-small">
        <div className="ct-main-c">
          <div className="ct-main-form-title-w">
            <h1>{"Let's get in touch"}</h1>
            <p>{"Can’t find what you’re looking for? Please contact us and we'll get back to you as soon as possible."}</p>
          </div>
          <div className="ct-main-form-c">
            <div className="ct-main-form-w w-form">
              <form id="wf-form-Contact-Form" name="wf-form-Contact-Form" data-name="Contact Form" method="get" className="ct-main-form" data-wf-page-id="67225e9825b68be320898263" data-wf-element-id="f75dde52-424f-f18c-e29b-cb65189ee320" aria-label="Contact Form" onSubmit={(e) => e.preventDefault()}>
                <div className="ct-form-input-c">
                  <label htmlFor="name" className="ct-main-form-field-label">Full Name *</label>
                  <input className="ct-main-form-field w-input" maxLength="256" name="name" data-name="Name" placeholder="Type Here" type="text" id="name" required />
                </div>
                <div className="ct-form-input-c">
                  <label htmlFor="email" className="ct-main-form-field-label">Email *</label>
                  <input className="ct-main-form-field w-input" maxLength="256" name="email" data-name="Email" placeholder="Type Here" type="email" id="email" required />
                </div>
                <div className="ct-form-input-c">
                  <label htmlFor="Phone" className="ct-main-form-field-label">Phone Number *</label>
                  <input className="ct-main-form-field w-input" maxLength="256" name="Phone" data-name="Phone" placeholder="Type Here" type="tel" id="Phone" required />
                </div>
                <div className="ct-form-input-c">
                  <label htmlFor="Company" className="ct-main-form-field-label">Company</label>
                  <input className="ct-main-form-field w-input" maxLength="256" name="Company" data-name="Company" placeholder="Type Here" type="text" id="Company" />
                </div>
                <div className="ct-form-input-c">
                  <label htmlFor="Message-2" className="ct-main-form-field-label">Message</label>
                  <textarea placeholder="Tell us about your needs, eg. request a meeting..." maxLength="5000" id="Message-2" name="Message" data-name="Message" className="ct-main-form-field w-input" defaultValue={""} />
                </div>
                <div className="ct-form-terms-c">
                  <label className="w-checkbox ct-form-checkbox-c">
                    <div className="w-checkbox-input w-checkbox-input--inputType-custom ct-form-checkbox"></div>
                    <input type="checkbox" id="checkbox" name="checkbox" data-name="Checkbox" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} />
                    <span className="ct-form-checkbox-label w-form-label" htmlFor="checkbox">By checking this you agree to our privacy policy and to marketing communication (we promise not send any spam) you can unsubscribe at any time</span>
                  </label>
                </div>
                <div className="w-form-formrecaptcha g-recaptcha g-recaptcha-error g-recaptcha-disabled g-recaptcha-invalid-key"></div>
                <div className="ct-form-button-c">
                  <input type="submit" data-wait="Please wait..." className="btn-primary submit w-button" defaultValue="Send message" />
                  <a aria-label="submit form" href="#" className="btn-primary submit arrow w-inline-block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M18.2787 7.72266L16.3931 9.60827L21.4503 14.6654H5.33594V17.3321H21.4503L16.3931 22.3893L18.2787 24.2749L26.5549 15.9988L18.2787 7.72266Z" fill="white" />
                    </svg>
                  </a>
                </div>
              </form>
              <div className="w-form-done" tabIndex="-1" role="region" aria-label="Contact Form success">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="w-form-fail" tabIndex="-1" role="region" aria-label="Contact Form failure">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
          <div className="ct-main-info-c">
            <div className="ct-main-img-w">
              <img src="/_ext/cdn.prod.website-files.com/671511cf4e0de2cd564eaa9d/6783a43e5ee17587313e194a_Localyzer%20Website%20Launch%202024.webp" loading="lazy" width="1500" height="1076" alt="Localyzer team smiling around a long outdoor table with drinks and menus." srcSet="/_ext/cdn.prod.website-files.com/671511cf4e0de2cd564eaa9d/6783a43e5ee17587313e194a_Localyzer%20Website%20Launch%202024-p-500.webp 500w, /_ext/cdn.prod.website-files.com/671511cf4e0de2cd564eaa9d/6783a43e5ee17587313e194a_Localyzer%20Website%20Launch%202024-p-800.webp 800w, /_ext/cdn.prod.website-files.com/671511cf4e0de2cd564eaa9d/6783a43e5ee17587313e194a_Localyzer%20Website%20Launch%202024-p-1080.webp 1080w, /_ext/cdn.prod.website-files.com/671511cf4e0de2cd564eaa9d/6783a43e5ee17587313e194a_Localyzer%20Website%20Launch%202024.webp 1500w" sizes="(max-width: 1500px) 100vw, 1500px" />
            </div>
            <div className="ct-main-info-w">
              <div className="ct-main-info-card-w">
                <div className="ct-info-card-text">
                  <h2 className="h3">OFFICE LOCATION</h2>
                  <p className="paragraph-m">
                    {"Schiffbauerdamm 5 "}
                    <br />
                    10117 Berlin
                  </p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                  <path d="M49.5846 26.576V42.2326C49.5846 46.2926 46.458 49.5826 42.5846 49.5826H13.418C9.54464 49.5826 6.41797 46.2926 6.41797 42.2326V26.576C6.41797 24.3826 7.32797 22.3293 8.93797 20.9293L23.5213 8.1193C26.1113 5.83263 29.8913 5.83263 32.4813 8.1193L47.0646 20.9293C48.6746 22.3293 49.5846 24.3826 49.5846 26.576Z" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="ct-main-info-card-w">
                <div className="ct-info-card-text">
                  <h2 className="h3">CONTACTS</h2>
                  <p className="paragraph-m">
                    Phone: 030 40 36677 30
                    <br />
                    <a href="mailto:info@localyzer.com?subject=Contact" className="ct-info-card-link">info@localyzer.com</a>
                  </p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none" className="ct-info-card-icon">
                  <path d="M26.9252 29.0729C35.9786 38.1262 38.0552 27.6496 43.8186 33.4129C49.3719 38.9662 52.5686 40.0862 45.5219 47.1329C44.6352 47.8329 39.0352 56.3729 19.3186 36.6796C-0.398084 16.9629 8.14189 11.3629 8.84189 10.4762C15.9119 3.40623 17.0086 6.62623 22.5619 12.1796C28.3486 17.9429 17.8719 20.0196 26.9252 29.0729Z" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
