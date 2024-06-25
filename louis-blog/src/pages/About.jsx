import React from 'react';
import { FaPython, FaRProject, FaDatabase, FaGithub } from 'react-icons/fa';
import ReactCountryFlag from "react-country-flag"
import SocialLinks from './../components/SocialLinks'
import profile_pic from "./../cached_images/louis_picture.webp"

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Meet Louis Paulet</h1>
      <div className="max-w-2xl mx-auto text-justify">
        <img src={profile_pic} alt="Louis Paulet" className="mx-auto mb-8 rounded-full w-48 h-48" />
        <SocialLinks />
        <p className="text-lg text-gray-700 mb-4">
          Welcome to my blog! I'm Louis Paulet, a Data Scientist and Medior Developer with a deep passion for data analysis, machine learning, and crafting innovative solutions. I bring a wealth of experience from the Adtech industry and hold a dual Master's degree in Data Science and Software Engineering.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          With proficiency in <FaPython className="inline text-blue-500" /> Python, <FaRProject className="inline text-blue-500" /> R (Shiny, dplyr), <FaDatabase className="inline text-blue-500" /> MySQL, and <FaGithub className="inline text-blue-500" /> Git, I excel at transforming data into actionable insights and deploying data-driven applications across various domains. My proven track record in pushing projects to production showcases my commitment to excellence.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          I'm multilingual, fluent in English <ReactCountryFlag countryCode="GB" svg />, French <ReactCountryFlag countryCode="FR" svg />, and Spanish <ReactCountryFlag countryCode="ES" svg />, which enables me to collaborate effectively in diverse environments. I'm always open to new challenges and eager to contribute to impactful data-focused projects in Europe.
        </p>
        <p className="text-lg text-gray-700">
          Connect with me to explore exciting data science opportunities and discover how I can help you leverage the power of data to drive your projects forward!
        </p>
        <SocialLinks />
      </div>
    </div>
  );
};

export default About;