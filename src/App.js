import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import DesignPortfolio from './components/DesignPortfolio';
import RevitPortfolio from './components/RevitPortfolio';
import AutoCADPortfolio from './components/AutoCADPortfolio';
import SketchUpPortfolio from './components/SketchUpPortfolio';
import AllDesignProjects from './components/AllDesignProjects';
import DesignProjectDetail from './components/DesignProjectDetail';
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
    DesignPortfolio,
    RevitPortfolio,
    AutoCADPortfolio,
    SketchUpPortfolio,
    AllDesignProjects,
    DesignProjectDetail,
  });

  return (
    <Router>
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

                {/* Design & Architecture Routes */}
                <Route path="/design" element={<DesignPortfolio />} />
                <Route path="/design/revit" element={<RevitPortfolio />} />
                <Route path="/design/autocad" element={<AutoCADPortfolio />} />
                <Route path="/design/sketchup" element={<SketchUpPortfolio />} />
                <Route path="/design/projects" element={<AllDesignProjects />} />
                <Route path="/design/project/:projectId" element={<DesignProjectDetail />} />
              </Routes>
            </main>
            <Footer />
          </Layout>
        </div>

        {/* Global Chatbot - Available on all pages */}
        <SimpleChatbot />
      </div>
    </Router>
  );
}

export default App;