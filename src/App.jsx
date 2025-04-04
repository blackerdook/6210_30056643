import React, { useState } from 'react';
import SCPMenu from './SCPMenu';
import SCPDetail from './SCPDetail';
import './styles.css';

function App() {
  const [selectedSCP, setSelectedSCP] = useState(null);

  return (
    <div className="App">
      {selectedSCP ? (
        <>
          <button className="back-button" onClick={() => setSelectedSCP(null)}>← Back to Directory</button>
          <SCPDetail scp={selectedSCP} />
        </>
      ) : (
        <SCPMenu onSelect={setSelectedSCP} />
      )}
    </div>
  );
}

export default App;
