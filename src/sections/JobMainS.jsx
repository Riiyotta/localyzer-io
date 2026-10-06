import A from "../lib/A.jsx";

// job-main-s — the section's real markup, read from the rendered page (route /open-positions/senior-sales-consultant, section 1).
export default function JobMainS() {
  return (
    <section className="job-main-s" data-clone-section="JobMainS">
      <div className="container">
        <div className="job-main-c">
          <div className="job-main-title-w">
            <div className="job-main-title-btn-w">
              <A href="/careers" className="btn-primary secondary back w-inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <g clipPath="url(#clip0_14_6190)">
                    <path d="M5.21406 8.66602L8.9474 12.3993L7.9974 13.3327L2.66406 7.99935L7.9974 2.66602L8.9474 3.59935L5.21406 7.33268H13.3307V8.66602H5.21406Z" fill="currentColor" />
                  </g>
                  <defs>
                    <clipPath id="clip0_14_6190">
                      <rect width="16" height="16" fill="currentColor" />
                    </clipPath>
                  </defs>
                </svg>
                <div>back TO CAREERS</div>
              </A>
            </div>
            <h1 className="h2">(Senior) Sales Consultant (all genders)</h1>
          </div>
          <div className="job-main-content-w">
            <div className="job-position-richtext w-richtext">
              <h3>
                <strong>About Localyzer</strong>
              </h3>
              <p>Localyzer GmbH is a profitable, 100% self-funded software company and, with its innovative SaaS platform, the enabler for local marketing. Localyzer helps companies with decentralized structures – such as branch networks, franchise systems, automotive dealerships, and insurance organizations – to orchestrate their marketing centrally and execute it locally with pinpoint accuracy. As the advertising landscape grows ever more complex, the platform leverages AI-powered processes to make highly sophisticated marketing – from Google Ads and social media to offline print campaigns and co-op advertising funds (WKZ) – available at the local level at the push of a button. Renowned clients including Canon, Vodafone, Mitsubishi, LBS, and Jeans Fritz already rely on this end-to-end solution.</p>
              <p>To accelerate our strong growth trajectory, we are looking for a sales-driven expert (all genders) to strategically expand our B2B business.</p>
              <h3>
                <strong>Your Responsibilities</strong>
              </h3>
              <p>As (Senior) Sales Consultant (all genders), you will own the strategic development and expansion of our new business. You will manage complex sales processes across multiple stakeholder levels and work closely with the founders.</p>
              <ul role="list">
                <li>
                  <strong>{"Pipeline development & consultative selling:"}</strong>
                  {" You independently identify and develop new business opportunities in the B2B enterprise segment and advise clients as a trusted peer."}
                </li>
                <li>
                  <strong>{"Lead reactivation & potential maximization:"}</strong>
                  {" You are not starting from scratch – you take over the strategic prioritization and targeted outreach to an existing, high-caliber pool of several hundred prospective accounts."}
                </li>
                <li>
                  <strong>{"Switch management & pain-point analysis:"}</strong>
                  {" You analyze companies' challenges and build a compelling business case for a strategic switch to the Localyzer SaaS platform."}
                </li>
                <li>
                  <strong>Stakeholder management:</strong>
                  {" You steer demanding sales processes with long sales cycles all the way through to close."}
                </li>
              </ul>
              <h3>
                <strong>Your Profile</strong>
              </h3>
              <p>You bring the seniority, drive, and methodological depth in solution selling to actively shape this growth phase:</p>
              <ul role="list">
                <li>
                  <strong>Experience:</strong>
                  {" A minimum of 5+ years of proven success in B2B sales, ideally in the consultative environment of software or SaaS solutions."}
                </li>
                <li>
                  <strong>Sales mindset:</strong>
                  {" A distinct \"hunter mentality\" for systematic pipeline development, combined with the persistence and strategic finesse required for long sales cycles."}
                </li>
                <li>
                  <strong>Tech affinity:</strong>
                  {" Confident use of modern CRM systems (ideally HubSpot) and, ideally, initial hands-on experience leveraging AI tools to drive efficiency in day-to-day sales."}
                </li>
                <li>
                  <strong>Working style:</strong>
                  {" A genuine hands-on personality with a high level of ownership, who thrives in a dynamic scale-up environment without rigid corporate structures."}
                </li>
                <li>
                  <strong>Languages:</strong>
                  {" Business-fluent German and very strong written and spoken English."}
                </li>
              </ul>
              <h3>
                <strong>{"Your Working Style (Culture & Mindset)"}</strong>
              </h3>
              <ul role="list">
                <li>
                  <strong>{"Entrepreneurial thinking & impact:"}</strong>
                  {" You value short decision-making paths, work as a peer with the founders, and leverage full management attention to actively shape processes."}
                </li>
                <li>
                  <strong>Client-focused resilience:</strong>
                  {" Long sales cycles motivate you; you stay strategically engaged and build deep, trust-based relationships with key stakeholders."}
                </li>
                <li>
                  <strong>Analytical empathy:</strong>
                  {" You listen carefully, understand the complex marketing challenges of decentralized organizations, and translate them into tailored software value propositions."}
                </li>
              </ul>
              <h3>
                <strong>Your Benefits</strong>
              </h3>
              <ul role="list">
                <li>
                  <strong>Genuine room to shape:</strong>
                  {" Close collaboration with the founding team, flat hierarchies, and the opportunity to materially shape the company's growth path."}
                </li>
                <li>
                  <strong>{"Stability & independence:"}</strong>
                  {" A 100% self-funded (bootstrapped) and profitable company with healthy growth."}
                </li>
                <li>
                  <strong>Maximum flexibility:</strong>
                  {" Full flexibility through a 100% remote setup or use of our modern offices, including Berlin."}
                </li>
                <li>
                  <strong>Sustainable product success:</strong>
                  {" An established product with exceptionally high customer satisfaction and above-average customer loyalty."}
                </li>
              </ul>
            </div>
            <div className="job-position-contact">
              <p className="paragraph-s">
                <span className="font-size-16">
                  <strong>{"Please send your CV (no cover letter please) including your salary expectations to our head of software development, "}</strong>
                </span>
                <a href="mailto:experts@localyzer.de?subject=Application%20for%20Open%20Position" className="job-mail-link">
                  <span className="font-size-16">
                    <strong>Manuel</strong>
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
