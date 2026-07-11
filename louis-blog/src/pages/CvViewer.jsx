import { Link as RouterLink } from 'react-router-dom';

const CvViewer = () => {
  return (
    <div className="flex min-w-0 flex-col items-center gap-6 text-center text-secondary">
      <h1 className="text-4xl font-semibold text-primary">CV</h1>
      <p className="max-w-2xl text-base leading-7 sm:text-lg">I am not currently looking for a job, but the route stays here for context.</p>
      <div className="grid w-full max-w-md gap-3 sm:flex sm:w-auto sm:flex-wrap sm:justify-center sm:gap-4">
        <RouterLink to="/" className="cta cta-secondary w-full sm:w-auto">
          Back home
        </RouterLink>
        <RouterLink to="/projects" className="cta cta-primary w-full sm:w-auto">
          View projects
        </RouterLink>
      </div>

      {/* Original content commented out for future use */}
      {/*
      <p>There is a french and an english version.</p>
      <div className="text-center">
        <RouterLink to="#english_version">
          <ScrollLink to="english_version" smooth={true} duration={500} className="text-accent underline mr-4">Jump to English CV</ScrollLink>
        </RouterLink>
        <RouterLink to="#french_version">
          <ScrollLink to="french_version" smooth={true} duration={500} className="text-accent underline">Jump to French CV</ScrollLink>
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
