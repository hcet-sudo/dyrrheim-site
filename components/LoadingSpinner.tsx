import React from 'react';

const LoadingSpinner: React.FC = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-slate-900" role="status" aria-label="Loading page...">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-cyan-400"></div>
        </div>
    );
};

export default LoadingSpinner;
