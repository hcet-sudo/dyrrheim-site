
import React, { useState, useEffect } from 'react';
import HomePage from './components/HomePage.tsx';
import ContactPage from './components/ContactPage.tsx';
import MenuIcon from './components/icons/MenuIcon.tsx';
import ArrowLeftIcon from './components/icons/ArrowLeftIcon.tsx';

export type Page = 'home' | 'contact';

const getCurrentPage = (): Page => {
    return window.location.hash === '#/contact' ? 'contact' : 'home';
};

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<Page>(getCurrentPage());
    const [isDisplaying, setIsDisplaying] = useState<boolean>(false);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    // Initial fade-in for the app
    useEffect(() => {
        const timer = setTimeout(() => setIsDisplaying(true), 50);
        return () => clearTimeout(timer);
    }, []);

    // Listen for hash changes to handle routing and animations
    useEffect(() => {
        const handleHashChange = () => {
            const newPage = getCurrentPage();

            // Only navigate if the page is different and not already animating
            if (newPage !== currentPage && !isAnimating) {
                setIsAnimating(true);
                setIsDisplaying(false); // Start fade-out

                // Wait for fade-out to finish, then switch content and fade in
                setTimeout(() => {
                    setCurrentPage(newPage);
                    window.scrollTo(0, 0);

                    // A rAF call ensures the state update has been painted
                    requestAnimationFrame(() => {
                        setIsDisplaying(true); // Start fade-in
                    });

                    // Unlock animation after it's complete
                    setTimeout(() => setIsAnimating(false), 500);
                }, 500); // This duration must match the CSS transition-duration
            }
        };

        window.addEventListener('hashchange', handleHashChange);
        
        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, [currentPage, isAnimating]);

    const handleNavigateHome = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        window.location.hash = '#/';
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage />;
            case 'contact':
                return <ContactPage />;
            default:
                // Fallback to home page
                return <HomePage />;
        }
    };

    return (
        <div className="text-slate-800 dark:text-slate-200 min-h-screen">
            <header className="absolute top-0 left-0 right-0 p-6 md:p-8 flex justify-between items-center z-50">
                <a
                    href="#/"
                    onClick={handleNavigateHome}
                    className={`text-white hover:text-cyan-400 transition-all duration-300 ${currentPage === 'home' ? 'opacity-0 pointer-events-none' : ''}`}
                    aria-label={currentPage === 'contact' ? "Go back to homepage" : "Open menu"}
                    aria-hidden={currentPage === 'home'}
                >
                    {currentPage === 'contact' ? <ArrowLeftIcon className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
                </a>
            </header>
            <main
                className={`transition-opacity duration-500 ease-in-out ${
                    isDisplaying ? 'opacity-100' : 'opacity-0'
                }`}
            >
                {renderPage()}
            </main>
        </div>
    );
};

export default App;