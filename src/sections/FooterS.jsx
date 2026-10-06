import A from "../lib/A.jsx";

// footer-s — the section's real markup, read from the rendered page (route /, section 9).
export default function FooterS() {
  return (
    <section className="footer-s" data-clone-section="FooterS">
      <div className="global-footer-strip-c">
        <div className="global-footer-text-c animate-strip">
          <h2 className="hp-footer-h1">Take Control of Your Local Marketing</h2>
          <h2 className="hp-footer-h1">Take Control of Your Local Marketing</h2>
        </div>
        <div className="global-footer-text-c animate-strip">
          <h2 className="hp-footer-h1">LEVEL UP YOUR ADS REACH</h2>
          <h2 className="hp-footer-h1">LEVEL UP YOUR ADS REACH</h2>
        </div>
      </div>
      <div className="container-large">
        <div className="global-footer-content-w">
          <p className="global-footer-p">Unify campaigns, social content, and budgets in one platform.</p>
          <div className="global-footer-cta-c">
            <a cd="book-a-demo" href="#" className="btn-primary hp-hero w-button">Get Started</a>
          </div>
        </div>
        <div className="global-footer-rmenu-c">
          <div className="global-footer-nav-c">
            <nav className="global-footer-nav-w">
              <A href="/?r=0" aria-current="page" className="global-footer-nav-link">Home</A>
              <A href="/about" className="global-footer-nav-link">About</A>
              <A href="/solutions" className="global-footer-nav-link">Solutions</A>
              <A href="/blog" className="global-footer-nav-link">Blog</A>
              <A href="/careers" className="global-footer-nav-link">Careers</A>
              <A href="/contact" className="global-footer-nav-link">CONTACT</A>
            </nav>
            <div className="global-footer-nav-social">
              <a target="_blank" className="footer-social-link w-inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" className="footer-social-icon">
                  <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="white" strokeOpacity="0.2" />
                  <path d="M34 24C34 18.5 29.5 14 24 14C18.5 14 14 18.5 14 24C14 29 17.625 33.125 22.375 33.875V26.875H19.875V24H22.375V21.75C22.375 19.25 23.875 17.875 26.125 17.875C27.25 17.875 28.375 18.125 28.375 18.125V20.625H27.125C25.875 20.625 25.5 21.375 25.5 22.125V24H28.25L27.75 26.875H25.375V34C30.375 33.25 34 29 34 24Z" fill="currentColor" />
                </svg>
              </a>
              <a target="_blank" className="footer-social-link w-inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" className="footer-social-icon">
                  <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="white" strokeOpacity="0.2" />
                  <path d="M18.5 34H14.25V20.625H18.5V34ZM16.375 18.75C15 18.75 14 17.75 14 16.375C14 15 15.125 14 16.375 14C17.75 14 18.75 15 18.75 16.375C18.75 17.75 17.75 18.75 16.375 18.75ZM34 34H29.75V26.75C29.75 24.625 28.875 24 27.625 24C26.375 24 25.125 25 25.125 26.875V34H20.875V20.625H24.875V22.5C25.25 21.625 26.75 20.25 28.875 20.25C31.25 20.25 33.75 21.625 33.75 25.75V34H34Z" fill="currentColor" />
                </svg>
              </a>
              <a target="_blank" className="footer-social-link w-inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" className="footer-social-icon">
                  <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="white" strokeOpacity="0.2" />
                  <path d="M24 15.8072C26.6506 15.8072 27.0121 15.8072 28.0964 15.8072C29.0602 15.8072 29.5422 16.0482 29.9036 16.1687C30.3855 16.4096 30.747 16.5301 31.1084 16.8916C31.4699 17.253 31.7108 17.6145 31.8313 18.0964C31.9518 18.4578 32.0723 18.9398 32.1928 19.9036C32.1928 20.988 32.1928 21.2289 32.1928 24C32.1928 26.7711 32.1928 27.0121 32.1928 28.0964C32.1928 29.0602 31.9518 29.5422 31.8313 29.9036C31.5904 30.3855 31.4699 30.747 31.1084 31.1084C30.747 31.4699 30.3855 31.7108 29.9036 31.8313C29.5422 31.9518 29.0602 32.0723 28.0964 32.1928C27.0121 32.1928 26.7711 32.1928 24 32.1928C21.2289 32.1928 20.988 32.1928 19.9036 32.1928C18.9398 32.1928 18.4578 31.9518 18.0964 31.8313C17.6145 31.5904 17.253 31.4699 16.8916 31.1084C16.5301 30.747 16.2892 30.3855 16.1687 29.9036C16.0482 29.5422 15.9277 29.0602 15.8072 28.0964C15.8072 27.0121 15.8072 26.7711 15.8072 24C15.8072 21.2289 15.8072 20.988 15.8072 19.9036C15.8072 18.9398 16.0482 18.4578 16.1687 18.0964C16.4096 17.6145 16.5301 17.253 16.8916 16.8916C17.253 16.5301 17.6145 16.2892 18.0964 16.1687C18.4578 16.0482 18.9398 15.9277 19.9036 15.8072C20.988 15.8072 21.3494 15.8072 24 15.8072ZM24 14C21.2289 14 20.988 14 19.9036 14C18.8193 14 18.0964 14.241 17.494 14.4819C16.8916 14.7229 16.2892 15.0843 15.6867 15.6867C15.0843 16.2892 14.8434 16.7711 14.4819 17.494C14.241 18.0964 14.1205 18.8193 14 19.9036C14 20.988 14 21.3494 14 24C14 26.7711 14 27.0121 14 28.0964C14 29.1807 14.241 29.9036 14.4819 30.506C14.7229 31.1084 15.0843 31.7108 15.6867 32.3133C16.2892 32.9157 16.7711 33.1566 17.494 33.5181C18.0964 33.759 18.8193 33.8795 19.9036 34C20.988 34 21.3494 34 24 34C26.6506 34 27.0121 34 28.0964 34C29.1807 34 29.9036 33.759 30.506 33.5181C31.1084 33.2771 31.7108 32.9157 32.3133 32.3133C32.9157 31.7108 33.1566 31.2289 33.5181 30.506C33.759 29.9036 33.8795 29.1807 34 28.0964C34 27.0121 34 26.6506 34 24C34 21.3494 34 20.988 34 19.9036C34 18.8193 33.759 18.0964 33.5181 17.494C33.2771 16.8916 32.9157 16.2892 32.3133 15.6867C31.7108 15.0843 31.2289 14.8434 30.506 14.4819C29.9036 14.241 29.1807 14.1205 28.0964 14C27.0121 14 26.7711 14 24 14Z" fill="currentColor" />
                  <path d="M24 18.8193C21.1084 18.8193 18.8193 21.1084 18.8193 24C18.8193 26.8916 21.1084 29.1807 24 29.1807C26.8916 29.1807 29.1807 26.8916 29.1807 24C29.1807 21.1084 26.8916 18.8193 24 18.8193ZM24 27.3735C22.1928 27.3735 20.6265 25.9277 20.6265 24C20.6265 22.1928 22.0723 20.6265 24 20.6265C25.8072 20.6265 27.3735 22.0723 27.3735 24C27.3735 25.8072 25.8072 27.3735 24 27.3735Z" fill="currentColor" />
                  <path d="M29.3012 19.9036C29.9666 19.9036 30.506 19.3642 30.506 18.6988C30.506 18.0334 29.9666 17.494 29.3012 17.494C28.6358 17.494 28.0964 18.0334 28.0964 18.6988C28.0964 19.3642 28.6358 19.9036 29.3012 19.9036Z" fill="currentColor" />
                </svg>
              </a>
              <a target="_blank" className="footer-social-link w-inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" className="footer-social-icon">
                  <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="white" strokeOpacity="0.2" />
                  <path d="M29.4299 15.4219H32.4967L25.7966 23.0796L33.6787 33.5H27.5071L22.6733 27.1801L17.1423 33.5H14.0736L21.24 25.3092L13.6787 15.4219H20.007L24.3763 21.1985L29.4299 15.4219ZM28.3535 31.6644H30.0529L19.0836 17.1611H17.26L28.3535 31.6644Z" fill="currentColor" />
                </svg>
              </a>
              <a target="_blank" className="footer-social-link w-inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" className="footer-social-icon">
                  <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="white" strokeOpacity="0.2" />
                  <path d="M33.5 19.125C33.25 18.25 32.625 17.625 31.75 17.375C30.25 17 23.875 17 23.875 17C23.875 17 17.625 17 16 17.375C15.125 17.625 14.5 18.25 14.25 19.125C14 20.75 14 24 14 24C14 24 14 27.25 14.375 28.875C14.625 29.75 15.25 30.375 16.125 30.625C17.625 31 24 31 24 31C24 31 30.25 31 31.875 30.625C32.75 30.375 33.375 29.75 33.625 28.875C34 27.25 34 24 34 24C34 24 34 20.75 33.5 19.125ZM22 27V21L27.25 24L22 27Z" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
          <div className="global-separator dark"></div>
          <div className="global-footer-bottom-w">
            <div className="global-footer-bottom-copyright">
              <div className="paragraph-s">Copyright © 2026. All rights reserved</div>
            </div>
            <div className="global-footer-bottom-legal-w">
              <nav className="global-footer-bottom-legal">
                <A href="/legal/imprint" className="global-footer-legal-link">Imprint</A>
                <A href="/legal/terms-conditions" className="global-footer-legal-link">{"Terms & Conditions"}</A>
                <A href="/legal/privacy-policy" className="global-footer-legal-link">Privacy</A>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div fs-cc-display="block" fs-cc="banner" className="fs-cc-banner_component" style={{ "display": "block", "opacity": "1" }}>
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
          <a fs-cc="deny" href="#" className="fs-cc-modal_close-button w-inline-block" role="button" tabIndex="0">
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
            <a fs-cc="submit" href="#" className="fs-cc-button fs-cc-is-secondary fs-cc-default_hide-all w-inline-block" role="button" tabIndex="0" style={{ "display": "none" }}>
              <div className="fs-cc-button_text">Save</div>
            </a>
            <div className="fs-cc-button_actions">
              <a fs-cc="deny" href="#" className="fs-cc-button w-inline-block">
                <div className="fs-cc-button_text">Decline All</div>
              </a>
              <a fs-cc="allow" href="#" className="fs-cc-button w-inline-block" role="button" tabIndex="0">
                <div className="fs-cc-button_text">Accept All</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
