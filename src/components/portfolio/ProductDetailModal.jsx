import React, { useEffect } from "react";
import { createPortal } from "react-dom";

export default function ProjectDetailModal({ project, onClose }) {
  if (!project) return null;

  // Close with ESC
  useEffect(() => {
    const handleKeyDown = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      {/* Modal container */}
      <div
        className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl w-full max-w-4xl overflow-hidden animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top accent line */}
        <div className="h-1 w-full bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-teal-500 text-2xl font-bold transition"
        >
          ✕
        </button>

        {/* Header */}
        <div className="p-6 flex flex-col sm:flex-row gap-6">
          <img
            src={project.mainPhoto}
            alt={project.title}
            className="h-28 w-28 object-cover rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm bg-white"
          />
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {project.title}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
              {project.category} • {project.projectType}
            </p>
            <p className="mt-3 text-gray-700 dark:text-gray-200 leading-relaxed text-sm">
              {project.main_description}
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 pb-6 space-y-6 max-h-[65vh] overflow-y-auto">
          {/* Full Description */}
          {project.full_description && (
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">
                Overview
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                {project.full_description}
              </p>
            </div>
          )}

          {/* Technologies */}
          {project.technologies?.length > 0 && (
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium px-3 py-1 rounded-full border border-cyan-400 text-cyan-600 bg-cyan-50 dark:bg-cyan-900/30 dark:text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Features */}
          {project.features?.length > 0 && (
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                Key Features
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                {project.features.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Screenshots */}
          {project.screenshots?.length > 0 && (
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                Screenshots
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.screenshots.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={`Screenshot ${idx + 1}`}
                    className="rounded-lg border border-gray-200 dark:border-gray-800 hover:scale-[1.02] transition-transform duration-300"
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 flex flex-wrap items-center justify-between border-t border-gray-200/40 dark:border-gray-800/80 gap-3">
          <div className="flex gap-3 flex-wrap">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white underline"
              >
                View on GitHub
              </a>
            )}
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-teal-600 hover:text-teal-700 underline"
              >
                Live Demo
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
