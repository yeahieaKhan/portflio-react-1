import React, { useEffect, useState } from "react";

const RecentWork = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetch("/project.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error loading projects:", error));
  }, []);

  return (
    <div className="py-20">
      <h2 className="text-center font-bold text-3xl mb-4">My Recent work</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        {projects.map((project, index) => (
          <div key={index} className="card bg-base-100 shadow-sm">
            <figure>
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-56 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.name}</h2>
              <p className="line-clamp-3">{project.details.description}</p>
              <div className="card-actions justify-end flex-wrap gap-2 mt-2">
                {project.details.technologyStack.map((tech, idx) => (
                  <div key={idx} className="badge badge-outline">
                    {tech}
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-4">
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  onClick={() => setSelectedProject(project)}
                >
                  View More
                </button>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Live Link
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Modal */}
        {selectedProject && (
          <dialog
            open
            className="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedProject(null);
            }}
          >
            <div className="modal-box bg-white rounded-lg max-w-3xl max-h-[90vh] overflow-y-auto p-6 relative">
              <h3 className="font-bold text-2xl mb-4">
                {selectedProject.name}
              </h3>
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full h-64 object-cover rounded mb-4"
              />
              <p className="mb-4">{selectedProject.details.description}</p>

              <h4 className="font-semibold">Tech Stack:</h4>
              <ul className="list-disc list-inside mb-4">
                {selectedProject.details.technologyStack.map((tech, idx) => (
                  <li key={idx}>{tech}</li>
                ))}
              </ul>

              <h4 className="font-semibold">Challenges:</h4>
              <ul className="list-disc list-inside mb-4">
                {selectedProject.details.challenges.map((ch, idx) => (
                  <li key={idx}>{ch}</li>
                ))}
              </ul>

              <h4 className="font-semibold">Future Plans:</h4>
              <ul className="list-disc list-inside mb-4">
                {selectedProject.details.futurePlans.map((plan, idx) => (
                  <li key={idx}>{plan}</li>
                ))}
              </ul>

              <div className="flex gap-4 mt-4">
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Live Site
                </a>
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  GitHub
                </a>
              </div>

              <button
                className="btn btn-error absolute top-4 right-4"
                onClick={() => setSelectedProject(null)}
                aria-label="Close Modal"
              >
                ✕
              </button>
            </div>
          </dialog>
        )}
      </div>
    </div>
  );
};

export default RecentWork;
