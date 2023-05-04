import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import Modal from 'react-modal';
import './Download.css';

Modal.setAppElement('#root'); // Needed for accessibility requirements

function Download() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    { title: 'Frontend - Parte 1', file: '/certificates/Certificado Front-end.pdf' },
    { title: 'Frontend - Parte 2', file: '/certificates/Certificado Front-end - Parte 2.pdf' },
    { title: 'Frontend - Bibliotecas e Frameworks', file: '/certificates/Certificado Bibliotecas e Frameworks Front end.pdf' },
    { title: 'Cloud Computing', file: '/certificates/Certificado - Cloud Computing.pdf' },
    { title: 'Python', file: '/certificates/Certificado - Python.pdf' },
    { title: 'Backend', file: '/certificates/Certificado Back-end.pdf' },
  ];

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function openModal(certificate) {
    setSelectedCertificate(certificate);
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

    return (
        <div className="download-page">
          <h1>Download</h1>
          <div className="certificates">
            {certificates.map((certificate, index) => (
              <div className="certificate" key={index}>
                <h2>{certificate.title}</h2>
                <div className="thumbnail" onClick={() => openModal(certificate)}>
                  <Document file={certificate.file} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} width={150} />
                  </Document>
                </div>
                <a className="download-btn" href={certificate.file} download>
                  Download
                </a>
              </div>
            ))}
          </div>
          <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal">
            <button className="close-btn" onClick={closeModal}>
              X
            </button>
            {selectedCertificate && (
              <>
                <h2>{selectedCertificate.title}</h2>
                <Document file={selectedCertificate.file} onLoadSuccess={onDocumentLoadSuccess}>
                  <Page pageNumber={pageNumber} />
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
