import LogoClub from '@/Components/LogoClub';
import '../../sass/dashboard.scss'  


export default function Guest({ children }) {
    return (
        <div className="login-form min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <LogoClub 
                filePath="/assets/images/logo-cvb-black.png"
            />

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
