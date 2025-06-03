import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = "Syed Syab Ahmad - AI Engineer & Full-Stack Developer",
  description = "AI Engineer and Full-Stack Developer specializing in Machine Learning, Deep Learning, and modern web technologies. Building intelligent solutions that transform ideas into reality.",
  keywords = "AI Engineer, Machine Learning, Full Stack Developer, React Developer, Python Developer, Deep Learning, TensorFlow, PyTorch, Web Development, Software Engineer, Pakistan",
  image = "/images/og-image.jpg",
  url = "https://syab.link",
  type = "website",
  author = "Syed Syab Ahmad",
  structuredData = null
}) => {
  const siteTitle = "Syed Syab Ahmad";
  const fullTitle = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`;

  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Syed Syab Ahmad",
    "jobTitle": "AI Engineer & Full-Stack Developer",
    "description": description,
    "url": url,
    "sameAs": [
      "https://www.linkedin.com/in/syedsyab/",
      "https://github.com/syabahmad",
      "https://twitter.com/SyabSays",
      "https://medium.com/@syedsyab",
      "https://www.kaggle.com/syabahmad"
    ],
    "alumniOf": "University of Swat",
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "Full Stack Development",
      "Python",
      "JavaScript",
      "React",
      "TensorFlow",
      "PyTorch"
    ],
    "email": "syabblogger@gmail.com",
    "telephone": "+923460561173",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Pakistan"
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Syed Syab Ahmad Portfolio" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:creator" content="@SyabSays" />
      <meta property="twitter:site" content="@SyabSays" />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#0891b2" />
      <meta name="msapplication-TileColor" content="#0891b2" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;