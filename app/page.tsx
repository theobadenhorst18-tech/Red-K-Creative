import { SkeletonPreview } from "./_sites-preview/SkeletonPreview";

const starterMetadata = {
  title: "Your site is taking shape",
  description:
    "Your first version will appear here automatically when it’s ready.",
  other: {
    "codex-preview": "development",
  },
};

function StarterHome() {
  return <SkeletonPreview />;
}

void starterMetadata;
void StarterHome;

const services = ["Brand identities", "Campaign creative", "Illustration", "Murals & public art"];
const projects = [
  { number: "01", title: "Brands with bite", type: "Identity design", className: "projectRed" },
  { number: "02", title: "Walls that speak", type: "Murals & art", className: "projectCream" },
  { number: "03", title: "Ideas in motion", type: "Campaign creative", className: "projectDark" },
];
function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Home() {
  return <main>
    <header className="nav shell"><a className="wordmark" href="#top" aria-label="Red K Creative home"><span className="brandDot" aria-hidden="true">RK</span><span>redkcreative</span></a><nav aria-label="Main navigation"><a href="#work">Work</a><a href="#services">Services</a><a className="navCta" href="#contact">Start a project <Arrow /></a></nav></header>
    <section className="hero shell" id="top"><p className="eyebrow">Independent creative studio · Johannesburg</p><h1>Ideas made<br /><em>visible.</em></h1><div className="heroBottom"><p>We craft bold visual solutions through graphic design, illustration, paint and public art.</p><a className="roundLink" href="#work" aria-label="Explore our work">↓</a></div><div className="heroStamp" aria-hidden="true"><span>RED</span><span>K</span><small>CREATIVE</small></div></section>
    <section className="intro shell" id="services"><p className="sectionLabel">What we do</p><div><h2>Design that refuses<br />to blend in.</h2><p className="introCopy">From the first sketch to the final wall, Red K Creative brings clarity, character and craft to every visual story.</p><ul className="services">{services.map((service,index) => <li key={service}><span>0{index+1}</span>{service}</li>)}</ul></div></section>
    <section className="work shell" id="work"><div className="sectionHead"><p className="sectionLabel">Selected capabilities</p><p>Made with hands, heads and heart.</p></div><div className="projectGrid">{projects.map(project => <article className={`project ${project.className}`} key={project.number}><span className="projectNumber">{project.number}</span><div className="projectGraphic" aria-hidden="true"><span>R</span><span>K</span></div><div className="projectMeta"><h3>{project.title}</h3><p>{project.type}</p></div></article>)}</div></section>
    <section className="contact shell" id="contact"><p className="sectionLabel">Have a project in mind?</p><h2>Let’s make<br /><em>something loud.</em></h2><div className="contactRow"><a href="mailto:hello@redkcreative.co.za">hello@redkcreative.co.za <Arrow /></a><a href="https://www.instagram.com/redkcreative/" target="_blank" rel="noreferrer">Instagram <Arrow /></a></div></section>
    <footer className="shell"><p>© {new Date().getFullYear()} Red K Creative</p><p>Design · Paint · Illustration</p></footer>
  </main>;
}
