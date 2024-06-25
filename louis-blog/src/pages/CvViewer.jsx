import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';
import PDFViewer from './../components/PdfViewer.jsx';
import SocialLinks from './../components/SocialLinks';

const CvViewer = () => {
  const pdfUrlEn = 'https://storage.googleapis.com/cv_storage_loulou/Louis_Paulet_CV_EN.pdf';
  const pdfUrlFr = 'https://storage.googleapis.com/cv_storage_loulou/Louis_Paulet_CV_FR.pdf';

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-semibold mb-2 text-center">The curriculum vitae corner</h1>
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
    </div>
  );
};

export default CvViewer;
