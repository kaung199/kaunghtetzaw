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
      className="fixed inset-0 z-9999 flex items-center justify-center 
      backdrop-blur-md bg-white/30 p-4 animate-fadeIn"
      onClick={onClose}
    >
      {/* Modal container */}
      <div
        className="relative rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.1)] 
        w-full max-w-4xl overflow-hidden animate-scaleIn
        bg-[radial-gradient(circle_at_12%_100%,#ffe2b0f5_1%,transparent_20%), 
            radial-gradient(circle_at_95%_-15%,#da4df166_8%,transparent_30%), 
            radial-gradient(circle_at_center_right,#c4f5e9b2_6%,transparent_35%)]
        bg-white/60 backdrop-blur-xl border border-white/40"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Accent line */}
        <div className="h-1 w-full bg-linear-to-r from-pink-300 via-amber-300 to-teal-300" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 cursor-pointer text-2xl font-bold transition"
        >
          ✕
        </button>

        {/* Header */}
        <div className="p-6 flex flex-col sm:flex-row gap-6">
          <img
            src={project.mainPhoto}
            alt={project.title}
            className="h-28 w-28 object-cover rounded-2xl border border-white/60 shadow-md bg-white"
          />

          <div className="flex-1">
            <h2 className="text-2xl font-extrabold text-gray-900 drop-shadow-sm">
              {project.title}
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              {project.category} • {project.projectType}
            </p>

            <p className="mt-3 text-gray-700 leading-relaxed text-sm">
              {project.main_description}
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 pb-6 space-y-6 max-h-[65vh] overflow-y-auto">
          {/* Overview */}
          {project.full_description && (
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Overview</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                {project.full_description}
              </p>
            </div>
          )}

          {/* Technologies */}
          {project.technologies?.length > 0 && (
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium px-3 py-1 rounded-full
                    bg-white/60 border border-pink-200 text-pink-600 
                    shadow-sm backdrop-blur-sm"
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
              <h3 className="font-semibold text-gray-800 mb-2">
                Key Features
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                {project.features.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Screenshots */}
          {project.screenshots?.length > 0 && (
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Screenshots</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.screenshots.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={`Screenshot ${idx + 1}`}
                    className="rounded-xl shadow-lg border border-white/50 
                    hover:scale-[1.02] transition-transform duration-300"
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 flex items-center justify-between border-t border-white/50">
          <div className="flex gap-3 flex-wrap">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-teal-600 hover:underline"
              >
                GitHub
              </a>
            )}

            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-pink-600 hover:underline"
              >
                Live Demo
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg cursor-pointer bg-white/70 shadow 
            hover:text-red-500 text-gray-800 text-sm font-semibold 
            backdrop-blur-md transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
