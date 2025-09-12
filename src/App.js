import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import GoogleAnalytics from './components/GoogleAnalytics';
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
import './styles/global.css';

function App() {
  // debug: print imported components so you can see if one is undefined (causes the runtime error)
  // Remove this log after you fix the undefined import.
  // eslint-disable-next-line no-console
  console.log({
    GoogleAnalytics,
    Layout,
    Header,
    Footer,
    HomePage,
    About,
    Projects,
    Research,
    Experience,
    Contact,
    Skills,
    SimpleChatbot,
  });

  return (
    <HelmetProvider>
      <BrowserRouter>
        <GoogleAnalytics />
        <div className="App min-h-screen bg-slate-900"> {/* moved background here */}

          {/* keep the visible app content above the doodles */}
          <div className="min-h-screen flex flex-col relative z-10"> {/* removed bg-slate-900 from here */}
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
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;