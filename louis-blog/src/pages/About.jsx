import { FaPython, FaRProject, FaDatabase, FaGithub } from 'react-icons/fa';
import ReactCountryFlag from "react-country-flag";
import SocialLinks from './../components/SocialLinks';
import profile_pic from "./../cached_images/louis_picture.webp";

const About = () => {
  return (
    <div className="min-w-0 space-y-10 text-secondary sm:space-y-12">
      <section className="min-w-0 border-b border-soft pb-8 sm:pb-10">
        <div className="grid min-w-0 gap-7 sm:gap-8 lg:grid-cols-[auto_1fr] lg:items-center">
          <div className="mx-auto w-full max-w-80 min-w-0 lg:mx-0">
            <img src={profile_pic} alt="Louis Paulet" width="320" height="320" className="aspect-square h-auto w-full border border-soft object-cover shadow-[0_14px_30px_rgba(89,108,135,0.14)]" />
          </div>
          <div className="min-w-0 space-y-4 text-center lg:text-left">
            <h1 className="text-3xl font-semibold text-primary min-[360px]:text-4xl sm:text-5xl">About Louis Paulet</h1>
            <p className="section-kicker">Data scientist · product engineer · AI builder</p>
            <p className="max-w-3xl text-base leading-8 text-secondary sm:text-lg">
              I build data-rich tools that are clear enough to use and sturdy enough to ship. The work spans adtech, civic transparency, browser ML, retrieval systems, and small AI products that start as experiments and become public builds, including a <a href="https://louispaulet.github.io/#/posts/post7" className="text-accent underline underline-offset-4">repetitive sums benchmark</a> for testing LLM arithmetic.
            </p>
            <div className="lg:-ml-2">
              <SocialLinks />
            </div>
          </div>
        </div>
      </section>

      <section className="grid min-w-0 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="min-w-0 space-y-6 border-l-2 border-[var(--color-accent)] bg-white/55 p-5 sm:p-8">
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
        <div className="min-w-0 space-y-6">
          <h2 className="text-2xl font-semibold text-primary">Tools I reach for</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="border border-soft bg-white/70 p-4 text-sm leading-6 text-primary">
              <FaPython className="mb-2 text-2xl text-accent" />
              Python for analysis, modeling, automation, and product backends.
            </div>
            <div className="border border-soft bg-white/70 p-4 text-sm leading-6 text-primary">
              <FaRProject className="mb-2 text-2xl text-accent" />
              R for analytical storytelling and interactive dashboards.
            </div>
            <div className="border border-soft bg-white/70 p-4 text-sm leading-6 text-primary">
              <FaDatabase className="mb-2 text-2xl text-accent" />
              SQL for warehouses, checks, and operational data pipelines.
            </div>
            <div className="border border-soft bg-white/70 p-4 text-sm leading-6 text-primary">
              <FaGithub className="mb-2 text-2xl text-accent" />
              GitHub for versioned collaboration and public shipping.
            </div>
          </div>
          <p className="text-sm text-secondary">
            I work fluently in English <ReactCountryFlag countryCode="GB" svg />, French <ReactCountryFlag countryCode="FR" svg />, and Spanish <ReactCountryFlag countryCode="ES" svg />, which helps keep multicultural teams moving.
          </p>
        </div>
      </section>

      <section className="min-w-0 border border-soft bg-[var(--color-primary)] p-5 text-center text-white sm:p-8">
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-semibold text-white">Let&apos;s build something useful.</h2>
          <p className="text-sm text-white/78">
            I&apos;m currently focused on shipping thoughtful products and learning from practical problems.
          </p>
          <SocialLinks />
        </div>
      </section>
    </div>
  );
};

export default About;
