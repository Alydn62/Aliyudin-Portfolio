import React, { useState } from 'react';
import uniqid from 'uniqid';
import { certificates } from '../../portfolio';
import '../../App.css';

const Certificates = () => {
  const [category, setCategory] = useState('SEMUA'); // Menyimpan kategori yang dipilih

  // Filter sertifikat berdasarkan kategori yang dipilih
  const filteredCertificates = category === 'SEMUA'
    ? certificates
    : certificates.filter(certificate => certificate.category === category);

  return (
    <section id="certificates" className="section certificates">
      <h2 className="section__title">Certificates</h2>

      <div className="filter-buttons">
        <button type="button" onClick={() => setCategory('SEMUA')}>Semua</button>
        <button type="button" onClick={() => setCategory('HTML')}>HTML</button>
        <button type="button" onClick={() => setCategory('CSS')}>CSS</button>
        <button type="button" onClick={() => setCategory('JavaScript')}>JavaScript</button>
      </div>

      <div className="certificates__grid">
        {filteredCertificates.map((certificate) => (
          <div key={uniqid()} className="certificate">
            {certificate.image && (
              <img
                src={certificate.image}
                alt={certificate.name}
                className="certificate__image"
              />
            )}
            <h3 className="certificate__name">{certificate.name}</h3>
            <p className="certificate__organization">{certificate.organization}</p>
            <p className="certificate__date">{certificate.date}</p>
            {certificate.link && (
              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate__link"
              >
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
