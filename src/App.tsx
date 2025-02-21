import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { SettingsProvider } from "./context/SettingsContext";
import { EmojiProvider } from './context/EmojiContext';

import LandingPage from './pages/LandingPage';
import PagenotFound from './pages/PagenotFound';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import Dashboard from './pages/Dashboard';
import Music from './components/Music';

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
        if (location.pathname === '/') {
            return <Navbar2 />;
        } else if (location.pathname === '/dashboard' || location.pathname === '/music') {
            return null;
        } else {
            return <Navbar />;
        }
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
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/music" element={<Music />} />
                    <Route path="*" element={<PagenotFound />} />
                </Routes>
            </div>
        </>
    );
}

function App() {
    return (
        <BrowserRouter>
            <SettingsProvider>
                <EmojiProvider>
                    <AppContent />
                </EmojiProvider>
            </SettingsProvider>
        </BrowserRouter>
    );
}

export default App;
