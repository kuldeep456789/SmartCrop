import { motion } from 'framer-motion';
import { TrendingUp, BarChart3, ShoppingBag, Map, Calendar, Wallet } from 'lucide-react';

const MarketPrices = () => {
    const currentPrices = [
        { crop: "Wheat", price: "₹2,275/q", change: "+2.5%", trend: "up" },
        { crop: "Rice (Basmati)", price: "₹4,150/q", change: "-1.2%", trend: "down" },
        { crop: "Maize", price: "₹2,050/q", change: "+0.8%", trend: "up" },
        { crop: "Soybean", price: "₹4,600/q", change: "+3.1%", trend: "up" },
        { crop: "Cotton", price: "₹7,200/q", change: "-0.5%", trend: "down" },
    ];

    return (
        <div className="container" style={{ padding: '5rem 1.5rem' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ textAlign: 'center', marginBottom: '4rem' }}
            >
                <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--dark)' }}>
                    Market <span style={{ color: 'var(--secondary)' }}>Intelligence</span>
                </h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--gray)', maxWidth: '800px', margin: '0 auto' }}>
                    Real-time mandi prices and demand forecasting to help you sell at the right time.
                </p>
            </motion.div>

            <div className="grid-2">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="card glass-morphism"
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        <TrendingUp style={{ color: 'var(--primary)' }} />
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Live Mandi Prices</h2>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {currentPrices.map((item, idx) => (
                            <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#f8fafc', borderRadius: '0.75rem', border: '1px solid #f1f5f9' }}>
                                <div style={{ fontWeight: 600 }}>{item.crop}</div>
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <span style={{ fontWeight: 700, color: 'var(--dark)' }}>{item.price}</span>
                                    <span style={{ fontSize: '0.85rem', color: item.trend === 'up' ? '#10b981' : '#f43f5e', fontWeight: 700 }}>
                                        {item.change}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="card glass-morphism"
                        style={{ padding: '1.5rem' }}
                    >
                        <BarChart3 style={{ color: 'var(--secondary)', marginBottom: '1rem' }} />
                        <h4 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Demand Forecast</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--gray)' }}>Upcoming season predicts 15% higher demand for oilseeds.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="card glass-morphism"
                        style={{ padding: '1.5rem' }}
                    >
                        <Calendar style={{ color: '#0ea5e9', marginBottom: '1rem' }} />
                        <h4 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Best Time to Sell</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--gray)' }}>Historical data suggests a 10% price peak in March for Wheat.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="card glass-morphism"
                        style={{ padding: '1.5rem' }}
                    >
                        <Map style={{ color: '#8b5cf6', marginBottom: '1rem' }} />
                        <h4 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Nearby Mandis</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--gray)' }}>Find the best rates within 50km of your location.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="card glass-morphism"
                        style={{ padding: '1.5rem' }}
                    >
                        <Wallet style={{ color: '#10b981', marginBottom: '1rem' }} />
                        <h4 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Profit Optimizer</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--gray)' }}>Calculate margins after transportation and labor costs.</p>
                    </motion.div>
                </div>
            </div>

            <section style={{ marginTop: '5rem', textAlign: 'center' }}>
                <div style={{ background: '#f0fdf4', padding: '3rem', borderRadius: '2rem', border: '1px dashed var(--primary)' }}>
                    <ShoppingBag size={48} style={{ color: 'var(--primary)', marginBottom: '1.5rem' }} />
                    <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>Coming Soon: AgriMarketplace</h2>
                    <p style={{ color: 'var(--gray)', maxWidth: '600px', margin: '0 auto', marginBottom: '2rem' }}>
                        Soon you'll be able to buy fertilizers and sell your produce directly through our platform, cutting out unnecessary middlemen.
                    </p>
                    <button className="btn btn-primary">Join Waitlist</button>
                </div>
            </section>
        </div>
    );
};

export default MarketPrices;
