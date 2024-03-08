import React, { useState } from 'react';
import logo from 'asset/reactLogo.svg';
import 'css/App.css';

function getDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  return `${year}/${month}/${day}`
}

function MaintenancePage() {
  const [currentDate] = useState(getDate());

  return (
    <div className="Center">
      <header className="Maintenance-header">
        <img src={logo} className="Maintenance-logo" alt="logo" />
        <p>
        This page is under construction, please visit again later!<br></br>
        <small><code>(Anggi B. Kurniawan. {currentDate})</code></small>
        </p>
        <p>
          <a
            className="Maintenance-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          <small>Powered by React</small>
          </a>
        </p>
      </header>
    </div>
  );
}

export default MaintenancePage;
