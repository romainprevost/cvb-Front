import '../../sass/welcome.scss'  

import Header from '@/Layouts/Header'
import Footer from '@/Layouts/Footer'
import { Head } from '@inertiajs/react'
import React from 'react'
import MainPhoto from '@/Components/header/MainPhoto'
import Actualites from '@/Components/Actualites'
import Reseaux from '@/Components/Reseaux'
import Partenaires from '@/Components/Partenaires'

export default function Welcome({auth, firstActu, othersActu, partners}) {
  return (
    <>
    {/* {console.log(auth)} */}
        <Head title="Accueil" />

        <Header 
          auth={auth}
        />

        <MainPhoto 
          src='/assets/images/cover.jpg'
          alt={"Caen Volley Ball Photo"}
          className={'main-photo-cover'}
        />

        <div className="scores">
          <h2>SAVE <span>THE DATE </span>!</h2>
          <div className='mt-16'>
            <iframe 
              id="65f4382f11d4460dd0e0c6a0" 
              title="Score'N'Co"
              height="280" src="https://v1.scorenco.com/widget/65f4382f11d4460dd0e0c6a0/" 
              style={{display: 'block', width: '100%', overflow: 'auto', margin: 'auto', borderWidth: '0px', borderRadius: '5px', boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.1)'}}
            ></iframe>
          </div>
        </div>

        <Actualites 
          firstActu={firstActu}
          othersActu={othersActu}
        />

        <Reseaux />

        <Partenaires partners={partners}/>

        <Footer />

    </>
  )
}
