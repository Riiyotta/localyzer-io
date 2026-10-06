// art-content-w — the section's real markup, read from the rendered page (route /de/blog/welcome-to-the-triple-a-software-architecture-for-online-marketing-automation, section 3).
export default function ArtContentW48() {
  return (
    <div className="art-content-w" data-clone-section="ArtContentW48">
      <div className="blog-richtext w-richtext">
        <p>{"Unsere Software Architektur beruht auf 3 Säulen:AI, Assets und API. Wir nennen das intern \"AAA\" - The Triple A."}</p>
        <h2>{"🧠 AI: "}</h2>
        <p>Unsere Plattform nutzt modernste AI-Technologien für die Erstellung und Optimierung von Marketing-Assets wie Headlines, Descriptions, Images, Videos, Productshots, Smart Overlays, Audio usw. Weiterhin optimieren wir Marketingbudgets Kanal-übergreifend.</p>
        <h2>{"🌐 Asset: "}</h2>
        <p>{"Im Kern unserer Softwarearchitektur steht das Konzept der 'Assets' anstelle traditioneller Anzeigenformate. Dieser Asset-zentrierte Ansatz ermöglicht es unserer AI, eine Vielzahl von Anzeigentypen und -Kombinationen aus einem einzigen Asset-Set dynamisch zu generieren. Das hat uns ermöglicht, auch neue Kampagnen-Formate wie PMax oder Dynamic Creatives schnell zu unterstützen / implementiern."}</p>
        <h2>{"🔗 API: "}</h2>
        <p>Mit einem API-First-Ansatz priorisiert unsere Architektur Modularität und nahtlose Integration. Kunden können unsere APIs nutzen, um Funktionen wie die Generierung von Assets durch AI zu nutzen, Multi-Kanal-Kampgnen zu erstellen oder gar ein eigenes User Interface zu entwickeln.</p>
        <p>Why does it matter? Für unsere Kunden ist es extrem wichtig, dass unsere Platform flexibel, ausbaufähig, skalierbar und integrierbar ist.</p>
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
