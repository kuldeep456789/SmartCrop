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
                    className="card"
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
                        <div className="card" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', background: '#f8fafc', borderStyle: 'dashed', borderWidth: '2px' }}>
                            <div>
                                <div style={{ color: '#cbd5e1', marginBottom: '1rem' }}><Sprout size={64} /></div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--gray)' }}>No Analysis Yet</h3>
                                <p style={{ color: '#94a3b8' }}>Fill out the form to see AI recommendations.</p>
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
                        <div className="card result-card" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', background: 'rgba(255,255,255,0.2)', width: 'fit-content', padding: '0.25rem 0.75rem', borderRadius: '2rem', fontSize: '0.85rem' }}>
                                <div style={{ width: '8px', height: '8px', background: '#4ade80', borderRadius: '50%' }}></div> AI Confidence: {result.confidence}
                            </div>

                            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>{result.recommended_crops[0]}</h2>
                            <p style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '2rem' }}>
                                Top Recommendation
                            </p>

                            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '1rem', marginBottom: '1.5rem' }}>
                                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                    <Info size={20} /> <span style={{ fontWeight: 600 }}>Analysis</span>
                                </div>
                                <p style={{ lineHeight: 1.5 }}>
                                    {result.analysis}
                                </p>
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <div style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '0.5rem', fontWeight: 600 }}>ALTERNATIVE CROPS</div>
                                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                    {result.recommended_crops.slice(1).map((crop: string) => (
                                        <span key={crop} style={{ background: 'white', color: 'var(--primary)', padding: '0.5rem 1rem', borderRadius: '0.5rem', fontWeight: 600, fontSize: '0.9rem' }}>
                                            {crop}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <button className="btn" style={{ background: 'white', color: 'var(--primary)', width: '100%', justifyContent: 'center' }}>
                                View Detailed Report <ArrowRight size={18} />
                            </button>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default Dashboard;
