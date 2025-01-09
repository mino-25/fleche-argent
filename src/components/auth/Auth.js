import React from 'react';
import Connexion from '../connexion/connexion';
import Inscription from '../inscription/inscription';
import AuthCover from '../assets/auth-cover.jpg'
import './Auth.css';

function Auth() {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <img src={AuthCover} alt="Authentification Cover" />
        {/* Section Connexion */}
        <div className="auth-section auth-connexion">
          <h2>Déjà client</h2>
          <Connexion />
        </div>

        {/* Ligne de séparation */}
        <div className="auth-divider"></div>

        {/* Section Inscription */}
        <div className="auth-section auth-inscription">
          <h2>Nouveau client</h2>
          <Inscription />
        </div>
      </div>
    </div>
  );
}

export default Auth;
