import React, { useEffect, useState } from 'react';
import './styles.css';

function SCPMenu({ onSelect }) {
  const [scps, setScps] = useState([]);

  useEffect(() => {
    fetch('/SCPData.json')
      .then((res) => res.json())
      .then((data) => setScps(data))
      .catch((error) => console.error("Error fetching SCP data:", error));
  }, []);

  return (
    <div className="scp-menu">
      <header className="scp-header">
        <h1>SCP Secure Directory</h1>
        <p className="scp-intro">
          Welcome, authorized personnel. Explore documented SCP entities below.
          Engage with extreme caution.
        </p>
      </header>

      <section className="scp-grid">
        {scps.map((scp) => {
          
          const contentSnippet = scp.content 
            ? (scp.content.length > 150 ? `${scp.content.slice(0, 150)}...` : scp.content)
            : 'No content available.';

          
          const descriptionSnippet = scp.description && scp.description.length > 0
            ? (scp.description[0].length > 150 
                ? `${scp.description[0].slice(0, 150)}...` 
                : scp.description[0])
            : null;

          return (
            <div key={scp.model} className="scp-card" onClick={() => onSelect(scp)}>
              <div className="scp-card-img">
                <img src={scp.image} alt={scp.model} />
              </div>
              <div className="scp-card-content">
                <h3>{scp.model}</h3>
                <span className="scp-class-tag">{scp.tagline}</span>
                {descriptionSnippet && (
                  <p className="scp-description">{descriptionSnippet}</p>
                )}
                <button className="scp-btn">View File</button>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default SCPMenu;
