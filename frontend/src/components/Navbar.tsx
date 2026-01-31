import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Initialize from localStorage or system preference
        const saved = localStorage.getItem('theme');
        if (saved) return saved === 'dark';
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    const toggleTheme = () => setIsDarkMode(!isDarkMode);

    return (
        <nav className="glass-morphism" style={{ padding: '0.75rem 0', position: 'sticky', top: 0, zIndex: 100 }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 700, fontSize: '1.5rem', color: 'var(--primary)' }}>
                    <div style={{ background: 'white', padding: '2px', borderRadius: '8px', display: 'flex', border: '1px solid var(--border-color)', overflow: 'hidden' }}>
                        <img src="/logo.png" alt="AgriSmart Logo" style={{ height: '40px', width: 'auto', objectFit: 'contain' }} />
                    </div>
                    <span style={{ letterSpacing: '-0.02em', color: 'var(--text-main)' }}>Agri<span style={{ color: 'var(--secondary)' }}>Smart</span></span>
                </Link>

                {/* Desktop Menu */}
                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-menu">
                    <Link to="/" style={{ fontWeight: 500, fontSize: '0.95rem', color: 'var(--text-main)' }}>Home</Link>
                    <Link to="/services" style={{ fontWeight: 500, color: 'var(--gray)', fontSize: '0.95rem' }}>Market Prices</Link>

                    {/* Theme Toggle Button */}
                    <button
                        onClick={toggleTheme}
                        style={{
                            background: 'var(--input-bg)',
                            border: '1px solid var(--border-color)',
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            color: 'var(--primary)',
                            transition: 'all 0.3s ease'
                        }}
                        title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                    >
                        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    <Link to="/dashboard" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}>Get Recommendation</Link>
                </div>

                {/* Mobile Icons Container */}
                <div style={{ display: 'none', gap: '1rem', alignItems: 'center' }} className="mobile-actions">
                    <button
                        onClick={toggleTheme}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-main)' }}
                    >
                        {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
                    </button>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-main)' }}
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: 'var(--card-bg)', padding: '2rem', boxShadow: 'var(--shadow-lg)', display: 'flex', flexDirection: 'column', gap: '1.5rem', borderBottom: '1px solid var(--border-color)' }}>
                    <Link to="/" onClick={() => setIsMenuOpen(false)} style={{ fontWeight: 600, color: 'var(--text-main)' }}>Home</Link>
                    <Link to="/services" onClick={() => setIsMenuOpen(false)} style={{ fontWeight: 600, color: 'var(--text-main)' }}>Market Prices</Link>
                    <Link to="/dashboard" onClick={() => setIsMenuOpen(false)} className="btn btn-primary">Get Recommendation</Link>
                </div>
            )}

            <style>{`
                @media (max-width: 768px) {
                    .mobile-actions {
                        display: flex !important;
                    }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
