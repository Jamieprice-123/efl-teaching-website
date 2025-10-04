// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DarkModeProvider } from './context/DarkModeContext';
import { AdminProvider } from './context/AdminContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Testimonials from './pages/Testimonials';
import TeachingMaterials from './pages/TeachingMaterials';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
    return (
        <AdminProvider>
            <DarkModeProvider>
                <Router>
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