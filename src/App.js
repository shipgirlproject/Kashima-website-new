import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import PagenotFound from './pages/PagenotFound';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';


function ScrollToTop() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return null;
}

function AppContent() {
    const location = useLocation();

    const renderNavbar = () => {
        if (location.pathname === '*') {
            return <Navbar2 />;
        }
        return <Navbar />;
    };

    return (
        <>
            {/* Universal scroll reset */}
            <ScrollToTop />

            {renderNavbar()}
            <br />
            <br />
            <div className="pages">
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="*" element={<PagenotFound />} />
                </Routes>
            </div>
        </>
    );
}

function App() {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
}

export default App;
