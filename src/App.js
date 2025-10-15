// App.js
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DarkModeProvider } from './context/DarkModeContext';
import { AdminProvider } from './context/AdminContext';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Pricing from './pages/Pricing/Pricing';
import Testimonials from './pages/Testimonials/Testimonials';
import TeachingMaterials from './pages/TeachingMaterials/TeachingMaterials';
import Availability from './pages/Availability/Availability';
import FAQ from './pages/FAQ/FAQ';
import Contact from './pages/Contact/Contact';
import AdminLogin from './pages/AdminLogin/AdminLogin';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import './App.css';
// etc...
import './App.css';

function App() {
    return (
        <AdminProvider>
            <DarkModeProvider>
                <Router>
                    <ScrollToTop />
                    <div className="App">
                        <Navbar />
                        <main>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/my-classes" element={<Services />} />
                                <Route path="/pricing" element={<Pricing />} />
                                <Route path="/testimonials" element={<Testimonials />} />
                                <Route path="/teaching-materials" element={<TeachingMaterials />} />
                                <Route path="/availability" element={<Availability />} />
                                <Route path="/faq" element={<FAQ />} />
                                <Route path="/contact" element={<Contact />} />
                                <Route path="/admin/login" element={<AdminLogin />} />
                                <Route
                                    path="/admin/dashboard"
                                    element={
                                        <ProtectedRoute>
                                            <AdminDashboard />
                                        </ProtectedRoute>
                                    }
                                />
                            </Routes>
                        </main>
                        <Footer />
                    </div>
                </Router>
            </DarkModeProvider>
        </AdminProvider>
    );
}

export default App;