import { useEffect, useState } from "react";

function getBadge(lanyard: any) {
  return (
    lanyard.active_on_discord_desktop || lanyard.active_on_discord_mobile ? (
      <span className="absolute bottom-1 right-1 w-7 h-7 bg-discord-green border-5 border-discord-activity rounded-full"></span>
      ) : (
        <>
          <span className="absolute bottom-1 right-1 w-7 h-7 bg-neutral-500 border-5 border-discord-activity rounded-full"></span>
          <span className="absolute bottom-3.25 right-3.25 w-2.5 h-2.5 bg-discord-activity rounded-full"></span>
        </>
      )
  );
}

function getImage(lanyard: any) {
  const activity = lanyard.activities[0];

  let imageUrl = "";
  if (activity.name === "Spotify" && activity.assets?.large_image.startsWith("spotify:")) {
    imageUrl = `https://i.scdn.co/image/${activity.assets?.large_image.replace("spotify:", "")}`;
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
    <div className="text-white">
      <h2 className="font-semibold text-md">Playing {activity.name}</h2>
      <h3 className="text-xs">{activity.details}</h3>
      <h3 className="font-bold text-xs text-discord-green pt-0.5">{activity.state}</h3>
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
  if (!lanyard) return;

  return (
    <>
      <div className="relative">
        <a href={`https://discord.com/users/${lanyard.discord_user.id}`} target="_blank" rel="noopener noreferrer">
          <img src={`https://cdn.discordapp.com/avatars/${lanyard.discord_user.id}/${lanyard.discord_user.avatar}.png`} 
          alt="Discord Avatar" 
          className="rounded-full w-24 h-24 overflow-hidden border-7 border-discord-activity shadow-lg cursor-pointer"
          title="View Discord Profile"
          />
        </a>
        {getBadge(lanyard)}
      </div>

      <div className="ml-4 bg-discord-activity p-2 h-23 w-70 rounded-lg">
        {lanyard.activities.length ? (
            <div className="mt-2 flex items-center gap-3">
                {getImage(lanyard)}
                {getDesc(lanyard)}
            </div>
          ) : (
            <div className="mt-3 flex items-center gap-1 flex-col justify-around">
              <h2 className="font-semibold text-md text-red-500">No activity detected.</h2>
              <h2 className="font-semibold text-sm">Hopefully enjoying the outdoors!</h2>
            </div>  
          )}
      </div>
    </>
  );
}

export default DiscordCard;