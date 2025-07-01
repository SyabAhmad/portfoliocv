import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import GoogleAnalytics from './components/GoogleAnalytics'; // Add this import
import Layout from './components/Layout';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import About from './components/About';
import Projects from './components/Projects';
import Research from './components/Research';
import Experience from './components/Experience';
import Contact from './components/Contacts';
import Skills from './components/SKill';
import SimpleChatbot from './components/SimpleChatbot';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <GoogleAnalytics /> {/* Add this component */}
        <div className="App min-h-screen flex flex-col bg-slate-900">
          <Layout>
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/research" element={<Research />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/skills" element={<Skills />} />
              </Routes>
            </main>
            <Footer />
          </Layout>
        </div>
        {/* Global Chatbot - Available on all pages */}
        <SimpleChatbot />
      </Router>
    </HelmetProvider>
  );
}

export default App;