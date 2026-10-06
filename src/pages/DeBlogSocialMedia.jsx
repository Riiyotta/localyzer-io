import A from "../lib/A.jsx";
import usePageChrome from "../lib/usePageChrome.js";
import GlobalHeaderC55 from "../sections/GlobalHeaderC55.jsx";
import ArtHeaderW40 from "../sections/ArtHeaderW40.jsx";
import ArtImageW11 from "../sections/ArtImageW11.jsx";
import ArtContentW40 from "../sections/ArtContentW40.jsx";
import ArtNewsletterS2 from "../sections/ArtNewsletterS2.jsx";
import ArtRelatedS26 from "../sections/ArtRelatedS26.jsx";
import FooterS18 from "../sections/FooterS18.jsx";
import css0 from "../styles/08-localyzer.webflow.6720ad34dc7b193ae60a51.css?inline"; // only this page loads it
import css1 from "../styles/inline-11.css?inline"; // only this page loads it

// Route /de/blog/social-media-analyse-die-top-100-mittelstaendler — 7 section(s), in page order.
export default function DeBlogSocialMedia() {
  usePageChrome({ title: "Social-Media-Analyse: Die Top 100 Mittelständler – Wer erfolgreich ist und wer Potenziale verschenkt", html: { "data-wf-domain": "www.localyzer.io", "data-wf-page": "6720ad34dc7b193ae60a515c", "data-wf-site": "671511cf4e0de2cd564eaa9d", "lang": "de-DE", "data-wf-collection": "6720ad34dc7b193ae60a514e", "data-wf-item-slug": "social-media-analyse-die-top-100-mittelstaendler", "class": " w-mod-js w-mod-ix" }, body: {  } });
  return (
    <>
      <style>{css0}</style>
      <style>{css1}</style>
    <div className="css-embed w-embed"></div>
    <div className="css-embed w-embed"></div>
    <GlobalHeaderC55 />
    <main className="main">
      <section className="art-main-s">
        <div className="container-small">
          <div className="art-main-c">
            <ArtHeaderW40 />
            <ArtImageW11 />
            <ArtContentW40 />
          </div>
        </div>
      </section>
      <ArtNewsletterS2 />
      <ArtRelatedS26 />
    </main>
    <FooterS18 />
    <section className="book-demo-s">
      <div className="container-small">
        <div className="book-demo-c">
          <div className="ct-main-form-w w-form">
            <form id="wf-form-Book-Demo-Form" name="wf-form-Book-Demo-Form" data-name="Book Demo Form" method="get" className="ct-main-form" data-wf-page-id="6720ad34dc7b193ae60a515c" data-wf-element-id="d12daf23-e8cc-0f33-4b56-3f156c28ffae" data-wf-locale-id="674d77a38df950c013ca5292" aria-label="Book Demo Form" onSubmit={(e) => e.preventDefault()}>
              <div className="book-demo-title-c">
                <div className="h3">demo anfordern</div>
                <div className="book-demo-subtitle">Nehmen Sie Kontakt mit uns auf und unser Team wird sich umgehend mit Ihnen in Verbindung setzen, um eine kostenlose Demo zu vereinbaren.</div>
              </div>
              <div className="ct-form-input-c">
                <label htmlFor="book-demo-name" className="ct-main-form-field-label">Vollständiger Name*</label>
                <input className="ct-main-form-field w-input" maxLength="256" name="Name" data-name="Name" placeholder="Type Here" type="text" id="book-demo-name" required />
              </div>
              <div className="ct-form-input-c">
                <label htmlFor="book-demo-email-2" className="ct-main-form-field-label">Email *</label>
                <input className="ct-main-form-field w-input" maxLength="256" name="Email" data-name="Email" placeholder="Type Here" type="email" id="book-demo-email" required />
              </div>
              <div className="ct-form-input-c">
                <label htmlFor="book-demo-phone-2" className="ct-main-form-field-label">Telefonnummer</label>
                <input className="ct-main-form-field w-input" maxLength="256" name="Phone" data-name="Phone" placeholder="Type Here" type="tel" id="book-demo-phone" />
              </div>
              <div className="ct-form-terms-c">
                <label className="w-checkbox ct-form-checkbox-c">
                  <div className="w-checkbox-input w-checkbox-input--inputType-custom ct-form-checkbox"></div>
                  <input type="checkbox" name="Checkbox-2" id="Checkbox-2" data-name="Checkbox 2" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} />
                  <span className="ct-form-checkbox-label w-form-label" htmlFor="Checkbox-2">Stimmen Sie unseren Datenschutzbestimmungen und der Marketingkommunikation zu (wir versprechen, keinen Spam zu versenden). Sie können sich jederzeit abmelden</span>
                </label>
              </div>
              <div className="w-form-formrecaptcha g-recaptcha g-recaptcha-error g-recaptcha-disabled g-recaptcha-invalid-key"></div>
              <div className="ct-form-button-c">
                <input type="submit" data-wait="Please wait..." className="btn-primary submit w-button" defaultValue="Get a free demo" />
                <a href="#" className="btn-primary arrow w-inline-block">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M18.2787 7.72266L16.3931 9.60827L21.4503 14.6654H5.33594V17.3321H21.4503L16.3931 22.3893L18.2787 24.2749L26.5549 15.9988L18.2787 7.72266Z" fill="white" />
                  </svg>
                </a>
              </div>
            </form>
            <div className="form-success-c w-form-done" tabIndex="-1" role="region" aria-label="Book Demo Form success">
              <div className="form-success-title">Thank You for Requesting a Demo!</div>
              <p className="paragraph-l">One of our team members will be in touch shortly to schedule your demo and answer any questions you might have. In the meantime, feel free to explore our website</p>
              <div className="form-success-btn-c">
                <div cd="close-book" className="btn-primary">close</div>
              </div>
            </div>
            <div className="w-form-fail" tabIndex="-1" role="region" aria-label="Book Demo Form failure">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
          <div cd="close-book" className="book-demo-close">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L10.5858 12L5.29292 17.2929C4.9024 17.6834 4.9024 18.3166 5.29292 18.7071C5.68345 19.0976 6.31661 19.0976 6.70714 18.7071L12 13.4142L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L13.4142 12L18.7071 6.70711C19.0977 6.31658 19.0977 5.68342 18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L12 10.5858L6.70711 5.29289Z" fill="#003F3A" />
            </svg>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
