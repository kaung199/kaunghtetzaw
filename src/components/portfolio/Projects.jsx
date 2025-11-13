import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import ProjectDetailModal from "./ProductDetailModal";

const Projects = ({ data }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="max-w-sm bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
        {/* Image */}
        <div className="overflow-hidden">
          <img
            src={data?.mainPhoto}
            alt={`${data?.title} image`}
            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-5 xs:p-7">
          <p className="text-gray-400 text-xs font-medium mb-1">
            {data?.category} | {data?.projectType}
          </p>

          <h3 className="text-gray-900 text-lg font-semibold mb-2">
            {data?.title}
          </h3>

          <p
            style={{ lineHeight: "20px" }}
            className="text-gray-600 text-sm leading-snug"
          >
            {data?.main_description}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mt-6">
            {/* Details Button */}
            <button
              onClick={() => setShowModal(true)}
              className="flex cursor-pointer items-center justify-center gap-2 border border-gray-300 text-gray-800 hover:border-teal-500 hover:text-teal-600 bg-white font-semibold text-sm xs:text-base py-2.5 px-5 rounded-lg transition-all duration-300"
            >
              Details
              <FaArrowRight className="text-sm" />
            </button>

            {/* Demo Button (only if demoLink exists) */}
            {data?.demoLink && (
              <a
                href={data?.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-gray-300 text-gray-800 hover:border-teal-500 hover:text-teal-600 bg-white font-semibold text-sm xs:text-base py-2.5 px-5 rounded-lg transition-all duration-300"
              >
                Demo
                <FaArrowRight className="text-sm" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <ProjectDetailModal project={data} onClose={() => setShowModal(false)} />
      )}
    </>
  );
};

export default Projects;
