import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from '@/libs/axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [adminIsLogged, setAdminIsLogged] = useState(false); // pour mettre un etat si un admin est connecter (ou membre du staff)
  const [loading, setLoading] = useState(true); // pour attendre que la requête soit terminée
  
  useEffect(() =>{
    // Fonction asynchrone pour récupérer le user auth
    const fetchAuth = async() => {
      try {
        const response = await axios.get('/api/user')
        if (response.status === 200) { //si retour requete ok
          const user = response.data.data;
          setAuth(user) //on stock l'objet recupérer de la bdd avec le current user dans le setter de auth
          // console.log(user.role); 
          if (user.role === 'admin' || user.role === 'staff'){
            setAdminIsLogged(true); //si admin ou staff, on valide l'admin logged en le basculant a true
          }
        }
      } catch (err) {
        // console.error(err);
      } 
      finally {
        setLoading(false);
      }
    }
    fetchAuth();
  }, []);  
  
  //fonction pour la page login
  const login = (data) => { // on creer une fonction login pour valider le retour du back suite a l'envoi du formulaire
    setAuth(data); //on stock les valeurs de data dans setAuth depuis le retour back du form login
    if (data.role === 'admin' || data.role === 'staff') {
      setAdminIsLogged(true);
    }
  };

  return (
    //encapsulation de l'enfant dans le context avec les value que l'on souhaite envoyer
    <AuthContext.Provider value={{ auth, adminIsLogged, loading, login }}> 
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
