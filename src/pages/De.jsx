import A from "../lib/A.jsx";
import usePageChrome from "../lib/usePageChrome.js";
import GlobalHeaderC7 from "../sections/GlobalHeaderC7.jsx";
import HpHeroC2 from "../sections/HpHeroC2.jsx";
import HpHeroImgC2 from "../sections/HpHeroImgC2.jsx";
import HpPlatformS2 from "../sections/HpPlatformS2.jsx";
import HpTrustS2 from "../sections/HpTrustS2.jsx";
import HpMarketingSectionTitle2 from "../sections/HpMarketingSectionTitle2.jsx";
import WLayoutGrid2 from "../sections/WLayoutGrid2.jsx";
import HpCustomerS2 from "../sections/HpCustomerS2.jsx";
import HpInsightsS2 from "../sections/HpInsightsS2.jsx";
import FooterS7 from "../sections/FooterS7.jsx";
import css0 from "../styles/02-localyzer.webflow.671511cf4e0de2cd564eaa.css?inline"; // only this page loads it
import css1 from "../styles/inline-02.css?inline"; // only this page loads it
import css2 from "../styles/inline-03.css?inline"; // only this page loads it
import css3 from "../styles/inline-06.css?inline"; // only this page loads it

// Route /de — 10 section(s), in page order.
export default function De() {
  usePageChrome({ title: "Localyzer | Das Brand-to-Local-System für Co-op-Marketing", html: { "data-wf-domain": "www.localyzer.io", "data-wf-page": "671511cf4e0de2cd564eaaa4", "data-wf-site": "671511cf4e0de2cd564eaa9d", "lang": "de-DE", "class": " w-mod-js w-mod-ix", "style": "scroll-behavior: auto;" }, body: { "style": "scroll-behavior: auto;" } });
  return (
    <>
      <style>{css0}</style>
      <style>{css1}</style>
      <style>{css2}</style>
      <style>{css3}</style>
    <div className="css-embed w-embed"></div>
    <div className="css-embed w-embed"></div>
    <GlobalHeaderC7 />
    <main>
      <section className="hp-hero-s">
        <div className="container">
          <HpHeroC2 />
        </div>
        <HpHeroImgC2 />
      </section>
      <div className="hp-zindex navbar-scroll">
        <HpPlatformS2 />
        <HpTrustS2 />
        <section className="hp-advg-s">
          <div className="container-large">
            <div className="hp-advg-c">
              <HpMarketingSectionTitle2 />
              <WLayoutGrid2 />
            </div>
          </div>
        </section>
        <HpCustomerS2 />
        <div className="global-separator"></div>
        <HpInsightsS2 />
      </div>
    </main>
    <FooterS7 />
    <section className="book-demo-s">
      <div className="container-small">
        <div className="book-demo-c">
          <div className="ct-main-form-w w-form">
            <form id="wf-form-Book-Demo-Form" name="wf-form-Book-Demo-Form" data-name="Book Demo Form" method="get" className="ct-main-form" data-wf-page-id="671511cf4e0de2cd564eaaa4" data-wf-element-id="d12daf23-e8cc-0f33-4b56-3f156c28ffae" data-wf-locale-id="674d77a38df950c013ca5292" aria-label="Book Demo Form" onSubmit={(e) => e.preventDefault()}>
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
    <div fs-cc-display="block" fs-cc="banner" className="fs-cc-banner_component">
      <div className="fs-cc-styles">
        <div className="fs-cc-default_maxwidth"></div>
        <div className="fs-cc-default_background"></div>
        <div className="fs-cc-default_padding"></div>
        <div className="fs-cc-default_radius"></div>
        <div className="fs-cc-default_border"></div>
        <div className="fs-cc-default_hide-all"></div>
        <div className="fs-cc-default_styles w-embed"></div>
      </div>
      <div className="fs-cc-banner_modal fs-cc-default_radius fs-cc-default_border fs-cc-default_maxwidth fs-cc-default_background">
        <a fs-cc="deny" href="#" className="fs-cc-modal_close-button w-inline-block">
          <div className="fs-cc-screenreader-only">Cookie-Popup schließen</div>
          <div className="fs-cc-modal_close-button-line"></div>
          <div className="fs-cc-modal_close-button-line is-second"></div>
        </a>
        <div className="fs-cc-modal_wrapper fs-cc-default_padding">
          <div className="fs-cc-modal_title">Cookie-Präferenzen</div>
          <div className="fs-cc-modal_description">
            {"Wenn Sie auf „Alle akzeptieren“ klicken, stimmen Sie der Speicherung von Cookies auf Ihrem Gerät zu, um die Seitennavigation zu verbessern, die Nutzung der Website zu analysieren und unsere Marketingbemühungen zu unterstützen, wie in unseren "}
            <A href="/legal/privacy-policy" target="_blank" className="fs-cc-modal_link">Datenschutzrichtlinie</A>
            .
          </div>
          <div className="fs-cc-modal_prefs w-form" style={{ "width": "100%", "height": "0px", "display": "none" }}>
            <form id="ck-form" name="wf-form-ck-form" data-name="ck-form" method="get" className="fs-cc-prefs_wrapper" data-wf-page-id="671511cf4e0de2cd564eaaa4" data-wf-element-id="f0b03ae1-241b-76a0-2ce8-4c64aa10d767" data-wf-locale-id="674d77a38df950c013ca5292" aria-label="ck-form" onSubmit={(e) => e.preventDefault()}>
              <div className="fs-cc-prefs_option">
                <div className="fs-cc-prefs_checkbox w-clearfix">
                  <div className="fs-cc-prefs_checkbox-toggle is-required"></div>
                  <div className="fs-cc-prefs_checkbox-label">Unbedingt erforderlich (immer aktiv)</div>
                </div>
                <div className="fs-cc-prefs_description">Cookies, die erforderlich sind, um grundlegende Funktionen der Website zu ermöglichen.</div>
              </div>
              <div className="fs-cc-prefs_option">
                <label className="w-checkbox fs-cc-prefs_checkbox w-clearfix">
                  <div className="w-checkbox-input w-checkbox-input--inputType-custom fs-cc-prefs_checkbox-toggle"></div>
                  <input type="checkbox" name="Fs-Analytics" id="fs__analytics" data-name="Fs Analytics" fs-cc-checkbox="analytics" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} />
                  <span htmlFor="Fs-Analytics" className="fs-cc-prefs_checkbox-label w-form-label">
                    Analytik
                    <br />
                  </span>
                </label>
                <div className="fs-cc-prefs_description">Cookies helfen uns zu verstehen, wie diese Website funktioniert, wie Besucher mit der Website interagieren und ob es technische Probleme geben könnte.</div>
              </div>
              <div className="fs-cc-prefs_option">
                <label className="w-checkbox fs-cc-prefs_checkbox w-clearfix">
                  <div className="w-checkbox-input w-checkbox-input--inputType-custom fs-cc-prefs_checkbox-toggle"></div>
                  <input type="checkbox" name="Fs-Marketing" id="fs__marketing" data-name="Fs Marketing" fs-cc-checkbox="marketing" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} />
                  <span htmlFor="Fs-Marketing" className="fs-cc-prefs_checkbox-label w-form-label">Marketing</span>
                </label>
                <div className="fs-cc-prefs_description">Cookies, die verwendet werden, um Werbung bereitzustellen, die für Sie und Ihre Interessen relevanter ist.</div>
              </div>
              <div className="fs-cc-prefs_option">
                <label className="w-checkbox fs-cc-prefs_checkbox w-clearfix">
                  <div className="w-checkbox-input w-checkbox-input--inputType-custom fs-cc-prefs_checkbox-toggle"></div>
                  <input type="checkbox" name="Fs-Personalization" id="fs__personalization" data-name="Fs Personalization" fs-cc-checkbox="personalization" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} />
                  <span htmlFor="Fs-Personalization" className="fs-cc-prefs_checkbox-label w-form-label">
                    Personalisierung
                    <br />
                  </span>
                </label>
                <div className="fs-cc-prefs_description">Cookies, die es der Website ermöglichen, sich an die von Ihnen getroffenen Entscheidungen zu erinnern (z. B. Ihren Benutzernamen, Ihre Sprache oder die Region, in der Sie sich befinden).</div>
              </div>
            </form>
            <div className="fs-cc-default_hide-all w-form-done" tabIndex="-1" role="region" aria-label="ck-form success"></div>
            <div className="fs-cc-default_hide-all w-form-fail" tabIndex="-1" role="region" aria-label="ck-form failure"></div>
          </div>
        </div>
        <div className="fs-cc-modal_buttons fs-cc-default_padding fs-cc-default_radius fs-cc-default_background">
          <div className="fs-cc-button-line-wrap fs-cc-default_padding">
            <div className="fs-cc-horizontal-line fs-cc-default_border"></div>
          </div>
          <a data-w-id="f0b03ae1-241b-76a0-2ce8-4c64aa10d78b" href="#" className="fs-cc-button fs-cc-is-secondary w-inline-block" style={{ "display": "inline-block" }}>
            <div className="fs-cc-button_text">Anpassen</div>
          </a>
          <a fs-cc="submit" href="#" className="fs-cc-button fs-cc-is-secondary fs-cc-default_hide-all w-inline-block" style={{ "display": "none" }}>
            <div className="fs-cc-button_text">Speichern</div>
          </a>
          <div className="fs-cc-button_actions">
            <a fs-cc="deny" href="#" className="fs-cc-button w-inline-block">
              <div className="fs-cc-button_text">Ablehnen</div>
            </a>
            <a fs-cc="allow" href="#" className="fs-cc-button w-inline-block">
              <div className="fs-cc-button_text">Alles akzeptieren</div>
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
