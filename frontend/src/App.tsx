import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Technology from './pages/Technology';
import MarketPrices from './pages/MarketPrices';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<Technology />} />
          <Route path="/services" element={<MarketPrices />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
