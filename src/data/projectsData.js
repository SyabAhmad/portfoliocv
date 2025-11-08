const projects = [
  {
    title: "DocxBox",
    duration: "2025",
    description:
      "A privacy-first Android document manager that implements enterprise-grade security without compromising user experience. DocxBox encrypts every file end-to-end before storage, enables passwordless authentication via Google, and automatically backs up encrypted documents to Google Drive — all while working seamlessly offline. Built as a systems-level demonstration that strong security and intuitive UX can coexist.",
    keyFeatures:
      "End-to-End Encryption · Passwordless OAuth 2.0 Auth · Encrypted Cloud Backup · Offline-First Sync · Secure File Sharing · OWASP-Compliant Design",
    techStack:
      "Kotlin, Jetpack Compose, Firebase Authentication, Room Database (Encrypted Blobs), Google Drive API, Android Security Library",
    skills: "Mobile Development, Security, Android",
    category: "Mobile App Development",
  },
  {
    title: "Colors",
    duration: "2024",
    description:
      "A VS Code extension that generates beautiful, professional color palettes as CSS variables instantly. It provides both a human-facing UI and an MCP-style JSON-RPC tool for AI clients to create semantic color palettes with tonal scales. Perfect for developers, designers, and AI tools like Copilot, it outputs clean CSS variables for primary, secondary, accent, neutral, success, warning, and danger colors.",
    keyFeatures:
      "Palette Generation · CSS Variables Export · MCP Integration · Accessibility Metadata · AI Tool Support",
    techStack:
      "TypeScript, VS Code Extension API, MCP (Model Context Protocol), JSON-RPC",
    skills: "TypeScript, Extension Development, AI Integration",
    category: "Developer Tools",
    githubUrl: "https://github.com/SyabAhmad/colors",
  },
  {
    title: "Laboratory Management System",
    duration: "Sep 2025 – Nov 2025",
    description:
      "Developed a Laboratory Management System—a full-featured web application built with Laravel 8, MySQL, and Bootstrap—to streamline operations for diagnostic centers. The system supports patient and employee management, lab test configuration, billing & payments, inventory tracking, HL7 instrument integration, and a patient portal for report access. Implemented using modern PHP practices, server-side DataTables, mPDF for report generation, and Twilio for SMS notifications, the platform enhances efficiency, accuracy, and accessibility in laboratory workflows.",
    keyFeatures:
      "Patient Management · Employee Management · Lab Test Configuration · Billing & Payments · Inventory Tracking · HL7 Integration · Patient Portal",
    techStack: "Laravel 8, MySQL, Bootstrap, PHP, DataTables, mPDF, Twilio",
    skills: "PHP, Laravel, MySQL, Web Development",
    category: "Web Development",
    githubUrl: "https://github.com/SyabAhmad/Laboratory-Management-System",
  },
  {
    title: "Viddeo Enhancing Project",
    duration: "Jun 2025 to Present",
    description:
      "Developing an API for video enhancement system using REALESRGAN a Deep Learning Model. The API will allow users to upload videos, which will then be processed to enhance their quality using advanced AI techniques. The project aims to provide a seamless experience for users looking to improve the visual quality of their video content.",
    keyFeatures:
      "Video Upload · AI-Powered Enhancement · High-Quality Output · User-Friendly Interface",
    techStack: "Python, REALESRGAN, FASTAPI, VidAIo Subnit",
    skills: "Deep Learning, Video Processing, API Development",
    category: "AI & Machine Learning",
    githubUrl: "https://github.com/SyabAhmad/video-enhancing-project",
  },
  {
    title: "Global Craft Hub",
    duration: "August 2025",
    description:
      "Creating a global e-commerce platform for artisans to showcase and sell handmade crafts. The platform will feature user profiles, product listings, and secure payment processing.",
    keyFeatures:
      "User Profiles · Product Listings · Secure Payments · Artisan Community",
    techStack: "React.js, Node.js, Express.js, MongoDB, Stripe",
    skills: "Full Stack Development, E-commerce, React.js",
    category: "Web Development",
    githubUrl: "https://github.com/SyabAhmad/global_craft_hub",
  },
  {
    title: "University Chatbot AI",
    duration: "August 2025",
    description:
      "Developing an AI-powered chatbot for university students to assist with course selection, campus information, and academic resources.",
    keyFeatures:
      "Course Selection · Campus Information · Academic Resources · 24/7 Support",
    techStack: "Python, Groq API, Flask, PostgreSQL",
    skills: "Natural Language Processing, Chatbot Development",
    category: "AI & Machine Learning",
    githubUrl: "https://github.com/SyabAhmad/swat-assist-bot",
  },
  {
    title: "PodcastMaker",
    duration: "March 2025",
    description:
      "Created a generative AI application that transforms written scenarios into full podcast scripts and audio. Inspired by tools like NotebookLM, it leverages LLMs for content generation and integrates TTS for realistic voice output. Designed for creators to generate podcast-ready content in minutes.",
    keyFeatures:
      "Scenario Input · Script Generation · AI Voice Synthesis · Podcast Output",
    techStack: "Python, OpenAI API, gTTS/TTS, Streamlit, LLMs",
    skills: "Generative AI, Text-to-Speech, Prompt Engineering",
    category: "AI & Machine Learning",
  },
  {
    title: "CakeBacker",
    duration: "February 2025",
    description:
      "Built an e-commerce web platform for a bakery business, allowing users to browse, customize, and order cakes online. Developed backend APIs for product management, order handling, and cart functionality. Collaborated with @Mahboob Iqbal on frontend integration and deployment.",
    keyFeatures:
      "Product Listing · Cart System · Order Management · Admin Dashboard",
    techStack: "Flask, PostgreSQL, Python, HTML, CSS, JavaScript",
    skills: "Backend Development, REST APIs, Database Design",
    category: "Web Development",
  },
  {
    title: "CamWatch",
    duration: "April 2025",
    description:
      "Developed an AI-powered school surveillance system using YOLOv8 for real-time weapon detection. Integrated SmolVLM-500 with LLaMA.cpp for generating natural language descriptions from camera feeds. Trained on a custom dataset and optimized for smart monitoring in educational environments.",
    keyFeatures:
      "Weapon Detection · Real-Time Alerts · Image Captioning · Vision-Language Integration",
    techStack: "YOLOv8, Python, OpenCV, SmolVLM-500, LLaMA.cpp, Flask, MySQL",
    skills: "Computer Vision, Object Detection, LLMs",
    category: "AI & Machine Learning",
    githubUrl: "https://github.com/SyabAhmad/CamWatch",
  },
  {
    title: "CVChat",
    duration: "May 2025",
    description:
      "Built an intelligent resume analysis platform using Django and NLP. Enables users to upload CVs and interact with them through a chatbot interface. Leveraged Sentence Transformers for semantic embeddings and deployed the backend on Railway with a Vercel-hosted frontend. (Developed in 12 hours)",
    keyFeatures:
      "CV Parsing · Embedding Generation · Semantic Search · Real-Time Q&A",
    techStack:
      "Django, Python, PostgreSQL, Sentence Transformers, REST API, Railway, Vercel",
    skills: "Python, Django, React.js, PostgreSQL",
    category: "Web Development",
    githubUrl: "https://github.com/SyabAhmad/CvChat",
  },
  {
    title: "Mockster.ai - AI Interview Simulator",
    duration: "Apr 2025",
    description:
      "A smart interview practice platform where users answer AI-generated questions, record video responses, and get detailed feedback. Supports speech-to-text and text-to-speech for a realistic experience with JWT authentication.",
    techStack: "React.js, Python, FastAPI, PostgreSQL, Groq API, TTS, STT, JWT",
    skills: "Python, JavaScript, PostgreSQL, React.js",
    category: "Web Development",
    githubUrl: "https://github.com/SyabAhmad/mocksterai",
  },
  {
    title: "QuickHire.ai – Smarter, Faster Recruitment with AI",
    duration: "Apr 2025",
    description:
      "An AI-powered toolkit built with React.js and Supabase to streamline recruitment workflows. Features tools like AI Email Writer, Cover Letter Generator, Optimized Job Ad Creator, and Video-to-Blog Converter.",
    techStack: "React.js, Supabase, TailwindCSS, PostgreSQL, OAuth 2.0",
    skills: "React.js, Supabase, TailwindCSS, PostgreSQL",
    category: "Web Development",
    githubUrl: "https://github.com/SyabAhmad/quickhire.ai",
  },
  {
    title: "PySnipify ML - Python & ML Snippets Extension",
    duration: "Jan 2025 - Mar 2025",
    description:
      "A Visual Studio Code extension to boost productivity by providing a comprehensive collection of Python and Machine Learning code snippets for tasks including data manipulation, model building, and visualization.",
    techStack: "Visual Studio Code Extension, Python, ML",
    skills: "Python",
    category: "AI & Machine Learning",
    category: "Developer Tools",
    githubUrl: "https://github.com/SyabAhmad/python-quick-snippets",
  },
  {
    title: "DataFit",
    duration: "Oct 2023 - Nov 2024",
    description:
      "A Python package to assist in data preprocessing. Currently under development with an advanced level design.",
    techStack: "Python, NumPy, Pandas, Scikit-Learn",
    skills: "Python, NumPy, Pandas, Scikit-Learn",
    category: "AI & Machine Learning",
    githubUrl: "https://github.com/SyabAhmad/datafit",
  },
  {
    title: "BioPanel",
    duration: "Sep 2024",
    description:
      "A project focused on bioinformatics applications. Provides core functionalities related to data processing and MySQL integration.",
    techStack: "Python, MySQL, OpenCV",
    skills: "Python, MySQL, OpenCV",
    category: "AI & Machine Learning",
  },
  {
    title: "Vid2Txt",
    duration: "Sep 2024",
    description:
      "A Python-based tool that extracts audio from video files, transcribes the audio using Google Speech-to-Text, and classifies the transcription via the Anthropic API.",
    techStack:
      "Python, MoviePy, SpeechRecognition, Google Speech-to-Text, Anthropic API",
    skills: "Python, Generative AI",
    category: "AI & Machine Learning",
  },
  {
    title: "PDFTalk",
    duration: "Jan 2024 - Feb 2024",
    description:
      "A project associated with AI3 that involves a resume analysis or document interaction platform. Utilizes prompt engineering and machine learning techniques.",
    techStack:
      "Python, Generative AI, Prompt Engineering, Pandas, Scikit-Learn",
    skills: "Python, Generative AI, Prompt Engineering",
    category: "AI & Machine Learning",
  },
  {
    title: "Paper AI - Paper Generator App",
    duration: "Jan 2024",
    description:
      "A paper generator app hosted at paperai.streamlit.app that automates the generation of research papers.",
    techStack: "Python",
    skills: "Python",
  },
  {
    title: "autodatap - Automating Data Preprocessing",
    duration: "Aug 2023 - Oct 2023",
    description:
      "ADP simplifies and streamlines data preprocessing for ML and data analysis projects by handling data import, exploration, cleaning, and export.",
    techStack: "Python, Pandas",
    skills: "Python, Pandas",
    githubUrl: "https://github.com/SyabAhmad/datafit",
  },
  {
    title: "Music Streaming App",
    duration: "Jun 2023 - Sep 2023",
    description:
      "A React.js-based music streaming application featuring a homepage with top trending songs and an integrated music player.",
    techStack: "React.js, JavaScript",
    skills: "JavaScript, React.js",
    category: "Web Development",
    category: "Web Development",
  },
  {
    title: "Basic Calculator",
    duration: "Jul 2023",
    description:
      "A simple web application that performs basic arithmetic operations with an intuitive UI. Built with React.js and featuring state management and event handling.",
    techStack: "React.js, CSS, JavaScript",
    skills: "CSS, JavaScript, React.js",
    category: "Web Development",
  },
  {
    title: "Getting Data From API",
    duration: "Jul 2023",
    description:
      "A project developed with LetsGrowMore to retrieve and display data from an API using React.js.",
    techStack: "React.js, JavaScript",
    skills: "JavaScript, React.js",
  },
  {
    title: "Todo List",
    duration: "Jul 2023",
    description:
      "A simple Todo List application demonstrating fundamental React.js techniques.",
    techStack: "React.js",
    skills: "React.js",
    category: "Web Development",
  },
  {
    title: "Code Snippets",
    duration: "Feb 2023 - May 2023",
    description:
      "An Android application featuring a consolidated collection of code examples, with filtering options by programming language.",
    techStack: "Java, XML, Android Design",
    skills: "Java, XML, Android",
    category: "Mobile App Development",
  },
  {
    title: "GPA Calculator",
    duration: "Apr 2023 - May 2023",
    description:
      "A GPA Calculator web application associated with the University of Swat, demonstrating skills in Android design and Java.",
    techStack: "Java, XML, Android Design",
    skills: "Java, XML, Android",
    category: "Mobile App Development",
  },
];

export default projects;
