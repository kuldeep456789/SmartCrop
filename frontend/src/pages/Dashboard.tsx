import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sprout, Droplets, MapPin, Thermometer, FlaskConical, ArrowRight, Loader2, Info } from 'lucide-react';
import axios from 'axios';

interface RecommendationResult {
    recommended_crops: string[];
    confidence: string;
    analysis: string;
    market_trend: string;
}

const Dashboard = () => {
    const [formData, setFormData] = useState({
        nitrogen: '',
        phosphorus: '',
        potassium: '',
        ph: '',
        rainfall: '',
        city: ''
    });
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<RecommendationResult | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setResult(null);
        try {
            // Calling the backend API
            const response = await axios.post('http://localhost:3000/api/recommend', formData);
            setResult(response.data);
        } catch (error) {
            console.error("Error fetching recommendation", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container" style={{ padding: '3rem 1.5rem' }}>
            <div className="grid-2">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="card glass-morphism"
                >
                    <div style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '0.5rem' }}>Crop Analysis Results</h2>
                        <p style={{ color: 'var(--gray)' }}>Enter soil and climate details to get started.</p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div className="input-group">
                                <label><FlaskConical size={16} style={{ display: 'inline', marginRight: '5px' }} /> Nitrogen (N)</label>
                                <input type="number" name="nitrogen" placeholder="e.g. 50" required value={formData.nitrogen} onChange={handleChange} />
                            </div>
                            <div className="input-group">
                                <label><FlaskConical size={16} style={{ display: 'inline', marginRight: '5px' }} /> Phosphorus (P)</label>
                                <input type="number" name="phosphorus" placeholder="e.g. 50" required value={formData.phosphorus} onChange={handleChange} />
                            </div>
                            <div className="input-group">
                                <label><FlaskConical size={16} style={{ display: 'inline', marginRight: '5px' }} /> Potassium (K)</label>
                                <input type="number" name="potassium" placeholder="e.g. 50" required value={formData.potassium} onChange={handleChange} />
                            </div>
                            <div className="input-group">
                                <label><Thermometer size={16} style={{ display: 'inline', marginRight: '5px' }} /> pH Level</label>
                                <input type="number" step="0.1" name="ph" placeholder="e.g. 6.5" required value={formData.ph} onChange={handleChange} />
                            </div>
                        </div>

                        <div className="input-group">
                            <label><Droplets size={16} style={{ display: 'inline', marginRight: '5px' }} /> Rainfall (mm)</label>
                            <input type="number" name="rainfall" placeholder="e.g. 200" required value={formData.rainfall} onChange={handleChange} />
                        </div>

                        <div className="input-group">
                            <label><MapPin size={16} style={{ display: 'inline', marginRight: '5px' }} /> City / Region</label>
                            <input type="text" name="city" placeholder="e.g. Pune" required value={formData.city} onChange={handleChange} />
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={loading}>
                            {loading ? <><Loader2 className="animate-spin" /> Analyzing...</> : <><Sprout /> Get Recommendation</>}
                        </button>
                    </form>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    {!result && !loading && (
                        <div className="card glass-morphism" style={{ height: '100%', padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                            <img
                                src="/dashboard.jpg"
                                alt="Agriculture Dashboard"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, opacity: 0.6 }}
                            />
                            <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', background: 'linear-gradient(to top, rgba(255,255,255,0.95), rgba(255,255,255,0.4))', padding: '2rem' }}>
                                <div>
                                    <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}><Sprout size={64} /></div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.5rem' }}>Ready for Analysis</h3>
                                    <p style={{ color: 'var(--gray)', maxWidth: '250px', margin: '0 auto' }}>Enter your soil data on the left to get AI-powered crop recommendations.</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {loading && (
                        <div className="card" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                            <div>
                                <Loader2 size={48} className="animate-spin" style={{ color: 'var(--primary)', marginBottom: '1rem' }} />
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Analyzing Soil Data...</h3>
                                <p style={{ color: 'var(--gray)' }}>Connecting to satellite services...</p>
                            </div>
                        </div>
                    )}

                    {result && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {/* Main Recommendation Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="card result-card"
                                style={{ padding: '2rem', position: 'relative', overflow: 'hidden' }}
                            >
                                <img src="/hero-bg-v2.jpg" alt="" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.1, pointerEvents: 'none' }} />
                                <div style={{ position: 'relative', zIndex: 1 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', background: 'rgba(255,255,255,0.2)', width: 'fit-content', padding: '0.25rem 0.75rem', borderRadius: '2rem', fontSize: '0.85rem' }}>
                                        <div style={{ width: '8px', height: '8px', background: '#4ade80', borderRadius: '50%' }}></div> AI Confidence: {result.confidence}
                                    </div>
                                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>{result.recommended_crops[0]}</h2>
                                    <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>Top Recommendation for your soil</p>
                                </div>
                            </motion.div>

                            {/* Separate Nutrients Bar Chart Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="card glass-morphism"
                                style={{ padding: '1.5rem' }}
                            >
                                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <FlaskConical size={18} color="var(--primary)" /> Nutrient Analysis
                                </h3>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', height: '180px', paddingTop: '10px', paddingBottom: '25px', position: 'relative' }}>
                                    {/* Grid Lines */}
                                    <div style={{ position: 'absolute', width: '100%', height: '1px', background: '#e2e8f0', bottom: '25px' }}></div>
                                    <div style={{ position: 'absolute', width: '100%', height: '1px', background: '#f1f5f9', bottom: '75px' }}></div>
                                    <div style={{ position: 'absolute', width: '100%', height: '1px', background: '#f1f5f9', bottom: '125px' }}></div>

                                    {[
                                        { label: 'N', value: formData.nitrogen, max: 140, color: '#10b981', full: 'Nitrogen' },
                                        { label: 'P', value: formData.phosphorus, max: 140, color: '#3b82f6', full: 'Phosphorus' },
                                        { label: 'K', value: formData.potassium, max: 140, color: '#f59e0b', full: 'Potassium' },
                                        { label: 'pH', value: (parseFloat(formData.ph) * 10).toString(), max: 140, color: '#8b5cf6', full: 'pH Level', displayValue: formData.ph }
                                    ].map((item) => (
                                        <div key={item.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, zIndex: 1 }}>
                                            <div style={{ fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--gray)' }}>
                                                {item.displayValue || item.value}
                                            </div>
                                            <div style={{ width: '35px', height: '130px', background: '#f8fafc', borderRadius: '10px', position: 'relative', overflow: 'hidden', border: '1px solid #f1f5f9' }}>
                                                <motion.div
                                                    initial={{ height: 0 }}
                                                    animate={{ height: `${Math.min((parseFloat(item.value) / item.max) * 100, 100)}%` }}
                                                    transition={{ duration: 1, ease: "backOut" }}
                                                    style={{ position: 'absolute', bottom: 0, width: '100%', background: `linear-gradient(to top, ${item.color}, ${item.color}dd)`, borderRadius: '4px' }}
                                                >
                                                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '20%', background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)' }}></div>
                                                </motion.div>
                                            </div>
                                            <div style={{ fontSize: '0.8rem', fontWeight: 700, marginTop: '0.75rem', color: 'var(--dark)' }}>{item.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Detailed Analysis Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="card glass-morphism"
                                style={{ padding: '1.5rem' }}
                            >
                                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                                    <Info size={20} color="var(--primary)" /> <span style={{ fontWeight: 700 }}>Expert Analysis</span>
                                </div>
                                <p style={{ lineHeight: 1.6, color: '#475569', fontSize: '0.95rem' }}>
                                    {result.analysis}
                                </p>
                            </motion.div>

                            {/* Alternatives & CTA Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="card glass-morphism"
                                style={{ padding: '1.5rem' }}
                            >
                                <div style={{ fontSize: '0.85rem', color: 'var(--gray)', marginBottom: '1rem', fontWeight: 700, letterSpacing: '0.05em' }}>SECONDARY RECOMMENDATIONS</div>
                                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                                    {result.recommended_crops.slice(1).map((crop: string) => (
                                        <span key={crop} style={{ background: '#f0fdf4', color: 'var(--primary)', padding: '0.4rem 1rem', borderRadius: '2rem', fontWeight: 600, fontSize: '0.85rem', border: '1px solid #dcfce7' }}>
                                            {crop}
                                        </span>
                                    ))}
                                </div>
                                <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                                    Export Analysis Report <ArrowRight size={18} />
                                </button>
                            </motion.div>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default Dashboard;
