import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import axios from 'axios';

axios.get("/medications")
  .then((res) => {
    ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App initialMedicationData={res.data.medication} />
    </React.StrictMode>,

    );
  })
  .catch((error) => console.log(error))

