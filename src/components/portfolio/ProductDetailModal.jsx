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
  backdrop-blur-md bg-white/60 p-2 sm:p-4 animate-fadeIn
  touch-none"
  onClick={onClose}
>
  <div
    className="relative rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.1)]
      w-full max-w-4xl overflow-hidden animate-scaleIn
      bg-white/80 backdrop-blur-xl border border-white/40
      max-h-[85dvh] flex flex-col touch-auto"
    onClick={(e) => e.stopPropagation()}
  >
    {/* Accent line */}
    <div className="h-1 w-full bg-linear-to-r from-pink-300 via-amber-300 to-teal-300" />

    {/* Close button */}
    <button
      onClick={onClose}
      className="absolute cursor-pointer top-4 right-4 text-gray-600 hover:text-red-500 text-2xl font-bold"
    >
      ✕
    </button>

    {/* HEADER */}
    <div className="p-5 flex flex-col sm:flex-row gap-4">
      <img
        src={project.mainPhoto}
        alt={project.title}
        className="h-24 w-24 sm:h-28 sm:w-28 rounded-2xl object-cover shadow"
      />

      <div className="flex-1">
        <h2 className="text-2xl font-extrabold text-gray-900 drop-shadow-sm">{project.title}</h2>
        <p className="text-gray-600 text-sm mt-1">
          {project.category} • {project.projectType}
        </p>
        <p className="mt-3 text-gray-700 text-sm">{project.main_description}</p>
      </div>
    </div>

    {/* CONTENT — scrollable */}
    <div className="px-5 pb-5 overflow-y-auto space-y-6">
      {/* Overview */}
      {project.full_description && (
        <div>
          <h3 className="font-semibold text-gray-800 mb-1">Overview</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            {project.full_description}
          </p>
        </div>
      )}

      {/* Technologies */}
      {project.technologies?.length > 0 && (
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs rounded-full bg-white border border-pink-200 text-pink-600"
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
          <h3 className="font-semibold text-gray-800 mb-2">Key Features</h3>
          <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
            {project.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Screenshots */}
      {project.screenshots?.length > 0 && (
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Screenshots</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.screenshots.map((src, i) => (
              <img
                key={i}
                src={src}
                className="rounded-xl shadow border border-white/50"
                alt=""
              />
            ))}
          </div>
        </div>
      )}
    </div>

    {/* FOOTER */}
    <div className="px-5 py-3 border-t bg-white/60 flex justify-between">
      <div className="flex gap-3">
        {project.githubLink && (
          <a href={project.githubLink} target="_blank" className="text-sm text-teal-600">
            GitHub
          </a>
        )}
        {project.demoLink && (
          <a href={project.demoLink} target="_blank" className="text-sm text-pink-600">
            Live Demo
          </a>
        )}
      </div>

      <button
        onClick={onClose}
        className="px-4 py-2 cursor-pointer rounded bg-white shadow text-gray-800 text-sm hover:text-red-500"
      >
        Close
      </button>
    </div>
  </div>
</div>
,
    document.body
  );
}
