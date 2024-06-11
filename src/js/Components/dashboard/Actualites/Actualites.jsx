import React, { useEffect, useState } from 'react'
import ButtonAddActu from './ButtonAddActu'
import ListeActus from './ListeActus'
import axios from '@/libs/axios';


export default function Actualites() {
  const [actualites, setActualites] = useState([]);

  useEffect(() => {
    const fetchActualites = async () => {
        try {
            const response = await axios.get('/api/dashboard');
            setActualites(response.data.actualites);
        } catch (err) {
            console.error(err);
        }
    };
    fetchActualites();
}, []);

const addActualite = (newActu) => {
    setActualites((prevActualites) => [newActu, ...prevActualites]);
};

  return (
    <>
      <div className="">
        <ButtonAddActu addActualite={addActualite} />
      </div>
      <div className="liste-actus mt-24">
        <ListeActus actualites={actualites} setActualites={setActualites} />
      </div>
    </>
  )
}
