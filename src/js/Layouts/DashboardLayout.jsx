import { React, useState } from 'react';

import '../../sass/dashboard.scss';

import LogoClub from '@/Components/LogoClub';
import Profile from '@/Components/dashboard/Profile';
import Menu from '@/Components/dashboard/Menu';
import Users from '@/Components/dashboard/Users/Users';
import Actualites from '@/Components/dashboard/Actualites/Actualites';
import Club from '@/Components/dashboard/Club/Club';
import Equipes from '@/Components/dashboard/Equipes/Equipes';
import Partenaires from '@/Components/dashboard/Partenaires/Partenaires';
import Shop from '@/Components/dashboard/Shop/Shop';
import Default from '@/Components/dashboard/Default/Default';


export default function Authenticated({ user, staff, joueurs, actualites, equipesJeunes, equipesSeniors, partenaires, children }) {
    const [selectedMenuItem, setSelectedMenuItem] = useState('default');

    const handleMenuChange = (menuItem) => {
        setSelectedMenuItem(menuItem);
    };

    const renderSection = () => {
        switch (selectedMenuItem) {
            case 'users':
                return <Users 
                    staff={staff}
                    user={user}
                />;
            case 'actualites':
                return <Actualites 
                    actualites={actualites} 
                />;
            case 'club':
                return <Club />;
            case 'equipes':
                return <Equipes 
                    equipesJeunes={equipesJeunes} 
                    equipesSeniors={equipesSeniors} 
                />;
            case 'partenaires':
                return <Partenaires 
                    partenaires={partenaires} 
                />;
            case 'shop':
                return <Shop 
                
                />;
            default:
                return <Default 
                    joueurs={joueurs}
                    equipesJeunes={equipesJeunes} 
                    equipesSeniors={equipesSeniors}
                />;
        }
    };



    return (
        <>
            <div className="main">
                <aside>
                    <div className="logo-dashboard">
                        <LogoClub 
                            filePath="/assets/images/logo-cvb-black.png"
                        />
                    </div>

                    <Menu onMenuChange={handleMenuChange}/>

                </aside>
                
                <article>
                    <nav>
                        <Profile 
                        user={user}
                        />
                    </nav>
                    <section>
                        {/* renvoi le menu item choisi dans le composant menu */}
                        {renderSection()}
                    </section>
                </article>


            </div>
        </>
    );
}
