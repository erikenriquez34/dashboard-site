import { useEffect, useState } from "react";

function getBadge(lanyard: any) {
  return (
    lanyard.active_on_discord_desktop || lanyard.active_on_discord_mobile ? (
      <span className="absolute bottom-0.5 right-0.5 w-6 h-6 bg-discord-green border-5 border-discord-activity rounded-full"></span>
      ) : (
        <>
          <span className="absolute bottom-0.5 right-0.5 w-7 h-7 bg-neutral-500 border-5 border-discord-activity rounded-full"></span>
          <span className="absolute bottom-2.75 right-2.75 w-2.5 h-2.5 bg-discord-activity rounded-full"></span>
        </>
      )
  );
}

function getImage(lanyard: any) {
  const activity = lanyard.activities[0];

  let imageUrl = "";
  //spotify
  if (activity.name === "Spotify" && activity.assets?.large_image.startsWith("spotify:")) {
    imageUrl = `https://i.scdn.co/image/${activity.assets?.large_image.replace("spotify:", "")}`;
  //ps4
  } else if (activity.platform === "ps4" && activity.assets?.small_image) {
    const idx = activity.assets.small_image.indexOf("image.api");
    imageUrl = "https://" + activity.assets.small_image.slice(idx);
  //meta quest
  } else if (activity.details.includes("Meta Quest")) {
    imageUrl = './icons/meta-quest.png';
  //pc games
  } else if (activity.assets?.large_image) {
    imageUrl = `https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets?.large_image}.png`;
  } else if (activity.assets?.small_image) {
    imageUrl = `https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets?.small_image}.png`;
  }

  return (
    <img src={imageUrl} alt="activity image" className="w-16 h-16 rounded-md shadow-md"/>
  );
}

function getDesc(lanyard: any) {
  const activity = lanyard.activities[0];

  return (
    <div className="text-white overflow-hidden">
      <h2 className="font-semibold text-md">Playing {activity.name}</h2>
      <h3 className="text-xs font-medium">{activity.details}</h3>
      <h3 className="font-bold text-xs text-discord-green pt-0.5 truncate overflow-clip whitespace-nowrap">{activity.state}</h3>
    </div>
  )
}

function DiscordCard() {
  const [lanyard, setlanyard] = useState<any>(null);
  const userID = 231618701382778880;

  useEffect(() => {
    fetch(`https://api.lanyard.rest/v1/users/${userID}`)
      .then(res => res.json())
      .then(data => setlanyard(data.data));
  }, []);

  if (!lanyard) {
    return (
      <div className="flex flex-col gap-3">
        <div className="flex items-center animate-pulse">
          <div className="relative mb-2">
            <div className="rounded-full w-18 h-18 bg-discord-dark" />
          </div>
          <div className="ml-2 mt-1">
            <div className="h-6 w-36 bg-discord-dark rounded"></div>
          </div>
        </div>

        <div className="flex bg-discord-activity p-2 h-22.5 w-75 rounded-lg items-center animate-pulse">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 bg-discord-dark rounded-md"></div>
            <div className="space-y-2">
              <div className="h-4 w-32 bg-discord-dark rounded"></div>
              <div className="h-3 w-28 bg-discord-dark rounded"></div>
              <div className="h-3 w-36 bg-discord-dark rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center">
        <div className="relative mb-2">
            <img src={`https://cdn.discordapp.com/avatars/${lanyard.discord_user.id}/${lanyard.discord_user.avatar}.png`} 
            alt="Discord Avatar" 
            className="rounded-full w-18 h-18 overflow-hidden border-6 border-discord-activity shadow-lg"
            />
          {getBadge(lanyard)}
        </div>

        <a href={`https://discord.com/users/${lanyard.discord_user.id}`} target="_blank" title="View Discord Profile">
          <p className="ml-2 mt-1 text-3xl font-bold hover:bg-amber-500">SirrDrip#NA1</p>
        </a>
      </div>

      {lanyard.activities.length ? (
        <div className="flex bg-discord-activity p-2 h-22.5 w-75 rounded-lg items-center">
          <div className="flex items-center gap-3">
            {getImage(lanyard)}
            {getDesc(lanyard)}
          </div>
        </div>
      ) : (
        <div className="flex bg-discord-activity p-2 h-22.5 w-75 rounded-lg items-center justify-center">
          <div className="flex items-center gap-1 flex-col">
            <h2 className="font-semibold text-md text-red-500">No activity detected.</h2>
            <h2 className="font-semibold text-sm mb-3">Hopefully enjoying the outdoors!</h2>
          </div>
        </div>
      )}
    </>
  );
}

export default DiscordCard;