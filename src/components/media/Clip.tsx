import { useState } from 'react';

interface Props {
  videoId: string;
  title: string;
  game: string;
  date: string;
  tag: string;
};

const gameName: Record<string, string> = {
  brawlhalla: 'Brawlhalla',
  league: 'League of Legends',
  minecraft: 'Minecraft',
  terraria: 'Terraria',
  playstation: 'PlayStation',
};

function timeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diff = now.getTime() - date.getTime();

  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years > 0) return `${years} year${years > 1 ? "s" : ""} ago`;
  if (months > 0) return `${months} month${months > 1 ? "s" : ""} ago`;
  if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
  if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  return `just now`;
}

function getTag(tag: string) {
  if (tag === "hot") {
    return (
      <article className="flex font-bold text-xs bg-orange-400 px-3 rounded-xl items-center">
        <p>Hot</p>
      </article>
    )
  } else if (tag === "wp") {
    return (
      <article className="flex font-bold text-xs bg-blue-400 px-3 rounded-xl items-center">
        <p>Well Played</p>
      </article>
    )
  } else if (tag === "memories") {
    return (
      <article className="flex font-bold text-xs bg-pink-400 px-3 rounded-xl items-center">
        <p>Memories</p>
      </article>
    )
  }
}


function Clip(props: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div onClick={() => setIsOpen(true)} className="w-75 rounded-xl shadow-lg bg-discord-dark overflow-hidden cursor-pointer group hover:shadow-xl hover:-translate-y-1 transition">
        <div className="relative">
          <img
            src={`https://img.youtube.com/vi/${props.videoId}/hqdefault.jpg`}
            alt={props.title}
            className="w-full h-44 object-cover"
          />
        </div>
        <div className="p-3">
          <div className="flex justify-between mb-1">
            <p className="text-white font-semibold text-md truncate">{props.title}</p>
            {getTag(props.tag)}
          </div>
          <div className="relative flex flex-row items-center right-0.5 gap-0.5">
            <img src={`icons/${props.game}.png`} alt={`${props.game} icon`} className="w-4 h-4 shadow-md"/>
            <p className="text-gray-400 text-sm">{gameName[props.game]} • {timeAgo(props.date)}</p>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
          <div className="relative w-full max-w-3xl mx-auto p-6" onClick={(e) => e.stopPropagation()}>
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-lg shadow-lg"
                src={`https://www.youtube.com/embed/${props.videoId}?autoplay=1`}
                title={props.title}
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Clip;
