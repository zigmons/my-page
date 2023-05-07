import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import Modal from 'react-modal';
import './Download.css';
import { downloadFile } from '../Api/DownloadApi';



Modal.setAppElement('#root');

function Download() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    { id:11,title: 'Frontend - Parte 1', file: process.env.PUBLIC_URL + '/certificates/Certificado Front-end.pdf' },
    { id:12, title: 'Frontend - Parte 2', file: process.env.PUBLIC_URL + '/certificates/Certificado Front-end - Parte 2.pdf' },
    { id:9, title: 'Frontend - Bibliotecas e Frameworks', file: process.env.PUBLIC_URL + '/certificates/Certificado Bibliotecas e Frameworks Front end.pdf' },
    { id:10, title: 'Cloud Computing', file: process.env.PUBLIC_URL + '/certificates/Certificado - Cloud Computing.pdf' },
    { id:13, title: 'Python', file: process.env.PUBLIC_URL + '/certificates/Certificado - Python.pdf' },
    { id:8, title: 'Backend', file: process.env.PUBLIC_URL + '/certificates/Certificado Back-end.pdf' },
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

  async function handleDownload(fileId, certificate) {
    try {
      const response = await downloadFile(fileId);
  
      if (response.ok) {
        const data = await response.blob();
        const url = URL.createObjectURL(data);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${certificate.title}.pdf`;
        link.click();
        URL.revokeObjectURL(url);
      } else {
        console.error('Failed to download file:', response.statusText);
      }
    } catch (err) {
      console.error('Failed to download file:', err);
    }
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
            <button className="download-btn" onClick={() => handleDownload(certificate.id, certificate)}>
              Download
            </button>
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
            <button className="download-btn" onClick={() => handleDownload(selectedCertificate.id, selectedCertificate)}>
              Download
            </button>
          </>
        )}
      </Modal>
    </div>
  );
}

export default Download;
