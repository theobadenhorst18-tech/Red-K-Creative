export default function Home() {
  return (
    <main>
      <header className="nav shell">
        <a className="wordmark" href="#top" aria-label="Red K Creative home">
          <img className="brandLogo" src="/redk-logo.png" alt="" />
          <span>redkcreative</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a><a href="#services">Services</a>
          <a className="navCta" href="#contact">Start a project <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <section className="hero shell" id="top">
        <div className="signal signalOne" aria-hidden="true" />
        <div className="signal signalTwo" aria-hidden="true" />
        <p className="eyebrow">Independent creative studio · Johannesburg</p>
        <p className="heroLead">We don’t add noise —</p>
        <h1>we <strong>refine.</strong></h1>
        <div className="heroBottom"><p>Clear thinking. Bold execution. Graphic design, illustration, paint and public art with purpose.</p><a className="roundLink" href="#work" aria-label="Explore our work">↓</a></div>
        <div className="heroStamp" aria-hidden="true"><img src="/redk-logo.png" alt="" /></div>
      </section>

      <section className="intro shell" id="services">
        <p className="sectionLabel">What we do</p>
        <div><h2>Design that refuses<br />to blend in.</h2><p className="introCopy">From the first sketch to the final wall, Red K Creative brings clarity, character and craft to every visual story.</p>
          <ul className="services"><li><span>01</span>Brand identities</li><li><span>02</span>Campaign creative</li><li><span>03</span>Illustration</li><li><span>04</span>Murals &amp; public art</li></ul>
        </div>
      </section>

      <section className="work shell" id="work">
        <div className="sectionHead"><p className="sectionLabel">Selected capabilities</p><p>Made with hands, heads and heart.</p></div>
        <div className="projectGrid">
          <article className="project projectRed"><span className="projectNumber">01</span><div className="projectGraphic" aria-hidden="true"><span>R</span><span>K</span></div><div className="projectMeta"><h3>Brands with bite</h3><p>Identity design</p></div></article>
          <article className="project projectCream"><span className="projectNumber">02</span><div className="projectGraphic" aria-hidden="true"><span>R</span><span>K</span></div><div className="projectMeta"><h3>Walls that speak</h3><p>Murals &amp; art</p></div></article>
          <article className="project projectDark"><span className="projectNumber">03</span><div className="projectGraphic" aria-hidden="true"><span>R</span><span>K</span></div><div className="projectMeta"><h3>Ideas in motion</h3><p>Campaign creative</p></div></article>
        </div>
      </section>

      <section className="contact shell" id="contact"><p className="sectionLabel">Have a project in mind?</p><h2>Let’s make<br /><em>something loud.</em></h2><div className="contactRow"><a className="contactButton" href="mailto:hello@redkcreative.co.za">Contact us <span aria-hidden="true">↗</span></a><a href="https://www.instagram.com/redkcreative/" target="_blank" rel="noreferrer">Instagram <span aria-hidden="true">↗</span></a></div></section>
      <footer className="shell"><p>© {new Date().getFullYear()} Red K Creative</p><p>Design · Paint · Illustration</p></footer>
    </main>
  );
}
