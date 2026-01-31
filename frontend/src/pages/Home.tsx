import { motion } from 'framer-motion';
import { ArrowRight, CloudRain, Sun, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section className="hero-section">
            <div className="container hero-container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="hero-content"
                >
                    <h1 style={{ fontSize: '4.5rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', color: 'var(--dark)', letterSpacing: '-0.03em' }}>
                        Harvesting the <br />
                        <span style={{ color: 'var(--primary)', position: 'relative' }}>
                            Future
                            <svg style={{ position: 'absolute', bottom: '-10px', left: 0, width: '100%', height: '12px' }} viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 10C50 2 150 2 198 10" stroke="var(--primary)" strokeWidth="4" strokeLinecap="round" />
                            </svg>
                        </span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--gray)', marginBottom: '2.5rem', maxWidth: '580px', lineHeight: 1.7 }}>
                        Revolutionize your farm with real-time analytics, satellite monitoring, and AI-driven crop intelligence for maximum yield.
                    </p>
                    <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
                        <Link to="/dashboard" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', borderRadius: '100px' }}>
                            Get Started Now <ArrowRight size={20} />
                        </Link>
                        <Link to="/services" className="btn btn-outline glass-morphism" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', borderRadius: '100px' }}>
                            Market Intelligence
                        </Link>
                    </div>

                    <div className="stats-badges" style={{ display: 'flex', gap: '3rem', marginTop: '4rem', padding: '1.5rem', borderRadius: '2rem', background: 'rgba(255,255,255,0.4)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.5)', width: 'fit-content' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <div style={{ padding: '0.75rem', background: '#e0f2fe', borderRadius: '1rem', color: '#0284c7' }}><CloudRain size={24} /></div>
                            <div><div style={{ fontWeight: 700, fontSize: '1.1rem' }}>98%</div><div style={{ fontSize: '0.85rem', color: 'var(--gray)' }}>Accuracy</div></div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <div style={{ padding: '0.75rem', background: '#fef3c7', borderRadius: '1rem', color: '#d97706' }}><Sun size={24} /></div>
                            <div><div style={{ fontWeight: 700, fontSize: '1.1rem' }}>Live</div><div style={{ fontSize: '0.85rem', color: 'var(--gray)' }}>Monitoring</div></div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: 50 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="hero-image-container"
                >
                    <div className="img-bg-blob"></div>
                    <img
                        src="/hero-right.jpg"
                        alt="AI Farming Evolution"
                        className="hero-main-img"
                    />

                    {/* Floating Overlay Card */}
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        style={{ position: 'absolute', bottom: '10%', left: '-10%', zIndex: 2 }}
                    >
                        <div className="card glass-morphism" style={{ padding: '1.25rem', borderLeft: '4px solid var(--primary)', maxWidth: '240px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                                <div style={{ color: 'var(--primary)' }}><Leaf size={20} /></div>
                                <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>Smart Insight</span>
                            </div>
                            <p style={{ fontSize: '0.85rem', color: 'var(--gray)', margin: 0 }}>
                                Soil moisture is optimal for <strong>sustainable wheat harvest</strong>.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Home;
