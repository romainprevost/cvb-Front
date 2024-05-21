import React from 'react'
import Footer from '@/Layouts/Footer'
import Header from '@/Layouts/Header'
import {Link } from 'react-router-dom';
import moment from 'moment';

import '../../../sass/actualites.scss'  
import ButtonGold from '@/Components/ButtonGold';
import MainPhoto from '@/Components/header/MainPhoto';
import ApiReseaux from '@/Components/ApiReseaux';


export default function Actualites({ auth, actualites }) {
  return (
    <>
        {/* <Head title="Actualités" /> */}

        <Header auth={auth}/>

        <div className='bloc-main-photo'>
            <MainPhoto 
            src='/assets/images/cover2baw.jpg'
            alt={"Caen Volley Ball Photo"}
            className={'main-photo'}
            />
            {/* <h1>ACTUALITÉS</h1> */}
        </div>
        
        
        <section className='flex'>
            <div className="left-bloc">
                <h1>ACTUALITÉS</h1>
                <div className='cards'>
                    {
                        actualites.data.map((actu)=> (
                            <div className='card' key={actu.id}>
                                <Link to={route('actu.show', {actu: actu.id})}>
                                    <div className='relative'>
                                        <img src={actu.photo} alt="actualité" />
                                        <div class="filtre-img"></div>
                                    </div>
                                    <h2>{ actu.titre }</h2>
                                    <h3>Le { moment(actu.created_at).locale('fr').format('DD/MM/YYYY') }</h3>
                                    {/* <p className='content'>{ actu.content }</p> */}
                                </Link>
                            </div>
                        ))
                    }
                </div>
                {/* Afficher la pagination avec <Link> */}
                <div className='flex justify-center gap-8'>
                    {actualites.prev_page_url && (
                        <>
                            <ButtonGold
                                href = {actualites.prev_page_url}
                                classNameButton = 'button-next-previous' 
                                content = {
                                    <>
                                        <img src="assets/icones/left.png" alt="next" />
                                    </>
                                }
                            />
                            {/* <Link href={actualites.prev_page_url}>Précédent</Link> */}
                        </>
                    )}
                    {actualites.next_page_url && (
                        <>
                            <ButtonGold
                                href = {actualites.next_page_url}
                                classNameButton = 'button-next-previous' 
                                content = {
                                    <>
                                        <img src="assets/icones/right.png" alt="next" />
                                    </>
                                }
                            />
                        </>
                    )}
                </div>
            </div>
            <div className="right-bloc">
                <ApiReseaux />
            </div>
        </section>


        <Footer />

    </>
  )
}


