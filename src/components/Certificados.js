import React from 'react';
import { Document, Page } from 'react-pdf';
import cert1 from '../images/Certificados/Certificado-Cloud Computing.pdf'

function Certificados() {
    const pdfUrl = {cert1};
    return (
      <embed src={pdfUrl} width="100%" height="600px" type='application/pdf' />
    );
  }

  export default Certificados
