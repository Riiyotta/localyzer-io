// art-content-w — the section's real markup, read from the rendered page (route /blog/welcome-to-the-triple-a-software-architecture-for-online-marketing-automation, section 3).
export default function ArtContentW19() {
  return (
    <div className="art-content-w" data-clone-section="ArtContentW19">
      <div className="blog-richtext w-richtext">
        <p>
          {"Our "}
          <strong>Triple A</strong>
          {" software architecture—"}
          <strong>AI, Assets, and API</strong>
          {"—revolutionizes "}
          <strong>local online marketing</strong>
          {" by enabling dynamic ad creation, cross-channel budget optimization, and seamless integrations. This flexible and scalable approach ensures businesses can efficiently generate, manage, and optimize marketing assets for maximum impact.Our software architecture is based on three pillars:"}
          <br />
          <strong>AI, Assets, and API.</strong>
          {" Internally, we call this "}
          <strong>{"\"AAA\" - The Triple A."}</strong>
        </p>
        <h2>🧠 AI</h2>
        <p>
          {"Our platform leverages cutting-edge AI technologies to create and optimize marketing assets such as "}
          <strong>headlines, descriptions, images, videos, product shots, smart overlays, audio,</strong>
          {" and more. Additionally, we optimize marketing budgets across multiple channels."}
        </p>
        <h2>🌐 Asset</h2>
        <p>
          {"At the core of our software architecture is the concept of "}
          <strong>{"'assets'"}</strong>
          {" instead of traditional ad formats. This "}
          <strong>asset-centric</strong>
          {" approach enables our AI to dynamically generate a wide variety of ad types and combinations from a single asset set. This has allowed us to quickly support and implement new campaign formats like "}
          <strong>PMax</strong>
          {" or "}
          <strong>Dynamic Creatives.</strong>
        </p>
        <h2>🔗 API</h2>
        <p>
          {"With an "}
          <strong>API-first</strong>
          {" approach, our architecture prioritizes modularity and seamless integration. Customers can use our APIs to:"}
        </p>
        <ul role="list">
          <li>Generate assets through AI</li>
          <li>Create multi-channel campaigns</li>
          <li>Develop their own user interfaces</li>
        </ul>
        <p>
          <strong>{"Why does it matter? "}</strong>
          {"For our customers, it is crucial that our platform is "}
          <strong>flexible, scalable, expandable, and seamlessly integrable.</strong>
        </p>
        <p>‍</p>
        <div className="w-embed">
          <video width="100%" height="800" controls>
            <source src="/_ext/assets.localyzer.io/video/api_aaa_short.mp4" type="video/mp4" />
            {" Your browser does not support the video tag. "}
          </video>
        </div>
      </div>
    </div>
  );
}
