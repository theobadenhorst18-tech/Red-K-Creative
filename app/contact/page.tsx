import ContactForm from "./contact-form";

export const metadata = {
  title: "Contact Red K Creative | Start a Project",
  description:
    "Contact Red K Creative in Nelspruit to start a design, illustration, campaign, mural or public art project.",
};

export default function ContactPage() {
  return (
    <main>
      <header className="nav shell">
        <a className="wordmark" href="/" aria-label="Red K Creative home">
          <img className="brandLogo" src="/redk-logo.png" alt="" />
          <span>redkcreative</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="/#work">Work</a>
          <a href="/#services">Services</a>
          <a className="navCta" href="mailto:hello@redkcreative.co.za">
            Email us <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <section className="contactPage shell">
        <p className="sectionLabel">Start a project</p>
        <div className="contactHero">
          <h1>Tell us what you want to make.</h1>
          <p>
            Send through the rough idea, the deadline, and what kind of creative
            help you need. We will come back with the next best step.
          </p>
        </div>

        <div className="contactLayout">
          <ContactForm />
          <aside className="contactAside">
            <p className="contactKicker">Direct email</p>
            <a className="contactEmail" href="mailto:redkcreative@gmail.com">
              redkcreative@gmail.com
            </a>
            <div className="contactNotes">
              <p>Brand identities</p>
              <p>Campaign creative</p>
              <p>Illustration</p>
              <p>Murals and public art</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
