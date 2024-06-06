import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from '@/libs/axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  // const [auth, setAuth] = useState([]);
  const [adminIsLogin, setAdminIsLogin] = useState(false);
  const [loading, setLoading] = useState(true); // pour attendre que la requête soit terminée
  
  useEffect(() =>{
    // Fonction asynchrone pour récupérer le user auth
    const fetchAuth = async() => {
      try {
        const response = await axios.get('/api/user')
        if (response.status === 200) {
          setAuth(response.data.data)
          // console.log(response.data.data.role); 
          if (response.data.data.role === 'admin' || response.data.data.role === 'staff'){
            setAdminIsLogin(true);
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
  
  const login = (data) => {
    setAuth(data);
    if (data.user_role === 'admin' || data.user_role === 'staff') {
      setAdminIsLogin(true);
    }
  };

  // useEffect(() => {
  //   if (auth && auth.name && auth.email && auth.role === 'admin') {
  //     setAdminIsLogin(true);
  //   }
  // }, []);

  return (
    <AuthContext.Provider value={{ auth, adminIsLogin, loading, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
