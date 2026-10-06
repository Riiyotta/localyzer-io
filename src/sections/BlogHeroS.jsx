import A from "../lib/A.jsx";

// blog-hero-s — the section's real markup, read from the rendered page (route /blog, section 1).
export default function BlogHeroS() {
  return (
    <section className="blog-hero-s" data-clone-section="BlogHeroS">
      <div className="container-large">
        <div className="blog-hero-c">
          <div className="blog-hero-title-w">
            <h1>
              {"Curated marketing "}
              <br />
              contENt for you
            </h1>
          </div>
          <div className="blog-hero-nav-c">
            <div data-hover="false" data-delay="0" className="blog-hero-dropdown w-dropdown">
              <article className="blog-hero-dropdown-btn w-dropdown-toggle" id="w-dropdown-toggle-2" aria-controls="w-dropdown-list-2" aria-haspopup="menu" aria-expanded="false" role="button" tabIndex="0">
                <div className="w-icon-dropdown-toggle" aria-hidden="true"></div>
                <div className="blog-hero-dropdown-text">CHOOSE CATEGORY</div>
              </article>
              <nav className="blog-hero-dropdown-list-c w-dropdown-list" id="w-dropdown-list-2" aria-labelledby="w-dropdown-toggle-2">
                <A href="/blog" aria-current="page" className="blog-hero-dropdown-link w-inline-block w--current" tabIndex="0">
                  <div>SHOW ALL</div>
                </A>
                <div className="blog-hero-dropdown-list-w w-dyn-list">
                  <div role="list" className="blog-hero-dropdown-list w-dyn-items">
                    <div role="listitem" className="blog-hero-dropdown-item w-dyn-item">
                      <A href="/category/events" className="blog-hero-dropdown-link w-inline-block" tabIndex="0">
                        <div>Events</div>
                      </A>
                    </div>
                    <div role="listitem" className="blog-hero-dropdown-item w-dyn-item">
                      <A href="/category/company-news" className="blog-hero-dropdown-link w-inline-block" tabIndex="0">
                        <div>Company News</div>
                      </A>
                    </div>
                    <div role="listitem" className="blog-hero-dropdown-item w-dyn-item">
                      <A href="/category/report" className="blog-hero-dropdown-link w-inline-block" tabIndex="0">
                        <div>Report</div>
                      </A>
                    </div>
                    <div role="listitem" className="blog-hero-dropdown-item w-dyn-item">
                      <A href="/category/product-update" className="blog-hero-dropdown-link w-inline-block" tabIndex="0">
                        <div>Product Update</div>
                      </A>
                    </div>
                    <div role="listitem" className="blog-hero-dropdown-item w-dyn-item">
                      <A href="/category/article" className="blog-hero-dropdown-link w-inline-block" tabIndex="0">
                        <div>Article</div>
                      </A>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
            <div className="blog-hero-nav-w">
              <div className="blog-hero-nav-all-w">
                <A href="/blog" aria-current="page" className="btn-primary w-button w--current blog">Show All</A>
              </div>
              <div className="blog-hero-nav-cms w-dyn-list">
                <div role="list" className="blog-hero-nav-w w-dyn-items">
                  <div role="listitem" className="blog-hero-item-w w-dyn-item">
                    <A href="/category/events" className="btn-primary w-button blog">Events</A>
                  </div>
                  <div role="listitem" className="blog-hero-item-w w-dyn-item">
                    <A href="/category/company-news" className="btn-primary w-button blog">Company News</A>
                  </div>
                  <div role="listitem" className="blog-hero-item-w w-dyn-item">
                    <A href="/category/report" className="btn-primary w-button blog">Report</A>
                  </div>
                  <div role="listitem" className="blog-hero-item-w w-dyn-item">
                    <A href="/category/product-update" className="btn-primary w-button blog">Product Update</A>
                  </div>
                  <div role="listitem" className="blog-hero-item-w w-dyn-item">
                    <A href="/category/article" className="btn-primary w-button blog">Article</A>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-hero-feat-c w-dyn-list">
            <div role="list" className="blog-hero-feat-w w-dyn-items">
              <div role="listitem" className="blog-hero-feat w-dyn-item">
                <A href="/blog/world-cup-2026-sponsor-stocks-analysis" className="hp-insights-article-w w-inline-block">
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
                        <h3 className="h3">Stock Analysis: The Winners and Losers of the 2026 FIFA World Cup – Sponsors</h3>
                      </div>
                    </div>
                    <div className="hp-insights-article-sum-w">
                      <p text="2rows" className="paragraph-s featured">{"Hyundai lost nearly 39 percent, Visa gained more than 11: the share prices of the 15 official 2026 World Cup sponsors moved in strikingly different directions between the opening match and the final. Our analysis tracks every sponsor stock across the tournament, including the trading day after Germany's exit, when ten of 15 sponsors closed in the red. For dealers, franchisees and local branches of these brands, though, the stock chart is beside the point: what counts is turning weeks of global brand attention into local visibility — through accurate business listings, current offers and locally activated campaigns. "}</p>
                    </div>
                  </div>
                </A>
              </div>
              <div role="listitem" className="blog-hero-feat w-dyn-item">
                <A href="/blog/click-and-collect-fashion-retail-study-germany" className="hp-insights-article-w w-inline-block">
                  <div className="hp-insights-article-img-w">
                    <div className="global-article-img-link">
                      <img className="global-img-zoom" src="/_ext/cdn.prod.website-files.com/6720ad3401ceca1f613a8361/69fdd0b0e8941323f97b95e3_click_n_collect-p-800.jpg" width="792" height="492" alt="" as="image" sizes="(max-width: 767px) 100vw, 792px" rel="preload" loading="eager" fetchPriority="high" srcSet="/_ext/cdn.prod.website-files.com/6720ad3401ceca1f613a8361/69fdd0b0e8941323f97b95e3_click_n_collect-p-500.jpg 500w, /_ext/cdn.prod.website-files.com/6720ad3401ceca1f613a8361/69fdd0b0e8941323f97b95e3_click_n_collect-p-800.jpg 800w, /_ext/cdn.prod.website-files.com/6720ad3401ceca1f613a8361/69fdd0b0e8941323f97b95e3_click_n_collect-p-1080.jpg 1080w, /_ext/cdn.prod.website-files.com/6720ad3401ceca1f613a8361/69fdd0b0e8941323f97b95e3_click_n_collect-p-1600.jpg 1600w, /_ext/cdn.prod.website-files.com/6720ad3401ceca1f613a8361/69fdd0b0e8941323f97b95e3_click_n_collect-p-2000.jpg 2000w, /_ext/cdn.prod.website-files.com/6720ad3401ceca1f613a8361/69fdd0b0e8941323f97b95e3_click_n_collect-p-2600.jpg 2600w, /_ext/cdn.prod.website-files.com/6720ad3401ceca1f613a8361/69fdd0b0e8941323f97b95e3_click_n_collect-p-3200.jpg 3200w, /_ext/cdn.prod.website-files.com/6720ad3401ceca1f613a8361/69fdd0b0e8941323f97b95e3_click_n_collect.jpg 3353w" />
                    </div>
                  </div>
                  <div className="hp-insights-article-content-c">
                    <div className="hp-insights-article-tags-c">
                      <div className="global-article-tag">
                        <div>Report</div>
                      </div>
                      <div className="global-article-date">
                        <div>June 3, 2026</div>
                      </div>
                    </div>
                    <div className="hp-insights-article-title-w">
                      <div className="global-article-link">
                        <h3 className="h3">{"Click & Collect in Fashion Retail: More Than Every Second Fashion Retailer Offers the Service"}</h3>
                      </div>
                    </div>
                    <div className="hp-insights-article-sum-w">
                      <p text="2rows" className="paragraph-s featured">{"Localyzer examined the Click & Collect offerings of 306 fashion retailers across the 20 largest German cities. The findings show that six in ten stores provide the service yet visibility and ease of access remain a significant challenge. Hamburg leads the city ranking, while Berlin comes last. H&M is the only chain among the ten examined that offers no Click & Collect whatsoever. Independent retailers show the greatest room for improvement."}</p>
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
