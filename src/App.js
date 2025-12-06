import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GoogleAnalytics from "./components/GoogleAnalytics";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Experience from "./components/Experience";
import Contact from "./components/Contacts";
import Skills from "./components/SKill";
import SimpleChatbot from "./components/SimpleChatbot";
import VoiceAssistant from "./components/VoiceAssistant";
import AnimatedPatterns from "./components/AnimatedPatterns";
import DesignPortfolio from "./components/DesignPortfolio";
import RevitPortfolio from "./components/RevitPortfolio";
import AutoCADPortfolio from "./components/AutoCADPortfolio";
import SketchUpPortfolio from "./components/SketchUpPortfolio";
import AllDesignProjects from "./components/AllDesignProjects";
import DesignProjectDetail from "./components/DesignProjectDetail";
import Gallery from "./components/Gallery";
import MenteE from "./components/MenteE";
import { ThemeProvider } from "./context/ThemeContext";
import "./App.css";
import "./styles/global.css";

function App() {
  // debug: print imported components so you can see if one is undefined (causes the runtime error)
  // Remove this log after you fix the undefined import.
  // eslint-disable-next-line no-console
  console.log({
    GoogleAnalytics,
    Layout,
    Navbar,
    Footer,
    HomePage,
    About,
    Projects,
    Research,
    Experience,
    MenteE,
    Contact,
    Skills,
    SimpleChatbot,
    VoiceAssistant,
    DesignPortfolio,
    RevitPortfolio,
    AutoCADPortfolio,
    SketchUpPortfolio,
    AllDesignProjects,
    DesignProjectDetail,
    Gallery,
  });

  return (
    <ThemeProvider>
      <Router>
        <GoogleAnalytics />
        <div className="App min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
          {" "}
          {/* moved background here */}
          {/* keep the visible app content above the doodles */}
          <div className="min-h-screen flex flex-col relative z-10">
            {" "}
            {/* removed bg-slate-900 from here */}
            <Layout>
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/research" element={<Research />} />
                  <Route path="/experience" element={<Experience />} />
                  <Route path="/mentee" element={<MenteE />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/gallery" element={<Gallery />} />

                  {/* Design & Architecture Routes */}
                  <Route path="/design" element={<DesignPortfolio />} />
                  <Route path="/design/revit" element={<RevitPortfolio />} />
                  <Route
                    path="/design/autocad"
                    element={<AutoCADPortfolio />}
                  />
                  <Route
                    path="/design/sketchup"
                    element={<SketchUpPortfolio />}
                  />
                  <Route
                    path="/design/projects"
                    element={<AllDesignProjects />}
                  />
                  <Route
                    path="/design/project/:projectId"
                    element={<DesignProjectDetail />}
                  />
                </Routes>
              </main>
              <Footer />
            </Layout>
          </div>
          <AnimatedPatterns />
          {/* Global Chatbot - Available on all pages */}
          <SimpleChatbot />
          {/* Voice AI Assistant - Available on all pages */}
          <VoiceAssistant />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
