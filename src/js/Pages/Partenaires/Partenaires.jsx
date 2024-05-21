import Footer from '@/Layouts/Footer'
import Header from '@/Layouts/Header'
import React from 'react'

import '../../../sass/divers.scss'  


export default function Partenaires( {auth, partnersInstitutionnels, partnersHelp, partnersPrivate} ) {
    return (
    <>
        {/* <Head title='Les partenaires' /> */}

        <Header auth={auth}/>

        <section>
            <h1>Nos partenaires </h1>
            <h2 className='partners-title'>PARTENAIRES INSTITUTIONNELS</h2>
                <div className="partners">
                    {
                        partnersInstitutionnels.map((partner)=> (
                            <a key={partner.id} href={partner.url ? partner.url : null}>
                                <img src={partner.logo} height="100" width="250" alt={partner.nom} />
                            </a>
                            
                        ))
                    }
                </div>

            <h2 className='partners-title'>PARTENAIRES PRIVÉS</h2>
                <div className="partners">
                    {
                        partnersPrivate.map((partner)=> (
                            <a key={partner.id} href={partner.url ? partner.url : null}>
                                <img src={partner.logo} height="100" width="250" alt={partner.nom} />
                            </a>
                            
                        ))
                    }
                </div>

            <h2 className='partners-title'>NOUS ONT AIDÉS</h2>
                <div className="partners">
                    {
                        partnersHelp.map((partner)=> (
                            <a key={partner.id} href={partner.url ? partner.url : null}>
                                <img src={partner.logo} height="100" width="250" alt={partner.nom} />
                            </a>
                            
                        ))
                    }
                </div>
            

        </section>


        <Footer />
    </>
  )
}
