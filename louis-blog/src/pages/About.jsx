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
            <h1 className="text-4xl font-semibold text-primary sm:text-5xl">Meet Louis Paulet</h1>
            <p className="section-kicker">Data scientist · product engineer · AI builder</p>
            <p className="max-w-3xl text-base leading-8 text-secondary sm:text-lg">
              I build data-rich products that feel refined enough for the world’s most demanding teams. From adtech ecosystems to civic transparency platforms, I lead projects that turn ambitious ideas into shipped experiences.
            </p>
            <div className="lg:-ml-2">
              <SocialLinks />
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="neumorphic-surface space-y-6 p-8">
          <h2 className="text-2xl font-semibold text-primary">What I bring to the table</h2>
          <p className="text-sm text-secondary">
            With a dual Master’s degree in Data Science and Software Engineering, I design end-to-end solutions that pair robust modeling with a premium user experience. My track record spans delivering production ML pipelines, leading analytics projects for enterprise teams, and nurturing early-stage ideas into public launches.
          </p>
          <ul className="space-y-3 text-sm text-secondary">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 bg-[var(--color-accent)]" />
              <span>Production-minded workflows—from discovery to deployment.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 bg-[var(--color-accent)]" />
              <span>Design sensibilities shaped by modern FAANG-grade product craft.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 bg-[var(--color-accent)]" />
              <span>Experience leading cross-functional collaboration across Europe.</span>
            </li>
          </ul>
        </div>
        <div className="neumorphic-surface space-y-6 p-8">
          <h2 className="text-2xl font-semibold text-primary">Toolbox & languages</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="neumorphic-press border border-soft bg-surface p-4 text-sm leading-6 text-primary">
              <FaPython className="mb-2 text-2xl text-accent" />
              Python for data products, experimentation, and automation.
            </div>
            <div className="neumorphic-press border border-soft bg-surface p-4 text-sm leading-6 text-primary">
              <FaRProject className="mb-2 text-2xl text-accent" />
              R for analytical storytelling and interactive dashboards.
            </div>
            <div className="neumorphic-press border border-soft bg-surface p-4 text-sm leading-6 text-primary">
              <FaDatabase className="mb-2 text-2xl text-accent" />
              SQL for data warehousing, insights, and operational pipelines.
            </div>
            <div className="neumorphic-press border border-soft bg-surface p-4 text-sm leading-6 text-primary">
              <FaGithub className="mb-2 text-2xl text-accent" />
              Git-driven collaboration with a focus on shipping real products.
            </div>
          </div>
          <p className="text-sm text-secondary">
            I collaborate fluently in English <ReactCountryFlag countryCode="GB" svg />, French <ReactCountryFlag countryCode="FR" svg />, and Spanish <ReactCountryFlag countryCode="ES" svg />, keeping multicultural teams aligned and energized.
          </p>
        </div>
      </section>

      <section className="neumorphic-surface p-8 text-center">
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-semibold text-primary">Let’s shape what’s next.</h2>
          <p className="text-sm text-secondary">
            Ready to co-create the next generation of data-driven experiences? I’m open to advisory roles, full-time challenges, and experimental collaborations across Europe.
          </p>
          <SocialLinks />
        </div>
      </section>
    </div>
  );
};

export default About;
