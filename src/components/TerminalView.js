import React, { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import basicContext from "../data/basicContext.json";
import projects from "../data/projectsData";
import { designSkills, designProjects } from "../data/designData";
import researchIdeas from "../data/researchData";
import certifications from "../data/certificationsData";
import recommendations from "../data/recommendationsData";

const textColors = [
  "#16a34a", "#0891b2", "#ca8a04", "#db2777", "#9333ea",
  "#dc2626", "#2563eb", "#ea580c", "#059669", "#e11d48",
  "#4f46e5", "#0d9488", "#65a30d", "#d97706", "#7c3aed",
];

const bgColors = [
  "rgba(22,163,74,0.1)", "rgba(8,145,178,0.1)", "rgba(202,138,4,0.1)",
  "rgba(219,39,119,0.1)", "rgba(147,51,234,0.1)", "rgba(220,38,38,0.1)",
  "rgba(37,99,235,0.1)", "rgba(234,88,12,0.1)", "rgba(5,150,105,0.1)",
];

const borderColors = [
  "rgba(22,163,74,0.35)", "rgba(8,145,178,0.35)", "rgba(202,138,4,0.35)",
  "rgba(219,39,119,0.35)", "rgba(147,51,234,0.35)", "rgba(220,38,38,0.35)",
  "rgba(37,99,235,0.35)", "rgba(234,88,12,0.35)", "rgba(5,150,105,0.35)",
];

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function buildWordPool() {
  const w = [];
  w.push(basicContext.personal.name, basicContext.personal.title, basicContext.personal.bio);
  w.push("Python", "JavaScript", "TensorFlow", "React", "Node.js", "PyTorch",
    "AI Engineer", "Full-Stack Developer", "Machine Learning", "Computer Vision",
    "NLP", "YOLOv8", "Transformers", "Django", "FastAPI", "MongoDB", "Docker", "AWS", "Linux", "Git");
  basicContext.projects.featured.forEach(p => { w.push(p.name); w.push(p.description); });
  projects.slice(0, 10).forEach(p => { w.push(p.name || p.title); w.push(p.tech || p.techStack); });
  w.push("CamWatch", "CVChat", "PodcastMaker", "Mockster.ai", "QuickHire.ai",
    "PySnipify ML", "DataFit", "PDFTalk", "Paper AI", "Vid2Txt");
  w.push("Revit", "AutoCAD", "SketchUp", "BIM Modeling", "3D Visualization");
  if (designSkills) Object.values(designSkills).forEach(s => w.push(s.name));
  if (designProjects) designProjects.slice(0, 6).forEach(p => w.push(p.title));
  researchIdeas.slice(0, 8).forEach(r => { w.push(r.title); w.push(r.domain); });
  certifications.slice(0, 10).forEach(c => w.push(c.title));
  recommendations.slice(0, 5).forEach(r => w.push(`"${r.text.substring(0, 80)}..."`));
  w.push("MenteE", "RecruAI", "Founder", "University of Swat", "BS Software Engineering",
    "NEBOSH", "31+ Certifications", "19 Projects", "15 Research Ideas", "8 Recommendations",
    "syedsyabahmadshah@gmail.com", "syab.tech", "Scikit-learn", "OpenCV", "Hugging Face",
    "Streamlit", "PostgreSQL", "Supabase", "TailwindCSS", "Generative AI", "Deep Learning",
    "Data Science", "REST API", "JWT", "OAuth 2.0");
  return w.filter(Boolean);
}

const TerminalView = () => {
  const navigate = useNavigate();
  const pool = useMemo(() => buildWordPool(), []);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const rows = useMemo(() => {
    const lineHeight = 26;
    const rowCount = Math.max(20, Math.ceil(height / lineHeight));
    const result = [];

    for (let i = 0; i < rowCount; i++) {
      const words = [];
      let xPos = 0;
      const duration = 20 + Math.random() * 30;
      const delay = -Math.random() * duration;

      while (xPos < width * 2) {
        const isGoBack = false;
        const text = pick(pool);
        const textColor = pick(textColors);
        const bgColor = pick(bgColors);
        const borderColor = pick(borderColors);
        const fontSize = 12 + Math.floor(Math.random() * 4);
        const wordWidth = text.length * fontSize * 0.62 + 14;

        words.push({
          text,
          textColor,
          bgColor,
          borderColor,
          fontSize,
          isGoBack,
          xPos,
          wordWidth,
        });

        xPos += wordWidth;
      }

      result.push({ words, duration, delay, rowIndex: i });
    }
    return result;
  }, [pool, width, height]);

  return (
    <div style={{ position: "fixed", inset: 0, backgroundColor: "#fff", overflow: "hidden", cursor: "crosshair", zIndex: 9999 }}>
      <style>{`
        @keyframes scrollRow {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
      {rows.map((row) => (
        <div
          key={row.rowIndex}
          style={{
            position: "absolute",
            top: row.rowIndex * 26,
            left: 0,
            height: 26,
            overflow: "hidden",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              whiteSpace: "nowrap",
              animation: `scrollRow ${row.duration}s linear infinite`,
              animationDelay: `${row.delay}s`,
              width: "max-content",
            }}
          >
            {[...row.words, ...row.words].map((item, idx) => {
              const style = {
                display: "inline-block",
                color: item.textColor,
                backgroundColor: item.bgColor,
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: item.borderColor,
                borderRadius: 0,
                fontSize: item.fontSize,
                padding: "2px 6px",
                whiteSpace: "nowrap",
                fontFamily: "monospace",
                fontWeight: item.isGoBack ? 700 : 500,
                userSelect: "none",
                lineHeight: "1.3",
                height: "20px",
                boxSizing: "border-box",
                cursor: item.isGoBack ? "pointer" : "default",
                flexShrink: 0,
              };

              if (item.isGoBack) {
                return (
                  <span
                    key={`${row.rowIndex}-${idx}`}
                    style={style}
                    onClick={() => navigate("/")}
                  >
                    {item.text}
                  </span>
                );
              }

              return <span key={`${row.rowIndex}-${idx}`} style={style}>{item.text}</span>;
            })}
          </div>
        </div>
      ))}
      <button
        onClick={() => navigate("/")}
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 10000,
          background: "linear-gradient(135deg, #16a34a, #059669)",
          color: "#fff",
          border: "none",
          borderRadius: 9999,
          padding: "14px 28px",
          fontSize: 16,
          fontWeight: 700,
          fontFamily: "monospace",
          cursor: "pointer",
          boxShadow: "0 8px 32px rgba(22,163,74,0.4)",
          transition: "all 0.2s ease",
          letterSpacing: 1,
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow = "0 12px 40px rgba(22,163,74,0.5)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 8px 32px rgba(22,163,74,0.4)";
        }}
      >
        ← GO BACK
      </button>
    </div>
  );
};

export default TerminalView;
