import { Sprout, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav style={{ background: 'white', borderBottom: '1px solid #f1f5f9', padding: '1rem 0', position: 'sticky', top: 0, zIndex: 100 }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '1.5rem', color: 'var(--primary-dark)' }}>
                    <div style={{ background: 'var(--primary)', padding: '6px', borderRadius: '8px', color: 'white', display: 'flex' }}>
                        <Sprout size={24} />
                    </div>
                    <span>Agri<span style={{ color: 'var(--secondary)' }}>Smart</span></span>
                </Link>

                {/* Desktop Menu */}
                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-menu">
                    <Link to="/" style={{ fontWeight: 500, fontSize: '0.95rem' }}>Home</Link>
                    <Link to="/about" style={{ fontWeight: 500, color: 'var(--gray)', fontSize: '0.95rem' }}>Technology</Link>
                    <Link to="/services" style={{ fontWeight: 500, color: 'var(--gray)', fontSize: '0.95rem' }}>Market Prices</Link>
                    <Link to="/dashboard" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}>Get Recommendation</Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--dark)' }}
                    className="mobile-menu-btn"
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: 'white', padding: '2rem', boxShadow: 'var(--shadow-lg)', display: 'flex', flexDirection: 'column', gap: '1.5rem', borderBottom: '1px solid #f1f5f9' }}>
                    <Link to="/" onClick={() => setIsMenuOpen(false)} style={{ fontWeight: 600 }}>Home</Link>
                    <Link to="/about" onClick={() => setIsMenuOpen(false)} style={{ fontWeight: 600 }}>Technology</Link>
                    <Link to="/services" onClick={() => setIsMenuOpen(false)} style={{ fontWeight: 600 }}>Market Prices</Link>
                    <Link to="/dashboard" onClick={() => setIsMenuOpen(false)} className="btn btn-primary">Get Recommendation</Link>
                </div>
            )}

            <style>{`
                @media (max-width: 768px) {
                    .mobile-menu-btn {
                        display: block !important;
                    }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
