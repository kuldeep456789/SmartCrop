import { motion } from 'framer-motion';
import { ArrowRight, CloudRain, Sun, Leaf, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="hero-gradient" style={{ minHeight: '90vh' }}>
            <div className="container hero-container" style={{ paddingTop: '5rem', paddingBottom: '5rem', display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)', gap: '4rem', alignItems: 'center' }}>

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="hero-content"
                >
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: '#ecfdf5', color: 'var(--primary)', borderRadius: '2rem', marginBottom: '1.5rem', fontWeight: 600, fontSize: '0.9rem', border: '1px solid #a7f3d0' }}>
                        <Leaf size={14} /> Powered by Advanced AI
                    </div>
                    <h1 style={{ fontSize: '4rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '1.5rem', color: 'var(--dark)', letterSpacing: '-0.02em' }}>
                        Precision Farming <br />
                        <span style={{ color: 'var(--primary)' }}>Start Here</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--gray)', marginBottom: '2.5rem', maxWidth: '540px', lineHeight: 1.7 }}>
                        Leverage regular soil updates, weather forecasts, and AI-driven insights to maximize your harvest potential and ensure sustainable growth.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'inherit' }}>
                        <Link to="/dashboard" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                            Start Analysis <ArrowRight size={20} />
                        </Link>
                        <button className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                            View Market Data
                        </button>
                    </div>

                    <div className="stats-badges" style={{ display: 'flex', gap: '3rem', marginTop: '5rem', borderTop: '1px solid #e2e8f0', paddingTop: '2rem', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <div style={{ padding: '0.75rem', background: '#e0f2fe', borderRadius: '50%', color: '#0284c7' }}><CloudRain size={24} /></div>
                            <div><div style={{ fontWeight: 700, fontSize: '1.1rem' }}>98%</div><div style={{ fontSize: '0.9rem', color: 'var(--gray)' }}>Forecast Accuracy</div></div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <div style={{ padding: '0.75rem', background: '#fef3c7', borderRadius: '50%', color: '#d97706' }}><Sun size={24} /></div>
                            <div><div style={{ fontWeight: 700, fontSize: '1.1rem' }}>Real-time</div><div style={{ fontSize: '0.9rem', color: 'var(--gray)' }}>Soil Monitoring</div></div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <div style={{ padding: '0.75rem', background: '#dcfce7', borderRadius: '50%', color: '#16a34a' }}><Activity size={24} /></div>
                            <div><div style={{ fontWeight: 700, fontSize: '1.1rem' }}>+40%</div><div style={{ fontSize: '0.9rem', color: 'var(--gray)' }}>Yield Increase</div></div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{ position: 'relative' }}
                >
                    <div className="card glass-panel" style={{ width: '320px', padding: '1.5rem', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyItems: 'space-between', marginBottom: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ padding: '0.5rem', background: '#dcfce7', borderRadius: '0.5rem', color: 'var(--primary)' }}><Leaf /></div>
                                <div>
                                    <div style={{ fontWeight: 600 }}>Recommendation</div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--gray)' }}>Just now</div>
                                </div>
                            </div>
                        </div>
                        <div style={{ fontSize: '0.95rem', color: '#334155', lineHeight: 1.5 }}>
                            Nitrogen levels are optimal. <strong>Wheat</strong> is the best crop choice for this season to maximize yield.
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
