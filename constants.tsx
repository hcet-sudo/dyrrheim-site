
import React from 'react';
import BusinessConnectionsIcon from './components/icons/BusinessConnectionsIcon.tsx';
import SpeedIcon from './components/icons/SpeedIcon.tsx';
import LanguageTrainingIcon from './components/icons/LanguageTrainingIcon.tsx';
import TranslationsIcon from './components/icons/TranslationsIcon.tsx';
import TriedAndTrueIcon from './components/icons/TriedAndTrueIcon.tsx';
import NoMiddlemanIcon from './components/icons/NoMiddlemanIcon.tsx';

export const serviceData = [
    {
        icon: <BusinessConnectionsIcon className="w-12 h-12" />,
        title: 'Business connections',
        description: 'We\'re first and foremost a business connector. No matter what you need, we have just the right contact.',
    },
    {
        icon: <SpeedIcon className="w-12 h-12" />,
        title: 'Speed',
        description: 'Don\'t waste time searching — we already have what you\'re looking for.',
    },
    {
        icon: <LanguageTrainingIcon className="w-12 h-12" />,
        title: 'Language training',
        description: 'Our purpose is to bring the world together. This is impossible if people can\'t communicate, which makes language crucial. We select very versatile professional teachers who accommodate to all levels, be it for beginners or advanced learners.',
    },
    {
        icon: <TranslationsIcon className="w-12 h-12" />,
        title: 'Translations',
        description: 'Businesses can also enjoy the benefits of bilingualism without any prior training, with our help. Our translators are perfect for conversations and documents where you care about speed, precision and professionalism.',
    },
    {
        icon: <TriedAndTrueIcon className="w-12 h-12" />,
        title: 'Tried and true',
        description: 'We already provide translations in specialized areas, like Healthcare, Oil & Gas, Defense and Aerospace. Whether it\'s for a manager in need of reliable communication, or a motivated student looking to polish his skills, we\'ve got you covered.',
    },
    {
        icon: <NoMiddlemanIcon className="w-12 h-12" />,
        title: 'No middleman',
        description: 'You can contact us directly. No bureaucracy.',
    },
];