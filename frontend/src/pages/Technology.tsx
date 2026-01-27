import { motion } from 'framer-motion';
import { Cpu, Globe, Database, Radio, Shield, Zap } from 'lucide-react';

const Technology = () => {
    const techs = [
        {
            icon: <Cpu className="text-primary" size={32} />,
            title: "Advanced AI Models",
            description: "Implementing Random Forest and deep learning architectures to analyze complex soil-climate interactions with high precision."
        },
        {
            icon: <Globe className="text-blue-500" size={32} />,
            title: "Remote Sensing",
            description: "Integration with ISRO Bhuvan and SoilGrids APIs for real-time satellite-based soil moisture and nutrient monitoring."
        },
        {
            icon: <Database className="text-emerald-500" size={32} />,
            title: "Big Data Analytics",
            description: "Processing historical yield data and decadal weather patterns to provide evidence-based crop rotations."
        },
        {
            icon: <Radio className="text-amber-500" size={32} />,
            title: "IoT Connectivity",
            description: "Seamless integration with low-cost soil sensors for real-time tracking of pH, Nitrogen, Phosphorus, and Potassium."
        },
        {
            icon: <Shield className="text-indigo-500" size={32} />,
            title: "Hyper-Local Weather",
            description: "Precision weather forecasting down to the village level to time sowing and irrigation perfectly."
        },
        {
            icon: <Zap className="text-rose-500" size={32} />,
            title: "Edge Computing",
            description: "Optimized models that can run on low-end smartphones with minimal internet connectivity."
        }
    ];

    return (
        <div className="container" style={{ padding: '5rem 1.5rem' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ textAlign: 'center', marginBottom: '4rem' }}
            >
                <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--dark)' }}>
                    The Technology Behind <span style={{ color: 'var(--primary)' }}>AgriSmart</span>
                </h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--gray)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.7 }}>
                    We combine space-age satellite data with ground-level AI to empower farmers with insights previously available only to industrial agricultural giants.
                </p>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                {techs.map((tech, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="card"
                        style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
                    >
                        <div style={{ background: '#f1f5f9', width: 'fit-content', padding: '1rem', borderRadius: '1rem' }}>
                            {tech.icon}
                        </div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{tech.title}</h3>
                        <p style={{ color: 'var(--gray)', lineHeight: 1.6 }}>{tech.description}</p>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                style={{ marginTop: '6rem', padding: '4rem', background: 'var(--dark)', borderRadius: '2rem', color: 'white', overflow: 'hidden', position: 'relative' }}
            >
                <div style={{ position: 'relative', zIndex: 2 }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Our AI Roadmap</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                            <div style={{ minWidth: '100px', fontWeight: 700, color: 'var(--primary)' }}>PHASE 1</div>
                            <div>
                                <h4 style={{ fontWeight: 600, fontSize: '1.2rem' }}>Core Recommendation (Active)</h4>
                                <p style={{ opacity: 0.7 }}>Basic NPK and climate-based crop matching using Random Forest models.</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                            <div style={{ minWidth: '100px', fontWeight: 700, color: 'white', opacity: 0.5 }}>PHASE 2</div>
                            <div>
                                <h4 style={{ fontWeight: 600, fontSize: '1.2rem' }}>Image-Based Diagnosis</h4>
                                <p style={{ opacity: 0.7 }}>CNN-based disease detection from leaf photographs taken via mobile camera.</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                            <div style={{ minWidth: '100px', fontWeight: 700, color: 'white', opacity: 0.5 }}>PHASE 3</div>
                            <div>
                                <h4 style={{ fontWeight: 600, fontSize: '1.2rem' }}>Predictive Market Pricing</h4>
                                <p style={{ opacity: 0.7 }}>LSTM neural networks for predicting mandi price fluctuations across regions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Technology;
