import React from 'react';
import { FaPython, FaRProject, FaDatabase, FaGithub } from 'react-icons/fa';
import ReactCountryFlag from "react-country-flag"
import SocialLinks from './../components/SocialLinks'
import profile_pic from "./../cached_images/louis_picture.webp"

const About = () => {
  return (
    <div className="space-y-12">
      <section className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-10 shadow-2xl shadow-blue-950/40">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-blue-400 blur-2xl opacity-40" />
            <img src={profile_pic} alt="Louis Paulet" className="relative h-40 w-40 rounded-3xl border border-white/20 object-cover shadow-xl" />
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">Meet Louis Paulet</h1>
            <p className="text-sm uppercase tracking-[0.4em] text-blue-200">Data Scientist · Product Engineer · AI Builder</p>
            <p className="text-base text-slate-300 sm:text-lg">
              I build data-rich products that feel refined enough for the world’s most demanding teams. From adtech ecosystems to civic transparency platforms, I lead projects that turn ambitious ideas into shipped experiences.
            </p>
          </div>
          <SocialLinks />
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6 rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-xl">
          <h2 className="text-2xl font-semibold text-white">What I bring to the table</h2>
          <p className="text-sm text-slate-300">
            With a dual Master’s degree in Data Science and Software Engineering, I design end-to-end solutions that pair robust modeling with a premium user experience. My track record spans delivering production ML pipelines, leading analytics projects for enterprise teams, and nurturing early-stage ideas into public launches.
          </p>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-blue-400" />
              <span>Production-minded workflows—from discovery to deployment.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-blue-400" />
              <span>Design sensibilities shaped by modern FAANG-grade product craft.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-blue-400" />
              <span>Experience leading cross-functional collaboration across Europe.</span>
            </li>
          </ul>
        </div>
        <div className="space-y-6 rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-xl">
          <h2 className="text-2xl font-semibold text-white">Toolbox & languages</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-blue-400/40 bg-blue-500/10 p-4 text-sm text-blue-100">
              <FaPython className="mb-2 text-2xl" />
              Python for data products, experimentation, and automation.
            </div>
            <div className="rounded-2xl border border-blue-400/40 bg-blue-500/10 p-4 text-sm text-blue-100">
              <FaRProject className="mb-2 text-2xl" />
              R for analytical storytelling and interactive dashboards.
            </div>
            <div className="rounded-2xl border border-blue-400/40 bg-blue-500/10 p-4 text-sm text-blue-100">
              <FaDatabase className="mb-2 text-2xl" />
              SQL for data warehousing, insights, and operational pipelines.
            </div>
            <div className="rounded-2xl border border-blue-400/40 bg-blue-500/10 p-4 text-sm text-blue-100">
              <FaGithub className="mb-2 text-2xl" />
              Git-driven collaboration with a focus on shipping real products.
            </div>
          </div>
          <p className="text-sm text-slate-300">
            I collaborate fluently in English <ReactCountryFlag countryCode="GB" svg />, French <ReactCountryFlag countryCode="FR" svg />, and Spanish <ReactCountryFlag countryCode="ES" svg />, keeping multicultural teams aligned and energized.
          </p>
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-xl">
        <div className="flex flex-col gap-6 text-center">
          <h2 className="text-3xl font-semibold text-white">Let’s shape what’s next.</h2>
          <p className="text-sm text-slate-300">
            Ready to co-create the next generation of data-driven experiences? I’m open to advisory roles, full-time challenges, and experimental collaborations across Europe.
          </p>
          <SocialLinks />
        </div>
      </section>
    </div>
  );
};

export default About;