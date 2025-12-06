import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { designProjects } from "../data/designData";

const DesignProjectDetail = () => {
  const { projectId } = useParams();
  const project = designProjects.find((p) => p.id === projectId);

  if (!project) {
    return <Navigate to="/design/projects" replace />;
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-gray-50 via-purple-50 to-gray-100 dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-8 max-w-5xl">
        {/* Breadcrumb */}
        <div className="mb-8 text-gray-500 dark:text-gray-400">
          <Link
            to="/design"
            className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300"
          >
            Design & Architecture
          </Link>
          <span className="mx-2">/</span>
          <Link
            to="/design/projects"
            className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300"
          >
            Projects
          </Link>
          <span className="mx-2">/</span>
          <span>{project.title}</span>
        </div>

        {/* Project Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {project.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-gray-500 dark:text-gray-400">
              {new Date(project.date).toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </span>
            <div className="flex gap-2">
              {project.software.map((sw) => (
                <span
                  key={sw}
                  className="px-3 py-1 bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300 text-sm font-semibold rounded-full"
                >
                  {sw}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Project Overview */}
        <section className="mb-12 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-lg border border-gray-200 dark:border-gray-700/50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Project Overview
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            {project.description}
          </p>
        </section>

        {/* Specifications */}
        {project.details && (
          <section className="mb-12 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-lg border border-gray-200 dark:border-gray-700/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Specifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(project.details).map(([key, value]) => (
                <div
                  key={key}
                  className="bg-gray-100 dark:bg-gray-800/50 rounded-lg p-4"
                >
                  <strong className="text-cyan-600 dark:text-cyan-400 block mb-1">
                    {key.charAt(0).toUpperCase() + key.slice(1)}:
                  </strong>
                  <span className="text-gray-600 dark:text-gray-300">
                    {Array.isArray(value) ? value.join(", ") : value}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Project Gallery */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Project Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.images && project.images.length > 0 ? (
              project.images.map((image, index) => (
                <div
                  key={index}
                  className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700/50"
                >
                  <img
                    src={image}
                    alt={`${project.title} view ${index + 1}`}
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/800x600?text=Project+View+${
                        index + 1
                      }`;
                    }}
                  />
                </div>
              ))
            ) : (
              <div className="col-span-full rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700/50">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/1200x800?text=Project+View";
                  }}
                />
              </div>
            )}
          </div>
        </section>

        {/* Tags */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Tags
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300 font-semibold rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-center">
          <Link
            to="/design/projects"
            className="inline-block px-8 py-3 bg-gradient-to-r from-gray-200 to-gray-300 text-gray-900 dark:from-gray-700 dark:to-gray-800 dark:text-white font-semibold rounded-lg hover:from-gray-300 hover:to-gray-400 dark:hover:from-gray-600 dark:hover:to-gray-700 transition-all transform hover:scale-105"
          >
            ← Back to All Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DesignProjectDetail;
