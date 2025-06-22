interface Props {
    name: string,
    description: string,
    image: string,
    repo: string,
    tags: string[],
}

function Card(props: Props) {
  return (
    <a key={props.name} className="bg-discord-dark rounded-2xl overflow-hidden shadow-amber-500/50 
      hover:shadow-2xl cursor-pointer hover:scale-105 transition-all" href={props.repo} target="_blank">
      <img
        src={props.image}
        alt={`${props.name}`}
        className="w-full h-48 object-cover object-center"
        />
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2">{props.name}</h3>
        <p className="text-sm text-zinc-300 mb-4">{props.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {props.tags.map((tech) => (
            <span key={tech} className="bg-neutral-800 text-xs px-3 py-1 rounded-full border border-zinc-700">
            {tech}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}

export default Card;