import React from 'react';

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
    return (
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 text-center md:text-left group">
            <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-full text-cyan-500 dark:text-cyan-400 transition-all duration-300 ease-in-out group-hover:bg-cyan-500 dark:group-hover:bg-cyan-400 group-hover:text-white">
                {icon}
            </div>
            <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;