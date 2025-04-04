import React from 'react';
import './styles.css';

function SCPDetail({ scp }) {
  if (!scp) return <p>No SCP selected.</p>;

  const sections = {
    'Special Containment Procedures': scp.containment,
    'Description': scp.description,
    'Reference': scp.reference,

  };


  const filterTruncated = (items) =>
    items.filter(text => text !== "[...content truncated for readability]");

  return (
    <div className="scp-detail">
      <div className="scp-detail-header">
        <h2>{scp.model}</h2>
        <span className="scp-class">{scp.tagline}</span>
      </div>
      <div className="scp-detail-image">
        <img src={scp.image} alt={scp.model} />
      </div>
      <div className="scp-brief">
        {Object.entries(sections).map(
          ([title, items]) =>
            items && filterTruncated(items).length > 0 && (
              <div key={title} className="scp-section">
                <h3 className="scp-subheading">{title}</h3>
                {filterTruncated(items).map((text, idx) => (
                  <p key={idx} className="scp-paragraph">{text}</p>
                ))}
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default SCPDetail;
