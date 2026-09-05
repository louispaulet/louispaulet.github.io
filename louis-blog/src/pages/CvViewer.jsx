import PageIntro from '../components/PageIntro';
import { Link as RouterLink } from 'react-router-dom';

const CvViewer = () => {
  return (
    <div className="page-stack min-w-0 text-secondary">
      <PageIntro kicker="Background" title="CV" />
      <p className="max-w-2xl text-base leading-7 sm:text-lg">
        I am not currently looking for a job, but the route stays here for
        context.
      </p>
      <div className="grid w-full max-w-md gap-3 sm:flex sm:w-auto sm:flex-wrap sm:justify-center sm:gap-4">
        <RouterLink to="/" className="cta cta-secondary w-full sm:w-auto">
          Back home
        </RouterLink>
        <RouterLink to="/projects" className="cta cta-primary w-full sm:w-auto">
          View projects
        </RouterLink>
      </div>
    </div>
  );
};

export default CvViewer;
