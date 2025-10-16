import React from 'react';
import { FaPython, FaRProject, FaDatabase, FaGithub } from 'react-icons/fa';
import ReactCountryFlag from "react-country-flag";
import SocialLinks from './../components/SocialLinks';
import profile_pic from "./../cached_images/louis_picture.webp";

const About = () => {
  return (
    <div className="space-y-12">
      <section className="neuo-panel--soft p-12 text-center shadow-brand-neuo">
        <div className="flex flex-col items-center gap-8">
          <div className="relative h-40 w-40 overflow-hidden border border-white/15 shadow-brand-neuo-soft">
            <img src={profile_pic} alt="Louis Paulet" className="h-full w-full object-cover" />
          </div>
          <div className="space-y-4">
            <h1 className="font-display text-4xl font-semibold text-white sm:text-5xl">Meet Louis Paulet</h1>
            <span className="neuo-chip">Data Scientist · Product Engineer · AI Builder</span>
            <p className="mx-auto max-w-3xl text-sm text-muted sm:text-base">
              I build data-rich products that feel refined enough for the world’s most demanding teams. From adtech ecosystems to civic transparency platforms, I lead projects that turn ambitious ideas into shipped experiences.
            </p>
          </div>
          <SocialLinks />
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="neuo-panel--soft p-10 shadow-brand-neuo-soft">
          <h2 className="font-display text-2xl font-semibold text-white">What I bring to the table</h2>
          <p className="mt-4 text-sm text-muted">
            With a dual Master’s degree in Data Science and Software Engineering, I design end-to-end solutions that pair robust modelling with a premium user experience. My track record spans delivering production ML pipelines, leading analytics projects for enterprise teams, and nurturing early-stage ideas into public launches.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-muted">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 bg-brand-accent" />
              <span>Production-minded workflows—from discovery to deployment.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 bg-brand-accent" />
              <span>Design sensibilities shaped by modern FAANG-grade product craft.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 bg-brand-accent" />
              <span>Experience leading cross-functional collaboration across Europe.</span>
            </li>
          </ul>
        </div>
        <div className="neuo-panel--soft p-10 shadow-brand-neuo-soft">
          <h2 className="font-display text-2xl font-semibold text-white">Toolbox & languages</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="border border-white/10 bg-brand-primary/85 p-4 text-sm text-muted shadow-brand-neuo-inset">
              <FaPython className="mb-2 text-2xl text-brand-accent" />
              Python for data products, experimentation, and automation.
            </div>
            <div className="border border-white/10 bg-brand-primary/85 p-4 text-sm text-muted shadow-brand-neuo-inset">
              <FaRProject className="mb-2 text-2xl text-brand-accent" />
              R for analytical storytelling and interactive dashboards.
            </div>
            <div className="border border-white/10 bg-brand-primary/85 p-4 text-sm text-muted shadow-brand-neuo-inset">
              <FaDatabase className="mb-2 text-2xl text-brand-accent" />
              SQL for data warehousing, insights, and operational pipelines.
            </div>
            <div className="border border-white/10 bg-brand-primary/85 p-4 text-sm text-muted shadow-brand-neuo-inset">
              <FaGithub className="mb-2 text-2xl text-brand-accent" />
              Git-driven collaboration with a focus on shipping real products.
            </div>
          </div>
          <p className="mt-5 text-sm text-muted">
            I collaborate fluently in English <ReactCountryFlag countryCode="GB" svg />, French <ReactCountryFlag countryCode="FR" svg />, and Spanish <ReactCountryFlag countryCode="ES" svg />, keeping multicultural teams aligned and energized.
          </p>
        </div>
      </section>

      <section className="neuo-panel--soft p-10 text-center shadow-brand-neuo-soft">
        <div className="space-y-6">
          <h2 className="font-display text-3xl font-semibold text-white">Let’s shape what’s next.</h2>
          <p className="text-sm text-muted">
            Ready to co-create the next generation of data-driven experiences? I’m open to advisory roles, full-time challenges, and experimental collaborations across Europe.
          </p>
          <SocialLinks />
        </div>
      </section>
    </div>
  );
};

export default About;
