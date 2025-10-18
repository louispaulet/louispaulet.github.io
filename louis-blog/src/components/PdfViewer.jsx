import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

function PDFViewer({ pdfUrl }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function goToPrevPage() {
    setPageNumber(prevPageNumber => Math.max(prevPageNumber - 1, 1));
  }

  function goToNextPage() {
    setPageNumber(prevPageNumber => Math.min(prevPageNumber + 1, numPages));
  }

  function getFilenameFromUrl(url) {
    return url.substring(url.lastIndexOf('/') + 1);
  }

  async function downloadPDF() {
    const response = await fetch(pdfUrl);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', getFilenameFromUrl(pdfUrl));
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }

  return (
    <div className="flex flex-col items-center gap-4 border border-soft bg-surface p-4 text-secondary shadow-[12px_12px_24px_rgba(185,194,212,0.4),-12px_-12px_24px_rgba(255,255,255,0.9)]">
      <div className="flex w-full justify-center overflow-x-auto">
        <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} width={800} />
        </Document>
      </div>
      {numPages > 1 && (
        <div className="mt-2 flex items-center justify-center">
          <button
            onClick={goToPrevPage}
            disabled={pageNumber <= 1}
            className="neumorphic-button mx-1 w-24 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary hover:text-accent disabled:cursor-not-allowed disabled:opacity-60"
          >
            Previous
          </button>
          <span className="mx-2">
            Page {pageNumber} of {numPages}
          </span>
          <button
            onClick={goToNextPage}
            disabled={pageNumber >= numPages}
            className="neumorphic-button mx-1 w-24 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary hover:text-accent disabled:cursor-not-allowed disabled:opacity-60"
          >
            Next
          </button>
        </div>
      )}
      <button
        onClick={downloadPDF}
        className="neumorphic-button mt-2 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary hover:text-accent"
      >
        Download PDF
      </button>
    </div>
  );
}

export default PDFViewer;
