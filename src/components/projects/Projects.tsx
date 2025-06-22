import Card from "./Card"
import projects from '../../data/projects.json';

function Projects() {
  return (
    <>
      <main className="flex flex-col min-h-screen mt-16 pt-12 items-center">
        <section className="px-6 py-16 text-white">
          <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
          <div className="grid md:grid-cols-3 gap-15 max-w-6xl mx-auto scale-88">
            {projects.map((project) => (
              <Card key={project.name} name={project.name} description={project.description} image={project.image} 
              repo={project.repo} tags={project.tags}/>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default Projects;