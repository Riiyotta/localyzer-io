import A from "../lib/A.jsx";
import usePageChrome from "../lib/usePageChrome.js";
import GlobalHeaderC from "../sections/GlobalHeaderC.jsx";
import HpHeroC from "../sections/HpHeroC.jsx";
import HpHeroImgC from "../sections/HpHeroImgC.jsx";
import HpPlatformS from "../sections/HpPlatformS.jsx";
import HpTrustS from "../sections/HpTrustS.jsx";
import HpMarketingSectionTitle from "../sections/HpMarketingSectionTitle.jsx";
import WLayoutGrid from "../sections/WLayoutGrid.jsx";
import HpCustomerS from "../sections/HpCustomerS.jsx";
import HpInsightsS from "../sections/HpInsightsS.jsx";
import FooterS from "../sections/FooterS.jsx";
import css0 from "../styles/02-localyzer.webflow.671511cf4e0de2cd564eaa.css?inline"; // only this page loads it
import css1 from "../styles/inline-02.css?inline"; // only this page loads it
import css2 from "../styles/inline-03.css?inline"; // only this page loads it
import css3 from "../styles/inline-06.css?inline"; // only this page loads it

// Route / — 10 section(s), in page order.
export default function HomePage() {
  usePageChrome({ title: "Localyzer | The Brand-to-Local System for Co-op Marketing", html: { "data-wf-domain": "www.localyzer.io", "data-wf-page": "671511cf4e0de2cd564eaaa4", "data-wf-site": "671511cf4e0de2cd564eaa9d", "lang": "en", "class": " w-mod-js w-mod-ix", "style": "scroll-behavior: auto;" }, body: { "style": "scroll-behavior: auto;" } });
  return (
    <>
      <style>{css0}</style>
      <style>{css1}</style>
      <style>{css2}</style>
      <style>{css3}</style>
    <div className="css-embed w-embed"></div>
    <div className="css-embed w-embed"></div>
    <GlobalHeaderC />
    <main>
      <section className="hp-hero-s">
        <div className="container">
          <HpHeroC />
        </div>
        <HpHeroImgC />
      </section>
      <div className="hp-zindex navbar-scroll">
        <HpPlatformS />
        <HpTrustS />
        <section className="hp-advg-s">
          <div className="container-large">
            <div className="hp-advg-c">
              <HpMarketingSectionTitle />
              <WLayoutGrid />
            </div>
          </div>
        </section>
        <HpCustomerS />
        <div className="global-separator"></div>
        <HpInsightsS />
      </div>
    </main>
    <FooterS />
    <section className="book-demo-s">
      <div className="container-small">
        <div className="book-demo-c">
          <div className="ct-main-form-w w-form">
            <form id="wf-form-Book-Demo-Form" name="wf-form-Book-Demo-Form" data-name="Book Demo Form" method="get" className="ct-main-form" data-wf-page-id="671511cf4e0de2cd564eaaa4" data-wf-element-id="d12daf23-e8cc-0f33-4b56-3f156c28ffae" aria-label="Book Demo Form" onSubmit={(e) => e.preventDefault()}>
              <div className="book-demo-title-c">
                <div className="h3">request a demo</div>
                <div className="book-demo-subtitle">Get in touch and our team will get back to you immediately to arrange a free demo.</div>
              </div>
              <div className="ct-form-input-c">
                <label htmlFor="book-demo-name" className="ct-main-form-field-label">Full Name *</label>
                <input className="ct-main-form-field w-input" maxLength="256" name="Name" data-name="Name" placeholder="Type Here" type="text" id="book-demo-name" required />
              </div>
              <div className="ct-form-input-c">
                <label htmlFor="book-demo-email-2" className="ct-main-form-field-label">Email *</label>
                <input className="ct-main-form-field w-input" maxLength="256" name="Email" data-name="Email" placeholder="Type Here" type="email" id="book-demo-email" required />
              </div>
              <div className="ct-form-input-c">
                <label htmlFor="book-demo-phone-2" className="ct-main-form-field-label">Phone Number</label>
                <input className="ct-main-form-field w-input" maxLength="256" name="Phone" data-name="Phone" placeholder="Type Here" type="tel" id="book-demo-phone" />
              </div>
              <div className="ct-form-terms-c">
                <label className="w-checkbox ct-form-checkbox-c">
                  <div className="w-checkbox-input w-checkbox-input--inputType-custom ct-form-checkbox"></div>
                  <input type="checkbox" name="Checkbox-2" id="Checkbox-2" data-name="Checkbox 2" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} />
                  <span className="ct-form-checkbox-label w-form-label" htmlFor="Checkbox-2">By checking this you agree to our privacy policy and to marketing communication (we promise not send any spam) you can unsubscribe at any time</span>
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
          <div className="fs-cc-screenreader-only">Close Cookie Popup</div>
          <div className="fs-cc-modal_close-button-line"></div>
          <div className="fs-cc-modal_close-button-line is-second"></div>
        </a>
        <div className="fs-cc-modal_wrapper fs-cc-default_padding">
          <div className="fs-cc-modal_title">Cookie Preferences</div>
          <div className="fs-cc-modal_description">
            {"By clicking “Accept All”, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage and assist in our marketing efforts as outlined in our "}
            <A href="/legal/privacy-policy" target="_blank" className="fs-cc-modal_link">privacy policy</A>
            .
          </div>
          <div className="fs-cc-modal_prefs w-form" style={{ "width": "100%", "height": "0px", "display": "none" }}>
            <form id="ck-form" name="wf-form-ck-form" data-name="ck-form" method="get" className="fs-cc-prefs_wrapper" data-wf-page-id="671511cf4e0de2cd564eaaa4" data-wf-element-id="f0b03ae1-241b-76a0-2ce8-4c64aa10d767" aria-label="ck-form" onSubmit={(e) => e.preventDefault()}>
              <div className="fs-cc-prefs_option">
                <div className="fs-cc-prefs_checkbox w-clearfix">
                  <div className="fs-cc-prefs_checkbox-toggle is-required"></div>
                  <div className="fs-cc-prefs_checkbox-label">Strictly Necessary (Always Active)</div>
                </div>
                <div className="fs-cc-prefs_description">Cookies required to enable basic website functionality.</div>
              </div>
              <div className="fs-cc-prefs_option">
                <label className="w-checkbox fs-cc-prefs_checkbox w-clearfix">
                  <div className="w-checkbox-input w-checkbox-input--inputType-custom fs-cc-prefs_checkbox-toggle"></div>
                  <input type="checkbox" name="Fs-Analytics" id="fs__analytics" data-name="Fs Analytics" fs-cc-checkbox="analytics" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} />
                  <span htmlFor="Fs-Analytics" className="fs-cc-prefs_checkbox-label w-form-label">
                    Analytics
                    <br />
                  </span>
                </label>
                <div className="fs-cc-prefs_description">Cookies helping us understand how this website performs, how visitors interact with the site, and whether there may be technical issues.</div>
              </div>
              <div className="fs-cc-prefs_option">
                <label className="w-checkbox fs-cc-prefs_checkbox w-clearfix">
                  <div className="w-checkbox-input w-checkbox-input--inputType-custom fs-cc-prefs_checkbox-toggle"></div>
                  <input type="checkbox" name="Fs-Marketing" id="fs__marketing" data-name="Fs Marketing" fs-cc-checkbox="marketing" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} />
                  <span htmlFor="Fs-Marketing" className="fs-cc-prefs_checkbox-label w-form-label">Marketing</span>
                </label>
                <div className="fs-cc-prefs_description">Cookies used to deliver advertising that is more relevant to you and your interests.</div>
              </div>
              <div className="fs-cc-prefs_option">
                <label className="w-checkbox fs-cc-prefs_checkbox w-clearfix">
                  <div className="w-checkbox-input w-checkbox-input--inputType-custom fs-cc-prefs_checkbox-toggle"></div>
                  <input type="checkbox" name="Fs-Personalization" id="fs__personalization" data-name="Fs Personalization" fs-cc-checkbox="personalization" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} />
                  <span htmlFor="Fs-Personalization" className="fs-cc-prefs_checkbox-label w-form-label">
                    Personalization
                    <br />
                  </span>
                </label>
                <div className="fs-cc-prefs_description">Cookies allowing the website to remember choices you make (such as your user name, language, or the region you are in).</div>
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
            <div className="fs-cc-button_text">Customize</div>
          </a>
          <a fs-cc="submit" href="#" className="fs-cc-button fs-cc-is-secondary fs-cc-default_hide-all w-inline-block" style={{ "display": "none" }}>
            <div className="fs-cc-button_text">Save</div>
          </a>
          <div className="fs-cc-button_actions">
            <a fs-cc="deny" href="#" className="fs-cc-button w-inline-block">
              <div className="fs-cc-button_text">Decline All</div>
            </a>
            <a fs-cc="allow" href="#" className="fs-cc-button w-inline-block">
              <div className="fs-cc-button_text">Accept All</div>
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
