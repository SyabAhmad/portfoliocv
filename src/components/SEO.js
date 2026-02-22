import React, { useEffect } from "react";

const SEO = ({
  title = "Syed Syab Ahmad - AI Engineer & Full-Stack Developer",
  description = "AI Engineer and Full-Stack Developer specializing in Machine Learning, Deep Learning, and modern web technologies. Hire a freelance AI expert for your projects. Remote work available worldwide. Building intelligent solutions that transform ideas into reality.",
  keywords = "AI Engineer, Machine Learning Engineer, Python Developer, Full-Stack Developer, Web Developer, Front-End Development, Back-End Development, React.js, JavaScript, HTML, CSS, Tailwind CSS, Bootstrap, API Development, RESTful APIs, SQL, MySQL, PostgreSQL, Data Preprocessing, Feature Extraction, Data Cleaning, Predictive Modeling, Deep Learning, CNN, LSTM, NLP, Computer Vision, Image Classification, Video Processing, OCR, TensorFlow, PyTorch, Model Deployment, Streamlit Apps, Tkinter, Flask, Django, Docker, Firebase, Cloud Deployment, AI Solutions, RAG Pipelines, LLM Integration, LangChain, LlamaIndex, Anthropic API, OpenAI API, Data Science, Data Analytics, Data Visualization, Microsoft Power BI, Agile Development, Git, GitHub, CI/CD, Startups, Project Ownership, Technical Collaboration, Problem-Solving, Scalable ML Systems, Automation, Real-World AI Applications, Python Scripting, Algorithm Development, Intelligent Systems, AI Consulting, Remote Work, Worldwide Remote, Saudi Arabia, KSA, Makkah, Pakistan, Islamabad, Worldwide, Global remote, Work visa sponsorship, Sponsorship available, Visa support, International developer, Freelance AI engineer, Available for hire, Hire developer, Job opportunities, Career growth, Tech skills, Coding expert, Web design, Mobile app development, API development, DevOps engineer, Software architect, Technical lead, Team collaboration, Open source contributor, Innovation, Custom solutions",
  image = "/images/og-image.jpg",
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

    // FORCE update document title immediately
    document.title = fullTitle;

    // Also set it on the next tick to ensure it sticks
    setTimeout(() => {
      document.title = fullTitle;
    }, 0);

    // Initialize Google Analytics
    const initGoogleAnalytics = () => {
      // Check if gtag is already loaded
      if (window.gtag) return;

      // Create and append the gtag script
      const script1 = document.createElement("script");
      script1.async = true;
      script1.src = "https://www.googletagmanager.com/gtag/js?id=G-3P5B85CEWY";
      document.head.appendChild(script1);

      // Wait for the script to load, then configure
      script1.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          window.dataLayer.push(arguments);
        }
        window.gtag = gtag;
        gtag("js", new Date());
        gtag("config", "G-3P5B85CEWY", {
          page_title: fullTitle,
          page_location: url,
        });
      };
    };

    initGoogleAnalytics();

    // Set favicon to your LinkedIn profile image
    const setFavicon = () => {
      // Remove existing favicons
      const existingFavicons = document.querySelectorAll('link[rel*="icon"]');
      existingFavicons.forEach((link) => link.remove());

      // Add new favicon
      const favicon = document.createElement("link");
      favicon.rel = "icon";
      favicon.type = "image/jpeg";
      favicon.href = "/dp.jpeg?v=2";
      document.head.appendChild(favicon);

      // Add apple-touch-icon for iOS
      const appleFavicon = document.createElement("link");
      appleFavicon.rel = "apple-touch-icon";
      appleFavicon.href = "/dp.jpeg?v=2";
      document.head.appendChild(appleFavicon);
    };

    setFavicon();

    // Remove existing meta tags
    const existingMetas = document.querySelectorAll("meta[data-react-seo]");
    existingMetas.forEach((meta) => meta.remove());

    // Remove existing structured data
    const existingStructuredData = document.querySelectorAll(
      "script[data-react-seo]",
    );
    existingStructuredData.forEach((script) => script.remove());

    // Create meta tags
    const metaTags = [
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      { name: "author", content: author },
      { name: "robots", content: "index, follow" },
      { name: "language", content: "English" },
      { name: "revisit-after", content: "7 days" },
      { name: "theme-color", content: "#0891b2" },
      { name: "msapplication-TileColor", content: "#0891b2" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black-translucent",
      },

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
    ];

    // Add meta tags to head
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

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

    // Add structured data
    if (structuredData) {
      const script = document.createElement("script");
      script.setAttribute("type", "application/ld+json");
      script.setAttribute("data-react-seo", "true");
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    } else {
      // Default structured data
      const defaultStructuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Syed Syab Ahmad",
        jobTitle: "AI Engineer & Full-Stack Developer",
        description: description,
        url: url,
        sameAs: [
          "https://www.linkedin.com/in/syedsyab/",
          "https://github.com/syabahmad",
          "https://twitter.com/SyabSays",
          "https://medium.com/@syedsyab",
          "https://www.kaggle.com/syabahmad",
        ],
        alumniOf: "University of Swat",
        knowsAbout: [
          "Artificial Intelligence",
          "Machine Learning",
          "Deep Learning",
          "Full Stack Development",
          "Python",
          "JavaScript",
          "React",
          "TensorFlow",
          "PyTorch",
        ],
        email: "syedsyabahmadshah@gmail.com",
        secondaryEmail: "engr.syab@gmail.com",
        telephone: "+966546211818",
        address: {
          "@type": "PostalAddress",
          addressCountry: "Saudi Arabia",
        },
      };

      const script = document.createElement("script");
      script.setAttribute("type", "application/ld+json");
      script.setAttribute("data-react-seo", "true");
      script.textContent = JSON.stringify(defaultStructuredData);
      document.head.appendChild(script);
    }

    // Track page view for Google Analytics
    if (window.gtag) {
      window.gtag("config", "G-3P5B85CEWY", {
        page_title: fullTitle,
        page_location: url,
      });
    }

    // Cleanup function
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
