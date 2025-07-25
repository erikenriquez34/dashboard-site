import { useEffect, useState } from "react";
import clips from '../../data/clips.json';
import DiscordCard from "./DiscordCard";
import Clip from "./Clip";

function Media() {
  useEffect(() => {
    document.title = "Erik Enriquez | Media";
  }, []);

  const [selectedGame, setSelectedGame] = useState("All");

  const filteredClips = selectedGame === "All"
    ? clips
    : clips.filter((clip) => clip.game === selectedGame);

    return (
    <>
      <main className="relative h-screen w-full bg-cover" style={{ backgroundImage: "url('bard-mountain.png')" }}> 
        <figure className="absolute inset-0 bg-gradient-to-b from-transparent to-spirit z-10"/>

        <div className="relative z-20 h-full flex items-center justify-center flex-col px-12 py-26">
          <div className="flex w-full max-w-6xl items-center justify-around gap-40">
            <div className="flex flex-col mx-2">
              <DiscordCard />
            </div>

            <div className="mx-2">
              <div className="flex items-center">
                <img
                  src="emerald-rank.png"
                  alt="emerald-rank"
                  className="shadow-md w-28 h-28 mx-4"
                />
                <div>
                  <p className="font-semibold text-3xl">Emerald 4</p>
                  <p className="font-semibold text-xl">16 LP</p>
                </div>
              </div>

              <p className="font-semibold text-xl mt-2">
                Check my{' '}
                <a
                  className="text-amber-500 hover:cursor-pointer hover:underline underline-offset-5 decoration-2"
                  href="https://op.gg/lol/summoners/na/SirrDrip-NA1"
                  target="_blank"
                >
                  OP.GG
                </a>{' '}
                to view recent matches!
              </p>
            </div>
          </div>
        </div>
      </main>

      <main className="relative min-xl:bottom-20 min-md:bottom-10 text-white flex items-center justify-center flex-col px-6 mb-15 z-20">
        <section className="flex flex-col min-2xl:w-[1200px] min-w-5xl items-center">
          <div className="flex flex-row justify-between mb-1 items-center  w-3/4">
            <h2 className="text-3xl font-bold">Media Highlights</h2>
            <select value={selectedGame} onChange={(e) => setSelectedGame(e.target.value)}
              className="p-2 mr-5 rounded bg-discord-activity font-bold"
              >
              <option value="All">All Games</option>
              <option value="league">League of Legends</option>
              <option value="brawlhalla">Brawlhalla</option>
              <option value="minecraft">Minecraft</option>
              <option value="terraria">Terraria</option>
              <option value="playstation">PlayStation</option>
            </select>
          </div>

          <div className="p-10 flex flex-wrap justify-center gap-5">
            {filteredClips.map((video) => (
              <Clip key={video.videoId} videoId={video.videoId} title={video.title} game={video.game} date={video.date} tag={video.tag}/>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}


export default Media;