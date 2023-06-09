import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import Modal from 'react-modal';
import './Download.css';



Modal.setAppElement('#root');

function Download() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    { title: 'Frontend - Parte 1', file: process.env.PUBLIC_URL + '/certificates/Certificado Front-end.pdf' },
    { title: 'Frontend - Parte 2', file: process.env.PUBLIC_URL + '/certificates/Certificado Front-end - Parte 2.pdf' },
    { title: 'Frontend - Bibliotecas e Frameworks', file: process.env.PUBLIC_URL + '/certificates/Certificado Bibliotecas e Frameworks Front end.pdf' },
    { title: 'Cloud Computing', file: process.env.PUBLIC_URL + '/certificates/Certificado - Cloud Computing.pdf' },
    { title: 'Python', file: process.env.PUBLIC_URL + '/certificates/Certificado - Python.pdf' },
    { title: 'Backend', file: process.env.PUBLIC_URL + '/certificates/Certificado Back-end.pdf' },
  ];



  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  }, []);

  function openModal(certificate) {
    setSelectedCertificate(certificate);
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div className="download-page">
      {/* ... */}
      <div className="certificates">
        {certificates.map((certificate, index) => (
          <div className="certificate" key={index}>
            <h2>{certificate.title}</h2>
            <div className="thumbnail" onClick={() => openModal(certificate)}>
              <Document file={certificate.file}>
                <Page pageNumber={1} width={150} />
              </Document>
            </div>
            <a className="download-btn" href={certificate.file} download>
              Download
            </a>
          </div>
        ))}
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal">
        {/* ... */}
        {selectedCertificate && (
          <>
            <h2>{selectedCertificate.title}</h2>
            <Document file={selectedCertificate.file}>
              <Page pageNumber={1} />
            </Document>
            <a className="download-btn" href={selectedCertificate.file} download>
              Download
            </a>
          </>
        )}
      </Modal>
    </div>
  );
}

export default Download;
