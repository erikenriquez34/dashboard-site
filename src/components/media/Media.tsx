import DiscordCard from "./DiscordCard";

function Media() {
    return (
        <main className="flex flex-col min-h-screen xl:mt-28 mt-36 pt-12 items-center">
            <section className="flex px-12 w-5xl justify-between">
                <div className="p-5 rounded-lg flex items-center w-105 h-33 bg-gradient-to-b from-amber-600 from-45% to-discord-dark to-45%">
                    <DiscordCard/>
                </div>

                <div>
                    Something here
                </div>
            </section>
        </main>
    );
}

export default Media;