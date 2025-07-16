


import React from 'react';
import type { Page } from '../App.tsx';
import LogoIcon from './icons/LogoIcon.tsx';
import ServiceCard from './ServiceCard.tsx';
import Footer from './Footer.tsx';
import { serviceData } from '../constants.tsx';

interface HomePageProps {
    onNavigate: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
    return (
        <>
            <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-24 pb-12 bg-slate-900">
                {/* Background glow */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-0"></div>
                
                <LogoIcon className="w-32 h-32 md:w-40 md:h-40 text-white mb-6" />

                <h2 className="font-orbitron text-5xl md:text-6xl font-black text-white uppercase tracking-widest my-4">
                    DYRRHEIM
                </h2>

                <h3 className="font-audiowide uppercase text-2xl md:text-4xl text-white leading-tight mt-4 tracking-widest">
                    Your <span className="text-cyan-400">gateway</span> to business
                </h3>
                <p className="font-audiowide uppercase text-xl md:text-2xl text-slate-300 mt-2 tracking-widest">Your <span className="text-cyan-400 font-medium">PORTAL</span> to knowledge</p>

                <button
                    onClick={() => onNavigate('contact')}
                    className="mt-12 bg-cyan-500 text-white font-bold py-3 px-10 rounded-full text-lg uppercase tracking-wider transition-all duration-300 ease-in-out transform hover:scale-110 hover:bg-cyan-600 shadow-lg hover:shadow-cyan-500/40 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
                >
                    Contact us
                </button>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 gap-y-12 md:gap-x-8">
                        {serviceData.map((service, index) => (
                           <React.Fragment key={service.title}>
                                <ServiceCard
                                    icon={service.icon}
                                    title={service.title}
                                    description={service.description}
                                />
                                {index < serviceData.length - 1 && <hr className="border-slate-200 dark:border-slate-800 my-8 md:my-0"/>}
                           </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default HomePage;