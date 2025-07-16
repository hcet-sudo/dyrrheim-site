import React, { useState, useCallback, useEffect } from 'react';
import HomePage from './components/HomePage.tsx';
import ContactPage from './components/ContactPage.tsx';
import MenuIcon from './components/icons/MenuIcon.tsx';
import ArrowLeftIcon from './components/icons/ArrowLeftIcon.tsx';

export type Page = 'home' | 'contact';

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<Page>('home');
    const [isDisplaying, setIsDisplaying] = useState<boolean>(false);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    useEffect(() => {
        // Initial fade-in for the whole app, with a small delay
        const timer = setTimeout(() => setIsDisplaying(true), 50);
        return () => clearTimeout(timer);
    }, []);

    const navigateTo = useCallback((page: Page) => {
        if (page === currentPage || isAnimating) return;

        setIsAnimating(true);
        setIsDisplaying(false); // Start fade-out for the current page

        setTimeout(() => {
            setCurrentPage(page);
            window.scrollTo(0, 0); // Scroll to top on page change
            
            // We need a tiny delay to allow React to render the component with its "out" classes
            // before we apply the "in" classes to trigger the animation.
            requestAnimationFrame(() => {
                setIsDisplaying(true); // Start fade-in for new page
            });
            
            // Unlock navigation after the transition is complete
            setTimeout(() => setIsAnimating(false), 500);
            
        }, 500); // This duration should match the transition duration
    }, [currentPage, isAnimating]);

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
                    className={`text-white hover:text-cyan-400 transition-colors duration-300 ${currentPage === 'home' ? 'opacity-0 pointer-events-none' : ''}`}
                    aria-label={currentPage === 'contact' ? "Go back to homepage" : "Open menu"}
                    aria-hidden={currentPage === 'home'}
                >
                    {currentPage === 'contact' ? <ArrowLeftIcon className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
                </button>
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