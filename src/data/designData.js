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
    id: "revit-1bedroom",
    title: "Single Bedroom Residence BIM",
    category: "revit",
    software: ["Revit"],
    description: "Compact residential BIM model delivering coordinated sheets and quantity schedules.",
    image: "/revit/1bedroomhouse%201.png",
    thumbnail: "/revit/1bedroomhouse%201.png",
    date: "2025-06",
    details: {
      area: "900 sq.ft",
      floors: 1,
      deliverables: ["BIM Model", "Floor Plan", "MEP Schedule"]
    },
    images: ["/revit/1bedroomhouse%201.png"],
    tags: ["Residential", "BIM", "Documentation"]
  },
  {
    id: "revit-3floors",
    title: "Three-Storey Mixed Use Model",
    category: "revit",
    software: ["Revit"],
    description: "Parametric building model for a mid-rise structure with coordinated sections.",
    image: "/revit/3floorshouse%201.png",
    thumbnail: "/revit/3floorshouse%201.png",
    date: "2025-05",
    details: {
      area: "6,800 sq.ft",
      floors: 3,
      deliverables: ["BIM Model", "Section Set", "Elevation Sheets"]
    },
    images: ["/revit/3floorshouse%201.png"],
    tags: ["Mixed Use", "Visualization", "Construction Docs"]
  },
  {
    id: "revit-switchgear",
    title: "Industrial Switchgear Family",
    category: "revit",
    software: ["Revit"],
    description: "Custom parametric family for electrical switchgear coordination.",
    image: "/revit/6x2%20gang%201.png",
    thumbnail: "/revit/6x2%20gang%201.png",
    date: "2025-04",
    details: {
      familyType: "Electrical Panel",
      connectors: 12,
      deliverables: ["Family File", "Type Catalog"]
    },
    images: ["/revit/6x2%20gang%201.png"],
    tags: ["Family Creation", "Industrial", "MEP"]
  },
  {
    id: "revit-panel",
    title: "Curtain Wall Panel Family",
    category: "revit",
    software: ["Revit"],
    description: "Configurable curtain panel family supporting modular façade systems.",
    image: "/revit/family%20panel%201.png",
    thumbnail: "/revit/family%20panel%201.png",
    date: "2025-03",
    details: {
      panelMaterial: "Aluminum Composite",
      moduleWidth: "1.2m",
      deliverables: ["Family File", "Detail Sheet"]
    },
    images: ["/revit/family%20panel%201.png"],
    tags: ["Façade", "Parametric", "Fabrication"]
  },
  {
    id: "autocad-1300",
    title: "1300 sq.ft Residence Drafting",
    category: "autocad",
    software: ["AutoCAD"],
    description: "Construction-ready drawing set for a compact suburban home.",
    image: "/autocad/1300feethome%201.png",
    thumbnail: "/autocad/1300feethome%201.png",
    date: "2025-06",
    details: {
      layout: "3 Bed, 2 Bath",
      sheetCount: 6,
      deliverables: ["Plans", "Sections", "Door/Window Schedule"]
    },
    images: ["/autocad/1300feethome%201.png"],
    tags: ["Residential", "Drafting", "Permit Set"]
  },
  {
    id: "autocad-1700",
    title: "1700 sq.ft Modern Home",
    category: "autocad",
    software: ["AutoCAD"],
    description: "Detailed drafting package featuring open-plan living and garage layout.",
    image: "/autocad/1700feethome%201.png",
    thumbnail: "/autocad/1700feethome%201.png",
    date: "2025-05",
    details: {
      layout: "4 Bed, 3 Bath",
      sheetCount: 8,
      deliverables: ["Plans", "Elevations", "Roof Layout"]
    },
    images: ["/autocad/1700feethome%201.png"],
    tags: ["Residential", "Detailing", "Construction Docs"]
  },
  {
    id: "autocad-400m",
    title: "400 m² Estate Planning",
    category: "autocad",
    software: ["AutoCAD"],
    description: "Site-responsive plan for a duplex property with landscape zones.",
    image: "/autocad/400m%20home%201.png",
    thumbnail: "/autocad/400m%20home%201.png",
    date: "2025-04",
    details: {
      lotSize: "400 m²",
      levels: 2,
      deliverables: ["Site Plan", "Floor Plans", "Landscape Layout"]
    },
    images: ["/autocad/400m%20home%201.png"],
    tags: ["Site Planning", "Landscape", "Drafting"]
  },
  {
    id: "autocad-clinic",
    title: "Outpatient Clinic Layout",
    category: "autocad",
    software: ["AutoCAD"],
    description: "Healthcare floor plan optimized for patient circulation and compliance.",
    image: "/autocad/Clinic%201.png",
    thumbnail: "/autocad/Clinic%201.png",
    date: "2025-03",
    details: {
      departments: ["Reception", "Consultation", "Pharmacy"],
      deliverables: ["Floor Plan", "Room Schedule", "Fire Escape Plan"]
    },
    images: ["/autocad/Clinic%201.png"],
    tags: ["Healthcare", "Space Planning", "Compliance"]
  },
  {
    id: "autocad-callcenter",
    title: "Call Center Fit-Out",
    category: "autocad",
    software: ["AutoCAD"],
    description: "Workspace layout balancing workstation density with amenity zones.",
    image: "/autocad/callcenter%201.png",
    thumbnail: "/autocad/callcenter%201.png",
    date: "2025-02",
    details: {
      capacity: "120 Seats",
      zones: ["Operations", "Meeting Rooms", "Breakout"],
      deliverables: ["Fit-Out Plan", "Furniture Layout", "Reflected Ceiling Plan"]
    },
    images: ["/autocad/callcenter%201.png"],
    tags: ["Commercial", "Interior", "Space Planning"]
  },
  {
    id: "sketchup-house",
    title: "Modern Villa Visualization",
    category: "sketchup",
    software: ["SketchUp"],
    description: "Conceptual 3D model for a modern residence with layered terraces.",
    image: "/sketchup/house%201.png",
    thumbnail: "/sketchup/house%201.png",
    date: "2025-06",
    details: {
      focus: ["Exterior Massing", "Material Study"],
      deliverables: ["3D Model", "Presentation Views"]
    },
    images: ["/sketchup/house%201.png"],
    tags: ["Residential", "Rendering", "Concept Design"]
  },
  {
    id: "sketchup-clinic",
    title: "Dental Clinic Interior Concept",
    category: "sketchup",
    software: ["SketchUp"],
    description: "Interior visualization emphasizing patient comfort and sterile zones.",
    image: "/sketchup/clinic%201.png",
    thumbnail: "/sketchup/clinic%201.png",
    date: "2025-05",
    details: {
      rooms: ["Reception", "Procedural Bays", "Sterilization"],
      deliverables: ["3D Model", "Interior Views"]
    },
    images: ["/sketchup/clinic%201.png"],
    tags: ["Healthcare", "Interior", "Visualization"]
  },
  {
    id: "sketchup-daraz",
    title: "Retail Pop-Up Store Concept",
    category: "sketchup",
    software: ["SketchUp"],
    description: "Branded pop-up experience with modular shelving and signage.",
    image: "/sketchup/daraz%201.png",
    thumbnail: "/sketchup/daraz%201.png",
    date: "2025-04",
    details: {
      brand: "Daraz",
      focus: ["Display Systems", "Lighting Concept"],
      deliverables: ["3D Concept", "Material Palette"]
    },
    images: ["/sketchup/daraz%201.png"],
    tags: ["Retail", "Branding", "Experience Design"]
  },
  {
    id: "sketchup-cpu",
    title: "Desktop Workstation Mockup",
    category: "sketchup",
    software: ["SketchUp"],
    description: "Product visualization for a custom CPU enclosure and accessory kit.",
    image: "/sketchup/cpu%201.png",
    thumbnail: "/sketchup/cpu%201.png",
    date: "2025-03",
    details: {
      featureHighlights: ["Cable Management", "Ventilation"],
      deliverables: ["Exploded Views", "3D Assets"]
    },
    images: ["/sketchup/cpu%201.png"],
    tags: ["Product Design", "Industrial", "Visualization"]
  },
  {
    id: "sketchup-screen",
    title: "Digital Kiosk Display",
    category: "sketchup",
    software: ["SketchUp"],
    description: "Slim kiosk concept with ergonomic angles for retail deployments.",
    image: "/sketchup/screen%201.png",
    thumbnail: "/sketchup/screen%201.png",
    date: "2025-03",
    details: {
      height: "1.7m",
      useCases: ["Wayfinding", "Interactive Ads"],
      deliverables: ["3D Concept", "Detail Sheet"]
    },
    images: ["/sketchup/screen%201.png"],
    tags: ["Retail Tech", "Product", "Prototyping"]
  },
  {
    id: "sketchup-door",
    title: "Architectural Door Assembly",
    category: "sketchup",
    software: ["SketchUp"],
    description: "Parametric door concept highlighting material combinations and hardware.",
    image: "/sketchup/door%201.png",
    thumbnail: "/sketchup/door%201.png",
    date: "2025-02",
    details: {
      materials: ["Oak Veneer", "Matte Steel"],
      deliverables: ["3D Model", "Material Study"]
    },
    images: ["/sketchup/door%201.png"],
    tags: ["Detailing", "Materiality", "Joinery"]
  }
];

export const designCertifications = [
  {
    name: "AutoCAD Essentials",
    issuer: "SourceCAD",
    date: "Feb 2025",
    credentialId: "4DB6-7163-9D88-6770",
    credentialUrl: "#",
    focus: "AutoCAD Architecture",
    // image: "https://www.linkedin.com/in/syedsyab/details/certifications/1740577784824/single-media-viewer?type=LINK&profileId=ACoAADKFfcoBV3cFR7AcItpE9fIR74ig40uVgfQ&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BosDrLPvXSM27CTPpSECwVQ%3D%3D"
  },
  {
    name: "Design App",
    issuer: "Great Learning",
    date: "Jun 2023",
    credentialId: "ZGPKLMWU",
    credentialUrl: "#",
    focus: "Android Design, Web Design",
    // image: "/certifications/designapp.png"
  }
];