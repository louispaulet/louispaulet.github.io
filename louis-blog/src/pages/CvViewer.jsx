import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const CvViewer = () => {
  return (
    <div className="neuo-panel--soft flex flex-col items-center gap-6 p-12 text-center shadow-brand-neuo-soft">
      <h1 className="font-display text-4xl font-semibold text-white sm:text-5xl">The curriculum vitae corner</h1>
      <p className="max-w-2xl text-sm text-muted sm:text-base">I am not currently looking for a job.</p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <RouterLink to="/" className="neuo-button">
          Back to Homepage
        </RouterLink>
        <RouterLink to="/projects" className="neuo-button neuo-button--accent">
          Go to Projects
        </RouterLink>
      </div>
    </div>
  );
};

export default CvViewer;
