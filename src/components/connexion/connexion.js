import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import axios from 'axios';


function Connexion() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    mot_de_passe: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Envoyer les données au backend
    axios.post('http://localhost:5000/api/connexion', formData)
      .then((response) => {
        setMessage(response.data.message);
  
        // Vérifier si l'utilisateur est renvoyé
        if (response.data.user) {
          // Enregistrer les informations de l'utilisateur dans le stockage local
          localStorage.setItem('utilisateur', JSON.stringify(response.data.user));
          console.log('Utilisateur connecté et stocké :', response.data.user);
  
          // Rediriger ou mettre à jour l'état de l'application si nécessaire
          // Exemple : navigate('/reservation');
          navigate('/');
        }
      })
      .catch((error) => {
        if (error.response) {
          setMessage(error.response.data.message);
        } else {
          setMessage('Erreur de connexion au serveur.');
        }
      });
  };
  

  return (
    <div className="connexion-container">
      <h1>Connexion</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email :</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Mot de passe :</label>
          <input
            type="password"
            name="mot_de_passe"
            value={formData.mot_de_passe}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default Connexion;


// import React, { useState } from 'react';
// import axios from 'axios';

// function Connexion() {
//   const [formData, setFormData] = useState({
//     email: '',
//     mot_de_passe: '',
//   });

//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Envoyer les données au backend
//     axios
//       .post('http://localhost:5000/api/connexion', formData)
//       .then((response) => {
//         setMessage(response.data.message);
//         console.log('Utilisateur connecté :', response.data.user);
//       })
//       .catch((error) => {
//         if (error.response) {
//           setMessage(error.response.data.message);
//         } else {
//           setMessage('Erreur de connexion au serveur.');
//         }
//       });
//   };

//   return (
//     <div className="connexion-container">
//       <h1>Connexion</h1>
//       {message && <p>{message}</p>}
//       <form onSubmit={handleSubmit}>
//         <fieldset>
//           <legend>Informations de connexion</legend>
//           <div>
//             <label>Email :</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div>
//             <label>Mot de passe :</label>
//             <input
//               type="password"
//               name="mot_de_passe"
//               value={formData.mot_de_passe}
//               onChange={handleChange}
//               required
//             />
//           </div>
//         </fieldset>
//         <button type="submit">Se connecter</button>
//       </form>
//     </div>
//   );
// }

// export default Connexion;
