import A from "../lib/A.jsx";

// job-main-s — the section's real markup, read from the rendered page (route /open-positions/software-developer-php-python, section 1).
export default function JobMainS3() {
  return (
    <section className="job-main-s" data-clone-section="JobMainS3">
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
            <h1 className="h2">Software Developer PHP / Python (m/f/d)</h1>
          </div>
          <div className="job-main-content-w">
            <div className="job-position-richtext w-richtext">
              <h6>Job Description</h6>
              <p>Job DescriptionAs the newest member of our crew, you should help us to continue to develop as dynamically as before. You will get to know the new and innovative area of platform-driven online marketing and work actively on the further development of our start-up company.</p>
              <h6>
                <strong>We offer you</strong>
              </h6>
              <ul role="list">
                <li>An innovative product that you actively and responsibly help design right from the start</li>
                <li>{"Flexible working hours incl. "}</li>
                <li>Opportunities for home officeTime to deal with new technologies and to experiment</li>
                <li>A digital, exciting and constantly evolving environment</li>
              </ul>
              <h6>These are your specific tasks</h6>
              <ul role="list">
                <li>Design and development of new software features.</li>
                <li>Development of customer-specific extensions (e.g. interfaces such as single signon)</li>
                <li>You will help us with the extensive re-factoring of our software architecture</li>
                <li>Bug fixing and maintenance</li>
              </ul>
              <h6>You should bring this with you if possible</h6>
              <ul role="list">
                <li>Good knowledge of PHP and/or Python</li>
                <li>Experience with backend frameworks such as Laravel, CakePHP or Flask</li>
                <li>Practical experience with Javascript and frontend frameworks like Vue, Angular or React</li>
              </ul>
              <p>Additional knowledge such as TDD, security etc. is a plus. We develop with agile methods (Scrum, Kanban) and use Git. Our infrastructure runs on Amazon AWS. We use Devops (Ansible, Vagrant).These are your new colleagues:</p>
              <p>We are a colorful team of marketers, developers, graphic designers and sales professionals with three locations throughout Germany. Our software development is based in the founding spinning mill in Ettlingen (near Karlsruhe).</p>
              <p>We are currently in an exciting growth phase, will onboard some new customers this year and continue to develop our system significantly.</p>
              <h6>This is Localyzer</h6>
              <p>Localyzer offers large and small companies the opportunity to place high-performance local and individual online marketing with our self-developed online platform. For individual locations or for entire chain stores. The aim is to strengthen the online visibility of the location on site.</p>
              <h6>Your application</h6>
              <p>If we are convinced, you will continue in a 2-stage selection process. We attach great importance to the choice of new colleagues, so that you really fit in with us and, above all, we with you. Do you accept the challenge?</p>
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
