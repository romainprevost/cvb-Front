import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from '@/libs/axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    
  const [auth, setAuth] = useState([]);
  const [loading, setLoading] = useState(true); // pour attendre que la requete soit terminée

    useEffect(() =>{
        // Fonction asynchrone pour récupérer le user auth
        const fetchAuth = async() => {
          try {
            const response = await axios.get('/api/user')
            setAuth(response.data.data)
            // console.log(response.data.data); 
          } catch (err) {
            // console.error(err);
          } finally {
            setLoading(false);
          }
        }
        fetchAuth();
      }, []);    

      const values=[
        auth, 
        setAuth, 
        loading
      ]

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
