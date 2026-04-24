import { FaPython, FaRProject, FaDatabase, FaGithub } from 'react-icons/fa';
import ReactCountryFlag from "react-country-flag";
import SocialLinks from './../components/SocialLinks';
import profile_pic from "./../cached_images/louis_picture.webp";

const About = () => {
  return (
    <div className="space-y-12 text-secondary">
      <section className="neumorphic-surface p-8 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-center">
          <div className="mx-auto flex h-40 w-40 items-center justify-center border border-soft bg-surface shadow-[7px_8px_18px_rgba(89,108,135,0.16),-6px_-6px_14px_rgba(255,255,255,0.82)] lg:mx-0">
            <img src={profile_pic} alt="Louis Paulet" className="h-36 w-36 object-cover" />
          </div>
          <div className="space-y-4 text-center lg:text-left">
            <h1 className="text-4xl font-semibold text-primary sm:text-5xl">About Louis Paulet</h1>
            <p className="section-kicker">Data scientist · product engineer · AI builder</p>
            <p className="max-w-3xl text-base leading-8 text-secondary sm:text-lg">
              I build data-rich tools that are clear enough to use and sturdy enough to ship. The work spans adtech, civic transparency, browser ML, retrieval systems, and small AI products that start as experiments and become public builds.
            </p>
            <div className="lg:-ml-2">
              <SocialLinks />
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="neumorphic-surface space-y-6 p-8">
          <h2 className="text-2xl font-semibold text-primary">How I work</h2>
          <p className="text-sm text-secondary">
            With a dual Master&apos;s degree in Data Science and Software Engineering, I like projects where the data, model, and interface have to meet in the same product. I move from messy questions to working prototypes, then keep tightening until the thing is useful.
          </p>
          <ul className="space-y-3 text-sm text-secondary">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 bg-[var(--color-accent)]" />
              <span>Start with a question, then ship a working surface.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 bg-[var(--color-accent)]" />
              <span>Keep the data, model, and interface in the same conversation.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 bg-[var(--color-accent)]" />
              <span>Collaborate across languages, teams, and messy requirements.</span>
            </li>
          </ul>
        </div>
        <div className="neumorphic-surface space-y-6 p-8">
          <h2 className="text-2xl font-semibold text-primary">Tools I reach for</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="neumorphic-press border border-soft bg-surface p-4 text-sm leading-6 text-primary">
              <FaPython className="mb-2 text-2xl text-accent" />
              Python for analysis, modeling, automation, and product backends.
            </div>
            <div className="neumorphic-press border border-soft bg-surface p-4 text-sm leading-6 text-primary">
              <FaRProject className="mb-2 text-2xl text-accent" />
              R for analytical storytelling and interactive dashboards.
            </div>
            <div className="neumorphic-press border border-soft bg-surface p-4 text-sm leading-6 text-primary">
              <FaDatabase className="mb-2 text-2xl text-accent" />
              SQL for warehouses, checks, and operational data pipelines.
            </div>
            <div className="neumorphic-press border border-soft bg-surface p-4 text-sm leading-6 text-primary">
              <FaGithub className="mb-2 text-2xl text-accent" />
              GitHub for versioned collaboration and public shipping.
            </div>
          </div>
          <p className="text-sm text-secondary">
            I work fluently in English <ReactCountryFlag countryCode="GB" svg />, French <ReactCountryFlag countryCode="FR" svg />, and Spanish <ReactCountryFlag countryCode="ES" svg />, which helps keep multicultural teams moving.
          </p>
        </div>
      </section>

      <section className="neumorphic-surface p-8 text-center">
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-semibold text-primary">Let&apos;s build something useful.</h2>
          <p className="text-sm text-secondary">
            I am open to advisory work, full-time roles, and experimental collaborations across Europe.
          </p>
          <SocialLinks />
        </div>
      </section>
    </div>
  );
};

export default About;
