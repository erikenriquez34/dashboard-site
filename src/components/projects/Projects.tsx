import Card from "./Card"

function Projects() {
  const projects = [
    {
      name: "Threaded Matrix",
      description: "A C++ multithreaded matrix multiplication experiment with cache analysis.",
      image: "/thumbnails/threaded-matrix.png",
      repo: "https://github.com/erikenriquez34/threaded-matrix",
      tags: ["C++", "Multithreading", "Architecture"],
    }
  ];
  
  return (
    <>
      <main className="flex flex-col min-h-screen mt-16 pt-12 items-center">
        <section className="px-6 py-16 text-white" id="projects">
          <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {projects.map((project) => (
              <Card name={project.name} description={project.description} image={project.image} 
              repo={project.repo} tags={project.tags} />
              
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default Projects;