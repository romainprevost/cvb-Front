import React from 'react'
import Footer from '@/Layouts/Footer'
import Header from '@/Layouts/Header'
import moment from 'moment'
import '../../../sass/actualites.scss'  


export default function show({ actu, auth }) {
  return (
    <>
        {/* <Head title="Actualités" /> */}

        <Header auth={auth}/>

        <section>
            <article>
            <h1>{ actu.titre }</h1>
                <div className='card-actu'>
                    <div className='relative'>
                        <h3>Par { actu.auteur } | Le { moment(actu.created_at).format('DD/MM/YYYY') }</h3> {/* "moment" permet de convertir la date au format demandé */}
                        <img src={actu.photo} alt="actu" />
                        <div class="filtre-img"></div>
                    </div>
                    <p className='article-content'>{ actu.content }</p>
                </div>
            </article>
        </section>

        <Footer />

    </>
  )
}
