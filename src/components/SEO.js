import React, { useEffect } from "react";

const SEO = ({
 title = "Syed Syab Ahmad - ML Engineer & Full-Stack Developer | AI, Python, React",
 description = "Syed Syab Ahmad - ML Engineer & Full-Stack Developer. Python, React, Django, FastAPI, Deep Learning, NLP, LLMs. Available for hire worldwide.",
 keywords = "Machine Learning Engineer, AI Engineer, Full Stack Developer, Backend Developer, Python Developer, Hire ML Engineer, Hire AI Developer, Freelance Developer, Remote Developer, React Developer, Django Developer, FastAPI Developer, Deep Learning, NLP, Computer Vision, LLM, Generative AI, MLOps, Python, JavaScript, TensorFlow, PyTorch, Docker, Kubernetes",
 image = "/me.png",
 url = "https://syab.tech",
 type = "website",
 author = "Syed Syab Ahmad",
 structuredData = null,
}) => {
 useEffect(() => {
 const siteTitle = "Syed Syab Ahmad";
 const fullTitle = title.includes(siteTitle)
 ? title
 : `${title} | ${siteTitle}`;

 document.title = fullTitle;
 setTimeout(() => {
 document.title = fullTitle;
 }, 0);

 const initGoogleAnalytics = () => {
 if (window.gtag) return;

 if (process.env.REACT_APP_GA_TRACKING_ID) {
 const script1 = document.createElement("script");
 script1.async = true;
 script1.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GA_TRACKING_ID}`;
 document.head.appendChild(script1);

 script1.onload = () => {
 window.dataLayer = window.dataLayer || [];
 function gtag() {
 window.dataLayer.push(arguments);
 }
 window.gtag = gtag;
 gtag("js", new Date());
 gtag("config", process.env.REACT_APP_GA_TRACKING_ID, {
 page_title: fullTitle,
 page_location: url,
 });
 };
 }
 };

 initGoogleAnalytics();

 const setFavicon = () => {
 const existingFavicons = document.querySelectorAll('link[rel*="icon"]');
 existingFavicons.forEach((link) => link.remove());

 const favicon = document.createElement("link");
 favicon.rel = "icon";
 favicon.type = "image/png";
 favicon.href = "/me.png?v=2";
 document.head.appendChild(favicon);

 const appleFavicon = document.createElement("link");
 appleFavicon.rel = "apple-touch-icon";
 appleFavicon.href = "/me.png?v=2";
 document.head.appendChild(appleFavicon);
 };

 setFavicon();

 const existingMetas = document.querySelectorAll("meta[data-react-seo]");
 existingMetas.forEach((meta) => meta.remove());

 const existingStructuredData = document.querySelectorAll(
 "script[data-react-seo]",
 );
 existingStructuredData.forEach((script) => script.remove());

 const metaTags = [
 { name: "description", content: description },
 { name: "keywords", content: keywords },
 { name: "author", content: author },
 { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
 { name: "googlebot", content: "index, follow" },
 { name: "language", content: "English" },
 { name: "revisit-after", content: "3 days" },
 { name: "theme-color", content: "#000000" },
 { name: "msapplication-TileColor", content: "#000000" },
 { name: "apple-mobile-web-app-capable", content: "yes" },
 { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
 { name: "google-site-verification", content: "p5nxhiwtppyz" },

 // Open Graph
 { property: "og:type", content: type },
 { property: "og:url", content: url },
 { property: "og:title", content: fullTitle },
 { property: "og:description", content: description },
 { property: "og:image", content: image },
 { property: "og:image:width", content: "1200" },
 { property: "og:image:height", content: "630" },
 { property: "og:site_name", content: "Syed Syab Ahmad Portfolio" },
 { property: "og:locale", content: "en_US" },

 // Twitter
 { property: "twitter:card", content: "summary_large_image" },
 { property: "twitter:url", content: url },
 { property: "twitter:title", content: fullTitle },
 { property: "twitter:description", content: description },
 { property: "twitter:image", content: image },
 { property: "twitter:creator", content: "@SyabSays" },
 { property: "twitter:site", content: "@SyabSays" },

 // Additional SEO tags
 { name: "geo.region", content: "SA-01" },
 { name: "geo.placename", content: "Riyadh" },
 { name: "geo.position", content: "24.7136;46.6753" },
 { name: "ICBM", content: "24.7136, 46.6753" },
 { name: "DC.creator", content: author },
 { name: "DC.subject", content: "Machine Learning, AI Engineering, Full Stack Development, Backend Engineering, Deep Learning, NLP, Computer Vision, LLMs, Python, React.js, Django, Flask, FastAPI, MLOps, Data Science" },
 { name: "DC.type", content: "Portfolio" },
 { name: "DC.coverage", content: "Worldwide" },
 ];

 metaTags.forEach((tag) => {
 const meta = document.createElement("meta");
 meta.setAttribute("data-react-seo", "true");

 if (tag.name) {
 meta.setAttribute("name", tag.name);
 }
 if (tag.property) {
 meta.setAttribute("property", tag.property);
 }
 meta.setAttribute("content", tag.content);

 document.head.appendChild(meta);
 });

 let canonical = document.querySelector('link[rel="canonical"]');
 if (!canonical) {
 canonical = document.createElement("link");
 canonical.setAttribute("rel", "canonical");
 document.head.appendChild(canonical);
 }
 canonical.setAttribute("href", url);

 if (structuredData) {
 const script = document.createElement("script");
 script.setAttribute("type", "application/ld+json");
 script.setAttribute("data-react-seo", "true");
 script.textContent = JSON.stringify(structuredData);
 document.head.appendChild(script);
 } else {
 const defaultStructuredData = {
 "@context": "https://schema.org",
 "@graph": [
 {
 "@type": "Person",
 "@id": `${url}#person`,
 name: "Syed Syab Ahmad",
 givenName: "Syed Syab",
 familyName: "Ahmad",
 jobTitle: "Machine Learning Engineer & Full-Stack Developer",
 description: description,
 url: url,
 image: `${url}/me.png`,
 sameAs: [
 "https://www.linkedin.com/in/syedsyab/",
 "https://github.com/SyabAhmad",
 "https://x.com/syabsays",
 "https://www.kaggle.com/syabahmad",
 ],
 alumniOf: {
 "@type": "CollegeOrUniversity",
 name: "University of Swat",
 },
 knowsAbout: [
 "Machine Learning",
 "Artificial Intelligence",
 "Deep Learning",
 "Neural Networks",
 "Full Stack Development",
 "Backend Engineering",
 "Frontend Development",
 "Python Programming",
 "JavaScript",
 "TypeScript",
 "React.js",
 "Next.js",
 "Django",
 "Django REST Framework",
 "Flask",
 "FastAPI",
 "Node.js",
 "Express.js",
 "Natural Language Processing",
 "Computer Vision",
 "LLM Integration",
 "Generative AI",
 "RAG Pipelines",
 "Prompt Engineering",
 "Chatbot Development",
 "REST API Development",
 "GraphQL",
 "Microservices Architecture",
 "PostgreSQL",
 "MySQL",
 "MongoDB",
 "Redis",
 "Docker",
 "Kubernetes",
 "CI/CD",
 "GitHub Actions",
 "Data Science",
 "MLOps",
 "TensorFlow",
 "PyTorch",
 "Scikit-learn",
 "Pandas",
 "NumPy",
 "OpenCV",
 "YOLO",
 "Data Engineering",
 "ETL Pipelines",
 "Cloud Computing",
 "AWS",
 "Azure",
 "Linux",
 "Git",
 "Agile Development",
 "System Design",
 "Software Architecture",
 "API Design",
 "Database Design",
 "Performance Optimization",
 "Test Automation",
 "Security Best Practices",
 ],
 email: "syedsyabahmadshah@gmail.com",
 telephone: "+966546211818",
 address: {
 "@type": "PostalAddress",
 addressLocality: "Riyadh",
 addressCountry: "SA",
 },
 workLocation: {
 "@type": "Place",
 name: "Riyadh, Saudi Arabia",
 },
 availability: "https://schema.org/InStock",
 hiringOrganization: {
 "@type": "Organization",
 name: "Open to Opportunities",
 },
 },
 {
 "@type": "ProfessionalService",
 "@id": `${url}#professional-service`,
 name: "Syed Syab Ahmad - AI & Software Development Services",
 image: `${url}/me.png`,
 url: url,
 description: "Freelance Machine Learning Engineer, AI Engineer, and Full-Stack Developer offering custom AI solutions, backend development, web applications, ML model deployment, LLM integration, and RAG pipelines. Based in Riyadh, Saudi Arabia. Available worldwide for freelance, remote, and contract work.",
 priceRange: "$$",
 address: {
 "@type": "PostalAddress",
 addressLocality: "Riyadh",
 addressCountry: "SA",
 },
 geo: {
 "@type": "GeoCoordinates",
 latitude: 24.7136,
 longitude: 46.6753,
 },
 telephone: "+966546211818",
 areaServed: {
 "@type": "Place",
 name: "Worldwide",
 },
 hasOfferCatalog: {
 "@type": "OfferCatalog",
 name: "Development Services",
 itemListElement: [
 {
 "@type": "Offer",
 itemOffered: {
 "@type": "Service",
 name: "Machine Learning Engineering",
 description: "Custom ML models, deep learning, neural networks, NLP, computer vision, YOLO, image classification, object detection solutions",
 },
 },
 {
 "@type": "Offer",
 itemOffered: {
 "@type": "Service",
 name: "Full-Stack Web Development",
 description: "React.js, Next.js, Django, Flask, FastAPI, Node.js web applications, SPAs, and progressive web apps",
 },
 },
 {
 "@type": "Offer",
 itemOffered: {
 "@type": "Service",
 name: "Backend Engineering",
 description: "REST APIs, GraphQL, microservices, database design (PostgreSQL, MySQL, MongoDB, Redis), cloud deployment, Docker, Kubernetes",
 },
 },
 {
 "@type": "Offer",
 itemOffered: {
 "@type": "Service",
 name: "AI Consulting & LLM Integration",
 description: "AI strategy, LLM integration, RAG pipelines, chatbot development, prompt engineering, generative AI, AI automation",
 },
 },
 {
 "@type": "Offer",
 itemOffered: {
 "@type": "Service",
 name: "MLOps & Model Deployment",
 description: "ML pipeline development, model deployment, CI/CD for ML, TensorFlow/PyTorch deployment, monitoring and scaling",
 },
 },
 {
 "@type": "Offer",
 itemOffered: {
 "@type": "Service",
 name: "Data Engineering & Analytics",
 description: "Data pipelines, ETL processes, data visualization, dashboards, analytics, business intelligence solutions",
 },
 },
 {
 "@type": "Offer",
 itemOffered: {
 "@type": "Service",
 name: "Mobile App Development",
 description: "React Native, Android development with Kotlin/Java, cross-platform mobile applications",
 },
 },
 {
 "@type": "Offer",
 itemOffered: {
 "@type": "Service",
 name: "DevOps & Cloud Infrastructure",
 description: "AWS, Azure, Docker containerization, Kubernetes orchestration, GitHub Actions CI/CD, infrastructure automation",
 },
 },
 ],
 },
 },
 {
 "@type": "WebSite",
 "@id": `${url}#website`,
 url: url,
 name: "Syed Syab Ahmad - Machine Learning Engineer Portfolio",
 description: "Portfolio of Syed Syab Ahmad showcasing machine learning projects, AI solutions, full-stack web development, and backend engineering work.",
 publisher: {
 "@id": `${url}#person`,
 },
 },
 ],
 };

 const script = document.createElement("script");
 script.setAttribute("type", "application/ld+json");
 script.setAttribute("data-react-seo", "true");
 script.textContent = JSON.stringify(defaultStructuredData);
 document.head.appendChild(script);
 }

 if (window.gtag) {
 window.gtag("config", process.env.REACT_APP_GA_TRACKING_ID, {
 page_title: fullTitle,
 page_location: url,
 });
 }

 return () => {
 const metas = document.querySelectorAll("meta[data-react-seo]");
 metas.forEach((meta) => meta.remove());

 const scripts = document.querySelectorAll("script[data-react-seo]");
 scripts.forEach((script) => script.remove());
 };
 }, [title, description, keywords, image, url, type, author, structuredData]);

 return null;
};

export default SEO;
