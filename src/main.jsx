import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';

document.title = "#Restricted#"; 

createRoot(document.getElementById('root')).render(<App />);
