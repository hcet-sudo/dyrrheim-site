import React from 'react';
import LogoIcon from './icons/LogoIcon';
import WhatsappIcon from './icons/WhatsappIcon';

const ContactPage: React.FC = () => {
    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center text-center p-4 overflow-hidden bg-slate-900">
             {/* Background glows */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-fuchsia-500/20 rounded-full blur-3xl -z-0"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl -z-0"></div>
            
            <div className="relative z-10 flex flex-col items-center pt-16">
                <LogoIcon className="w-24 h-24 md:w-28 md:h-28 text-white mb-6" />
                
                <h2 className="font-orbitron text-5xl md:text-6xl font-black text-white uppercase tracking-widest">DYRRHEIM</h2>
                <p className="font-orbitron mt-4 text-2xl md:text-3xl font-bold bg-gradient-to-r from-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
                    The sky is the limit
                </p>

                <div className="max-w-xl mx-auto mt-8 text-slate-300 text-base md:text-lg space-y-4 leading-relaxed">
                    <p>
                        In today's global marketplace, strategic connections are paramount. We specialize in accelerating your business development by providing direct access to key decision-makers, effectively eliminating the delays of traditional networking and bureaucratic hurdles. For clients with established networks, we also offer expert language training and translation services to ensure every communication is precise, professional, and impactful.
                    </p>
                    <p>
                        Partner with us to unlock new opportunities and foster significant growth.
                    </p>
                </div>

                <a
                    href="https://wa.me/447915607729"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-12 inline-flex items-center gap-3 bg-green-500 text-white font-bold py-4 px-8 rounded-full text-lg uppercase tracking-wider transition-all duration-300 ease-in-out hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-500/50"
                >
                    <WhatsappIcon className="w-7 h-7" />
                    <span>Whatsapp</span>
                </a>
            </div>
        </div>
    );
};

export default ContactPage;