import { Link as RouterLink } from 'react-router-dom';

const CvViewer = () => {
  return (
    <div className="flex flex-col items-center gap-6 text-secondary">
      <h1 className="text-4xl font-semibold text-primary">The curriculum vitae corner</h1>
      <p className="text-lg">I am not currently looking for a job.</p>
      <div className="flex gap-4">
        <RouterLink to="/">
          <button className="neumorphic-button px-6 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary hover:text-accent">
            Back to Homepage
          </button>
        </RouterLink>
        <RouterLink to="/projects">
          <button className="neumorphic-button px-6 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary hover:text-accent">
            Go to Projects
          </button>
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
