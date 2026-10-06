import A from "../lib/A.jsx";

// ab-hero-s — the section's real markup, read from the rendered page (route /about, section 1).
export default function AbHeroS() {
  return (
    <section className="ab-hero-s" data-clone-section="AbHeroS">
      <div className="container">
        <div className="ab-hero-c">
          <div className="ab-hero-title-w">
            <h1>Building the future of digital marketing</h1>
            <p className="paragraph-l">
              More than just a software company.
              <br />
              {"We're here to help you grow your marketing reach."}
            </p>
          </div>
          <div className="ab-hero-btn-w">
            <A href="/contact" className="btn-primary w-button">Get In Touch</A>
            <A href="/careers" className="btn-primary w-button outline">Join Our Team</A>
          </div>
          <div className="ab-hero-carousel-w swiper w-dyn-list swiper-initialized swiper-horizontal swiper-backface-hidden">
            <div role="list" className="swiper-wrapper w-dyn-items" style={{ "transitionDuration": "5000ms", "transform": "translate3d(-1087px, 0px, 0px)" }}>
              <div role="listitem" className="swiper-slide ab-hero-carousel-slide w-dyn-item" data-swiper-slide-index="0" style={{ "marginRight": "20px" }}>
                <div className="ab-hero-carousel-img-c">
                  <img src="/_ext/cdn.prod.website-files.com/6720ad3401ceca1f613a8361/674d7a71dc93036fc908f357_Frame%20427321671%20(1).avif" loading="lazy" width="694" height="564" alt="Localyzer team playing" className="ab-hero-img" />
                </div>
              </div>
              <div role="listitem" className="swiper-slide ab-hero-carousel-slide w-dyn-item swiper-slide-prev" data-swiper-slide-index="1" style={{ "marginRight": "20px" }}>
                <div className="ab-hero-carousel-img-c">
                  <img src="/_ext/cdn.prod.website-files.com/6720ad3401ceca1f613a8361/674d7958f26b0c0ef664b673_Frame%20427321629.avif" loading="lazy" width="694" height="564" alt="Laptop with Localyzer app open " className="ab-hero-img" />
                </div>
              </div>
              <div role="listitem" className="swiper-slide ab-hero-carousel-slide w-dyn-item swiper-slide-active" data-swiper-slide-index="2" style={{ "marginRight": "20px" }}>
                <div className="ab-hero-carousel-img-c">
                  <img src="/_ext/cdn.prod.website-files.com/6720ad3401ceca1f613a8361/674d78c5fe6249151db438d7_Frame%20427321628%20(1).avif" loading="lazy" width="694" height="564" alt="Localyzer team playing together" className="ab-hero-img" />
                </div>
              </div>
              <div role="listitem" className="swiper-slide ab-hero-carousel-slide w-dyn-item swiper-slide-next" data-swiper-slide-index="3" style={{ "marginRight": "20px" }}>
                <div className="ab-hero-carousel-img-c">
                  <img src="/_ext/cdn.prod.website-files.com/6720ad3401ceca1f613a8361/674d769c42b625717c2eb61d_Frame%20427321627.avif" loading="lazy" width="694" height="564" alt="Localyzer logo in the street" className="ab-hero-img" />
                </div>
              </div>
            </div>
          </div>
          <div className="global-feat-logos-c">
            <div className="global-feat-logos-text">
              <div className="h5">Used by the best, from small businesses to enterprises, globally.</div>
            </div>
            <div className="logostrip-c">
              <div className="logostrip-collection w-dyn-list">
                <div role="list" className="logostrip-list-c animate-strip w-dyn-items">
                  <div role="listitem" className="hp-hero-logo-w w-dyn-item">
                    <img src="/_ext/cdn.prod.website-files.com/6720ad3401ceca1f613a8361/67d839a5fa5357b21f71392f_Sparda_Bank_logo_w.svg" loading="lazy" alt="sparda-bank" className="hp-hero-logo jungle" />
                  </div>
                  <div role="listitem" className="hp-hero-logo-w w-dyn-item">
                    <img src="/_ext/cdn.prod.website-files.com/6720ad3401ceca1f613a8361/67af1379babdf9dca722189b_subaru_w.svg" loading="lazy" alt="subaru" className="hp-hero-logo jungle" />
                  </div>
                  <div role="listitem" className="hp-hero-logo-w w-dyn-item">
                    <img src="/_ext/cdn.prod.website-files.com/6720ad3401ceca1f613a8361/67af11b29d33dced8cc6e117_zaunteam_w.svg" loading="lazy" alt="zaunteam" className="hp-hero-logo jungle" />
                  </div>
                  <div role="listitem" className="hp-hero-logo-w w-dyn-item">
                    <img src="/_ext/cdn.prod.website-files.com/6720ad3401ceca1f613a8361/67af113d106673720ad3610a_Landesbausparkassen_w.svg" loading="lazy" alt="lbs" className="hp-hero-logo jungle" />
                  </div>
                  <div role="listitem" className="hp-hero-logo-w w-dyn-item">
                    <img src="/_ext/cdn.prod.website-files.com/6720ad3401ceca1f613a8361/67af0a34143040879d7e8e3f_Jeans-Fritz_Logo_w.svg" loading="lazy" alt="jeansfritz" className="hp-hero-logo jungle" />
                  </div>
                  <div role="listitem" className="hp-hero-logo-w w-dyn-item">
                    <img src="/_ext/cdn.prod.website-files.com/6720ad3401ceca1f613a8361/673d93f0962ccfa8094973f0_takko_logo.svg.svg" loading="lazy" alt="takko" className="hp-hero-logo jungle" />
                  </div>
                  <div role="listitem" className="hp-hero-logo-w w-dyn-item">
                    <img src="/_ext/cdn.prod.website-files.com/6720ad3401ceca1f613a8361/673d93e6c8930f09f6fcdd3c_Mitsubishi_motors_new_logo%201.svg" loading="lazy" alt="mitsubishi" className="hp-hero-logo jungle" />
                  </div>
                  <div role="listitem" className="hp-hero-logo-w w-dyn-item">
                    <img src="/_ext/cdn.prod.website-files.com/6720ad3401ceca1f613a8361/673d93db8d6cb78bb3280edd_Logo.svg.svg" loading="lazy" alt="vodafone" className="hp-hero-logo jungle" />
                  </div>
                  <div role="listitem" className="hp-hero-logo-w w-dyn-item">
                    <img src="/_ext/cdn.prod.website-files.com/6720ad3401ceca1f613a8361/673d93d2ebab3c93180a6721_Group%20427321509.svg" loading="lazy" alt="gwm" className="hp-hero-logo jungle" />
                  </div>
                  <div role="listitem" className="hp-hero-logo-w w-dyn-item">
                    <img src="/_ext/cdn.prod.website-files.com/6720ad3401ceca1f613a8361/673d93c7ddce559bb80392e4_electrolux_logo.svg.svg" loading="lazy" alt="electrolux" className="hp-hero-logo jungle" />
                  </div>
                  <div role="listitem" className="hp-hero-logo-w w-dyn-item">
                    <img src="/_ext/cdn.prod.website-files.com/6720ad3401ceca1f613a8361/673d93b79a3e6c5ac60706c9_canon_logo.svg.svg" loading="lazy" alt="canon" className="hp-hero-logo jungle" />
                  </div>
                </div>
              </div>
              <div className="logostrip-collection w-dyn-list">
                <div role="list" className="logostrip-list-c animate-strip w-dyn-items">
                  <div role="listitem" className="hp-hero-logo-w w-dyn-item">
                    <img src="/_ext/cdn.prod.website-files.com/6720ad3401ceca1f613a8361/67d839a5fa5357b21f71392f_Sparda_Bank_logo_w.svg" loading="lazy" alt="sparda-bank" className="hp-hero-logo jungle" />
                  </div>
                  <div role="listitem" className="hp-hero-logo-w w-dyn-item">
                    <img src="/_ext/cdn.prod.website-files.com/6720ad3401ceca1f613a8361/67af1379babdf9dca722189b_subaru_w.svg" loading="lazy" alt="subaru" className="hp-hero-logo jungle" />
                  </div>
                  <div role="listitem" className="hp-hero-logo-w w-dyn-item">
                    <img src="/_ext/cdn.prod.website-files.com/6720ad3401ceca1f613a8361/67af11b29d33dced8cc6e117_zaunteam_w.svg" loading="lazy" alt="zaunteam" className="hp-hero-logo jungle" />
                  </div>
                  <div role="listitem" className="hp-hero-logo-w w-dyn-item">
                    <img src="/_ext/cdn.prod.website-files.com/6720ad3401ceca1f613a8361/67af113d106673720ad3610a_Landesbausparkassen_w.svg" loading="lazy" alt="lbs" className="hp-hero-logo jungle" />
                  </div>
                  <div role="listitem" className="hp-hero-logo-w w-dyn-item">
                    <img src="/_ext/cdn.prod.website-files.com/6720ad3401ceca1f613a8361/67af0a34143040879d7e8e3f_Jeans-Fritz_Logo_w.svg" loading="lazy" alt="jeansfritz" className="hp-hero-logo jungle" />
                  </div>
                  <div role="listitem" className="hp-hero-logo-w w-dyn-item">
                    <img src="/_ext/cdn.prod.website-files.com/6720ad3401ceca1f613a8361/673d93f0962ccfa8094973f0_takko_logo.svg.svg" loading="lazy" alt="takko" className="hp-hero-logo jungle" />
                  </div>
                  <div role="listitem" className="hp-hero-logo-w w-dyn-item">
                    <img src="/_ext/cdn.prod.website-files.com/6720ad3401ceca1f613a8361/673d93e6c8930f09f6fcdd3c_Mitsubishi_motors_new_logo%201.svg" loading="lazy" alt="mitsubishi" className="hp-hero-logo jungle" />
                  </div>
                  <div role="listitem" className="hp-hero-logo-w w-dyn-item">
                    <img src="/_ext/cdn.prod.website-files.com/6720ad3401ceca1f613a8361/673d93db8d6cb78bb3280edd_Logo.svg.svg" loading="lazy" alt="vodafone" className="hp-hero-logo jungle" />
                  </div>
                  <div role="listitem" className="hp-hero-logo-w w-dyn-item">
                    <img src="/_ext/cdn.prod.website-files.com/6720ad3401ceca1f613a8361/673d93d2ebab3c93180a6721_Group%20427321509.svg" loading="lazy" alt="gwm" className="hp-hero-logo jungle" />
                  </div>
                  <div role="listitem" className="hp-hero-logo-w w-dyn-item">
                    <img src="/_ext/cdn.prod.website-files.com/6720ad3401ceca1f613a8361/673d93c7ddce559bb80392e4_electrolux_logo.svg.svg" loading="lazy" alt="electrolux" className="hp-hero-logo jungle" />
                  </div>
                  <div role="listitem" className="hp-hero-logo-w w-dyn-item">
                    <img src="/_ext/cdn.prod.website-files.com/6720ad3401ceca1f613a8361/673d93b79a3e6c5ac60706c9_canon_logo.svg.svg" loading="lazy" alt="canon" className="hp-hero-logo jungle" />
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
