import React, { useState, useCallback, useEffect } from 'react';
import HomePage from './components/HomePage';
import ContactPage from './components/ContactPage';
import MenuIcon from './components/icons/MenuIcon';

export type Page = 'home' | 'contact';

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<Page>('home');
    const [isDisplaying, setIsDisplaying] = useState<boolean>(false);

    useEffect(() => {
        // Initial fade-in for the whole app
        setIsDisplaying(true);
    }, []);

    const navigateTo = useCallback((page: Page) => {
        if (page === currentPage) return;

        setIsDisplaying(false); // Start fade-out
        setTimeout(() => {
            setCurrentPage(page);
            window.scrollTo(0, 0); // Scroll to top on page change
            setIsDisplaying(true); // Start fade-in for new page
        }, 500); // This duration should match the transition duration
    }, [currentPage]);

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage onNavigate={navigateTo} />;
            case 'contact':
                return <ContactPage />;
            default:
                return <HomePage onNavigate={navigateTo} />;
        }
    };

    return (
        <div className="text-slate-800 dark:text-slate-200 min-h-screen">
            <header className="absolute top-0 left-0 right-0 p-6 md:p-8 flex justify-between items-center z-50">
                <button
                    onClick={() => navigateTo('home')}
                    className="text-white hover:text-cyan-400 transition-colors duration-300"
                    aria-label="Go to homepage"
                >
                    <MenuIcon className="w-8 h-8" />
                </button>
            </header>
            <main className={`transition-opacity duration-500 ease-in-out ${isDisplaying ? 'opacity-100' : 'opacity-0'}`}>
                {renderPage()}
            </main>
        </div>
    );
};

export default App;