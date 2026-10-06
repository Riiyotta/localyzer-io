import A from "../lib/A.jsx";

// blog-hero-s — the section's real markup, read from the rendered page (route /de/blog, section 1).
export default function BlogHeroS2() {
  return (
    <section className="blog-hero-s" data-clone-section="BlogHeroS2">
      <div className="container-large">
        <div className="blog-hero-c">
          <div className="blog-hero-title-w">
            <h1>
              {"Neuste Marketing "}
              <br />
              Insights
            </h1>
          </div>
          <div className="blog-hero-nav-c">
            <div data-hover="false" data-delay="0" className="blog-hero-dropdown w-dropdown">
              <article className="blog-hero-dropdown-btn w-dropdown-toggle" id="w-dropdown-toggle-2" aria-controls="w-dropdown-list-2" aria-haspopup="menu" aria-expanded="false" role="button" tabIndex="0">
                <div className="w-icon-dropdown-toggle" aria-hidden="true"></div>
                <div className="blog-hero-dropdown-text">CHOOSE CATEGORY</div>
              </article>
              <nav className="blog-hero-dropdown-list-c w-dropdown-list" id="w-dropdown-list-2" aria-labelledby="w-dropdown-toggle-2">
                <A href="/de/blog" aria-current="page" className="blog-hero-dropdown-link w-inline-block w--current" tabIndex="0">
                  <div>SHOW ALL</div>
                </A>
                <div className="blog-hero-dropdown-list-w w-dyn-list">
                  <div role="list" className="blog-hero-dropdown-list w-dyn-items">
                    <div role="listitem" className="blog-hero-dropdown-item w-dyn-item">
                      <A href="/de/category/events" className="blog-hero-dropdown-link w-inline-block" tabIndex="0">
                        <div>Events</div>
                      </A>
                    </div>
                    <div role="listitem" className="blog-hero-dropdown-item w-dyn-item">
                      <A href="/de/category/company-news" className="blog-hero-dropdown-link w-inline-block" tabIndex="0">
                        <div>Company News</div>
                      </A>
                    </div>
                    <div role="listitem" className="blog-hero-dropdown-item w-dyn-item">
                      <A href="/de/category/report" className="blog-hero-dropdown-link w-inline-block" tabIndex="0">
                        <div>Report</div>
                      </A>
                    </div>
                    <div role="listitem" className="blog-hero-dropdown-item w-dyn-item">
                      <A href="/de/category/product-update" className="blog-hero-dropdown-link w-inline-block" tabIndex="0">
                        <div>Produktneuigkeiten</div>
                      </A>
                    </div>
                    <div role="listitem" className="blog-hero-dropdown-item w-dyn-item">
                      <A href="/de/category/article" className="blog-hero-dropdown-link w-inline-block" tabIndex="0">
                        <div>Artikel</div>
                      </A>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
            <div className="blog-hero-nav-w">
              <div className="blog-hero-nav-all-w">
                <A href="/de/blog" aria-current="page" className="btn-primary w-button w--current blog">Alle Anzeigen</A>
              </div>
              <div className="blog-hero-nav-cms w-dyn-list">
                <div role="list" className="blog-hero-nav-w w-dyn-items">
                  <div role="listitem" className="blog-hero-item-w w-dyn-item">
                    <A href="/de/category/events" className="btn-primary w-button blog">Events</A>
                  </div>
                  <div role="listitem" className="blog-hero-item-w w-dyn-item">
                    <A href="/de/category/company-news" className="btn-primary w-button blog">Company News</A>
                  </div>
                  <div role="listitem" className="blog-hero-item-w w-dyn-item">
                    <A href="/de/category/report" className="btn-primary w-button blog">Report</A>
                  </div>
                  <div role="listitem" className="blog-hero-item-w w-dyn-item">
                    <A href="/de/category/product-update" className="btn-primary w-button blog">Produktneuigkeiten</A>
                  </div>
                  <div role="listitem" className="blog-hero-item-w w-dyn-item">
                    <A href="/de/category/article" className="btn-primary w-button blog">Artikel</A>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-hero-feat-c w-dyn-list">
            <div role="list" className="blog-hero-feat-w w-dyn-items">
              <div role="listitem" className="blog-hero-feat w-dyn-item">
                <A href="/de/blog/wm-2026-sponsoren-aktien-analyse" className="hp-insights-article-w w-inline-block">
                  <div className="hp-insights-article-img-w">
                    <div className="global-article-img-link">
                      <img className="global-img-zoom" src="/_ext/cdn.prod.website-files.com/6720ad3401ceca1f613a8361/6a6c51d8db666cf15d9a5b37_my-profit-tutor-PPC6rg_Zzm8-unsplash-p-800.jpg" width="792" height="492" alt="" as="image" sizes="(max-width: 767px) 100vw, 792px" rel="preload" loading="eager" fetchPriority="high" srcSet="/_ext/cdn.prod.website-files.com/6720ad3401ceca1f613a8361/6a6c51d8db666cf15d9a5b37_my-profit-tutor-PPC6rg_Zzm8-unsplash-p-500.jpg 500w, /_ext/cdn.prod.website-files.com/6720ad3401ceca1f613a8361/6a6c51d8db666cf15d9a5b37_my-profit-tutor-PPC6rg_Zzm8-unsplash-p-800.jpg 800w, /_ext/cdn.prod.website-files.com/6720ad3401ceca1f613a8361/6a6c51d8db666cf15d9a5b37_my-profit-tutor-PPC6rg_Zzm8-unsplash-p-1080.jpg 1080w, /_ext/cdn.prod.website-files.com/6720ad3401ceca1f613a8361/6a6c51d8db666cf15d9a5b37_my-profit-tutor-PPC6rg_Zzm8-unsplash-p-1600.jpg 1600w, /_ext/cdn.prod.website-files.com/6720ad3401ceca1f613a8361/6a6c51d8db666cf15d9a5b37_my-profit-tutor-PPC6rg_Zzm8-unsplash-p-2000.jpg 2000w, /_ext/cdn.prod.website-files.com/6720ad3401ceca1f613a8361/6a6c51d8db666cf15d9a5b37_my-profit-tutor-PPC6rg_Zzm8-unsplash.jpg 2267w" />
                    </div>
                  </div>
                  <div className="hp-insights-article-content-c">
                    <div className="hp-insights-article-tags-c">
                      <div className="global-article-tag">
                        <div>Report</div>
                      </div>
                      <div className="global-article-date">
                        <div>August 17, 2026</div>
                      </div>
                    </div>
                    <div className="hp-insights-article-title-w">
                      <div className="global-article-link">
                        <h3 className="h3">WM-Sponsoren im Börsencheck: Diese Unternehmen legten während des Turniers zu – diese verloren</h3>
                      </div>
                    </div>
                    <div className="hp-insights-article-sum-w">
                      <p text="2rows" className="paragraph-s featured">Hyundai verlor knapp 39 Prozent, Visa gewann über 11: Die Aktienkurse der 15 offiziellen WM-Sponsoren 2026 entwickelten sich zwischen Eröffnungsspiel und Finale auffällig unterschiedlich. Für Händler, Franchisenehmer und lokale Standorte dieser Marken zählt der Kursverlauf allerdings weit weniger als eine andere Frage — ob sich wochenlange globale Markenaufmerksamkeit tatsächlich in lokale Sichtbarkeit und Kunden übersetzt.</p>
                    </div>
                  </div>
                </A>
              </div>
              <div role="listitem" className="blog-hero-feat w-dyn-item">
                <A href="/de/blog/mitsubishi-dealer-cockpit-local-marketing" className="hp-insights-article-w w-inline-block">
                  <div className="hp-insights-article-img-w">
                    <div className="global-article-img-link">
                      <img className="global-img-zoom" src="/_ext/cdn.prod.website-files.com/6720ad3401ceca1f613a8361/6a734102d28fb853c914f4db_26MY_Eclipse_Cross_Line_Up-p-800.jpeg" width="792" height="492" alt="" as="image" sizes="(max-width: 767px) 100vw, 792px" rel="preload" loading="eager" fetchPriority="high" srcSet="/_ext/cdn.prod.website-files.com/6720ad3401ceca1f613a8361/6a734102d28fb853c914f4db_26MY_Eclipse_Cross_Line_Up-p-500.jpeg 500w, /_ext/cdn.prod.website-files.com/6720ad3401ceca1f613a8361/6a734102d28fb853c914f4db_26MY_Eclipse_Cross_Line_Up-p-800.jpeg 800w, /_ext/cdn.prod.website-files.com/6720ad3401ceca1f613a8361/6a734102d28fb853c914f4db_26MY_Eclipse_Cross_Line_Up-p-1080.jpeg 1080w, /_ext/cdn.prod.website-files.com/6720ad3401ceca1f613a8361/6a734102d28fb853c914f4db_26MY_Eclipse_Cross_Line_Up-p-1600.jpeg 1600w, /_ext/cdn.prod.website-files.com/6720ad3401ceca1f613a8361/6a734102d28fb853c914f4db_26MY_Eclipse_Cross_Line_Up-p-2000.jpeg 2000w, /_ext/cdn.prod.website-files.com/6720ad3401ceca1f613a8361/6a734102d28fb853c914f4db_26MY_Eclipse_Cross_Line_Up-p-2600.jpeg 2600w, /_ext/cdn.prod.website-files.com/6720ad3401ceca1f613a8361/6a734102d28fb853c914f4db_26MY_Eclipse_Cross_Line_Up-p-3200.jpeg 3200w, /_ext/cdn.prod.website-files.com/6720ad3401ceca1f613a8361/6a734102d28fb853c914f4db_26MY_Eclipse_Cross_Line_Up.jpeg 5000w" />
                    </div>
                  </div>
                  <div className="hp-insights-article-content-c">
                    <div className="hp-insights-article-tags-c">
                      <div className="global-article-tag">
                        <div>Produktneuigkeiten</div>
                      </div>
                      <div className="global-article-date">
                        <div>August 5, 2026</div>
                      </div>
                    </div>
                    <div className="hp-insights-article-title-w">
                      <div className="global-article-link">
                        <h3 className="h3">Neue Localyzer-Plattform: Mitsubishi Motors Deutschland startet mit über 700 Kampagnen und über 70 Prozent aktiven Handelspartnern</h3>
                      </div>
                    </div>
                    <div className="hp-insights-article-sum-w">
                      <p text="2rows" className="paragraph-s featured">Marken mit Händlernetzwerken steuern lokales Marketing heute über eine Vielzahl von Einzeltools. Localyzer bündelt Kampagnenplanung, Ausspielung, Social Posting, Print und WKZ-Verwaltung in einer Plattform und macht die tatsächliche Nutzung im Netzwerk zum Maßstab. Wie das in der Praxis aussieht, zeigt der erste Mitsubishi Case: über 700 Kampagnen und mehr als 70 Prozent aktive Handelspartner.</p>
                    </div>
                  </div>
                </A>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
