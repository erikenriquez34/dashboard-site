import DiscordCard from "./DiscordCard";

function Media() {
  return (
    <>
      <main className="relative h-screen w-full bg-cover" style={{ backgroundImage: "url('/bard-mountain.png')" }}> 
        <figure className="absolute inset-0 bg-gradient-to-b from-transparent to-spirit z-10"/>

        <div className="relative z-20 h-full flex items-center justify-center px-12">
          <div className="flex w-full max-w-6xl items-center justify-around gap-40">
            <div className="flex flex-col mx-2">
              <DiscordCard />
            </div>

            <div className="mx-2">
              <div className="flex items-center">
                <img
                  src="/emerald-rank.png"
                  alt="emerald-rank"
                  className="shadow-md w-28 h-28 mx-4"
                />
                <div>
                  <p className="font-semibold text-3xl">Emerald 4</p>
                  <p className="font-semibold text-xl">46 LP</p>
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

      <main className="bg-spirit text-white py-20 px-6">
        <h2 className="text-3xl font-bold mb-4">Media Highlights</h2>
      </main>
    </>
  );
}


export default Media;