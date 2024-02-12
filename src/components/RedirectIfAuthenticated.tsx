import React, { useEffect } from 'react';
import Cookies from 'js-cookie';

const RedirectIfAuthenticated = () => {
  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      // Si le cookie est présent, redirigez l'utilisateur vers la page d'accueil
      window.location.href = '/test'; // Remplacez '/home' par l'URL de la page souhaitée
    }
  }, []); // Videz le tableau de dépendances pour exécuter cette logique une seule fois lors du montage du composant

  return null; // Le composant ne rend rien, car il n'a pas besoin d'afficher de contenu
};

export default RedirectIfAuthenticated;
