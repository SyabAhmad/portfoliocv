export const designSkills = {
  revit: {
    name: "Revit",
    category: "Architectural Modeling",
    level: "Intermediate",
    description: "Building Information Modeling (BIM) for architectural design and documentation",
    features: [
      "3D Building Modeling",
      "Family Creation",
      "Construction Documentation",
      "Parametric Design"
    ]
  },
  autocad: {
    name: "AutoCAD",
    category: "2D Drafting",
    level: "Advanced",
    description: "Precision 2D drafting and technical drawing",
    features: [
      "2D Technical Drawings",
      "Floor Plans",
      "Sections & Elevations",
      "Detail Drawings"
    ]
  },
  sketchup: {
    name: "SketchUp",
    category: "3D Visualization",
    level: "Intermediate",
    description: "Quick 3D modeling and visualization for conceptual design",
    features: [
      "Conceptual Modeling",
      "3D Rendering",
      "Site Planning",
      "Quick Visualizations"
    ]
  }
};

export const designProjects = [
  {
    id: "revit-1",
    title: "1 Bedroom House BIM Model",
    category: "revit",
    software: ["Revit"],
    description: "Parametric BIM model for a compact single-bedroom residence with coordinated sheets.",
    image: "/revit/1bedroomhouse%201.png",
    thumbnail: "/revit/1bedroomhouse%201.png",
    date: "2024-06",
    details: {
      area: "900 sq.ft",
      floors: 1,
      deliverables: ["BIM Model", "Floor Plans", "Sections", "Schedules"]
    },
    images: [
      "/revit/1bedroomhouse%201.png",
      "/revit/3floorshouse%201.png",
      "/revit/6x2%20gang%201.png",
      "/revit/family%20panel%201.png"
    ],
    tags: ["BIM", "Residential", "Documentation"]
  },
  {
    id: "autocad-1",
    title: "Residential Drafting Set",
    category: "autocad",
    software: ["AutoCAD"],
    description: "Construction-ready 2D drafting package for multiple residential layouts.",
    image: "/autocad/1300feethome%201.png",
    thumbnail: "/autocad/1300feethome%201.png",
    date: "2024-04",
    details: {
      layouts: ["1300 sq.ft home", "1700 sq.ft home", "400 m² plan"],
      deliverables: ["Floor Plans", "Elevations", "Sections", "Detail Sheets"]
    },
    images: [
      "/autocad/1300feethome%201.png",
      "/autocad/1700feethome%201.png",
      "/autocad/400m%20home%201.png",
      "/autocad/Clinic%201.png",
      "/autocad/callcenter%201.png"
    ],
    tags: ["2D Drafting", "Residential", "Commercial"]
  },
  {
    id: "sketchup-1",
    title: "SketchUp Concept Library",
    category: "sketchup",
    software: ["SketchUp"],
    description: "Rapid visualization set covering furniture, retail, and architectural concept models.",
    image: "/sketchup/house%201.png",
    thumbnail: "/sketchup/house%201.png",
    date: "2024-02",
    details: {
      scope: ["Interior Concepts", "Product Mockups", "Architectural Massing"],
      deliverables: ["3D Models", "Render-Ready Assets", "Presentation Views"]
    },
    images: [
      "/sketchup/house%201.png",
      "/sketchup/clinic%201.png",
      "/sketchup/daraz%201.png",
      "/sketchup/cpu%201.png",
      "/sketchup/screen%201.png",
      "/sketchup/door%201.png"
    ],
    tags: ["3D", "Visualization", "Concept Design"]
  }
  // Add more projects...
];

export const designCertifications = [
  {
    name: "Autodesk Certified Professional: Revit for Architectural Design",
    issuer: "Autodesk",
    date: "2024",
    credentialId: "XXXXX"
  }
  // Add your certifications
];