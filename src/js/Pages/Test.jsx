import React, { useEffect, useState } from 'react'

import axios from '@/libs/axios';



export default function Test() {

  const [users, setUsers] = useState([]);

  useEffect(() =>{
      // Fonction asynchrone pour récupérer les articles
      const test = async() => {
        try {
          const response = await axios.get('/api/users')
          // setArticles(response.data.data)
          console.log(response.data);
        } catch (err) {
  
        }
      }
  
      test();
    }, []);


  return (
    <div>Test user</div>
  )
}
