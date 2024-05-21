import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head } from '@inertiajs/react';

import '../../sass/dashboard.scss'

export default function Dashboard({ auth, staff, joueurs,  actualites, equipesJeunes, equipesSeniors, partenaires }) {

    return (
        <>
            <Head title="Dashboard admin" />
            
            <DashboardLayout
                user={auth.user}
                staff={staff}
                joueurs={joueurs}
                actualites={actualites}
                equipesJeunes={equipesJeunes}
                equipesSeniors={equipesSeniors}
                partenaires={partenaires}
            >
            </DashboardLayout>


        
        </>
    );
}
