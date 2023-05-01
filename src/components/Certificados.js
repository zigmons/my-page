import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack'

import samplePDF from '../images/Certificados/Certificado-CloudComputing.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

// Create Document Component
function Certificados() {
  
  return (
    
    <Document file={samplePDF}>
      <Page pageNumber={1} />
    </Document>
  );
}
export default Certificados


// http://www.africau.edu/images/default/sample.pdf