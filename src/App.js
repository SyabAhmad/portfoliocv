import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GoogleAnalytics from "./components/GoogleAnalytics";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contacts";
import Services from "./components/Services";
import SimpleChatbot from "./components/SimpleChatbot";
import AnimatedPatterns from "./components/AnimatedPatterns";
import DesignPortfolio from "./components/DesignPortfolio";
import { RevitPortfolio, AutoCADPortfolio, SketchUpPortfolio } from "./components/ToolPortfolio";
import AllDesignProjects from "./components/AllDesignProjects";
import DesignProjectDetail from "./components/DesignProjectDetail";
import MenteE from "./components/MenteE";
import CallPage from "./components/CallPage";
import { ThemeProvider } from "./context/ThemeContext";
import CursorMoon from "./components/CursorMoon";
import "./App.css";
import "./styles/global.css";

function App() {
  return (
    <ThemeProvider>
      <CursorMoon />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route
            path="*"
            element={
              <div className="min-h-screen bg-stone-50 relative z-10">
                <GoogleAnalytics />
                <Layout>
                  <Navbar />
                  <main className="flex-grow pt-16">
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/services" element={<Services />} />
                      <Route path="/projects" element={<Projects />} />
                      <Route path="/experience" element={<Experience />} />
                      <Route path="/mentee" element={<MenteE />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/call" element={<CallPage />} />
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
                <AnimatedPatterns />
                <SimpleChatbot />
              </div>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
