import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const CvViewer = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-semibold mb-4 text-center">The curriculum vitae corner</h1>
      <p className="text-lg mb-8">I am not currently looking for a job.</p>
      <div className="flex space-x-4">
        <RouterLink to="/">
          <button className="bg-white border-2 border-blue-600 text-black py-2 px-4 rounded-lg hover:shadow-lg">
            Back to Homepage
          </button>
        </RouterLink>
        <RouterLink to="/projects">
          <button className="bg-blue-600 border-2 border-blue-600 text-white py-2 px-4 rounded-lg hover:shadow-lg">
            Go to Projects
          </button>
        </RouterLink>
      </div>

      {/* Original content commented out for future use */}
      {/*
      <p>There is a french and an english version.</p>
      <div className="text-center">
        <RouterLink to="#english_version">
          <ScrollLink to="english_version" smooth={true} duration={500} className="text-blue-500 underline mr-4">Jump to English CV</ScrollLink>
        </RouterLink>
        <RouterLink to="#french_version">
          <ScrollLink to="french_version" smooth={true} duration={500} className="text-blue-500 underline">Jump to French CV</ScrollLink>
        </RouterLink>
      </div>
      <p><em> "CVs! Download 'em boil 'em stick 'em in a stew" </em></p>
      <div className="w-full max-w-4xl my-4 p-4">
        <Element name="english_version">
          <h2 className="text-2xl font-semibold mb-2 text-center">English CV</h2>
          <PDFViewer pdfUrl={pdfUrlEn} />
        </Element>
      </div>
      <div className="w-full max-w-4xl my-4 p-4">
        <Element name="french_version">
          <h2 className="text-2xl font-semibold mb-2 text-center">French CV</h2>
          <PDFViewer pdfUrl={pdfUrlFr} />
        </Element>
      </div>
      <SocialLinks />
      */}
    </div>
  );
};

export default CvViewer;
