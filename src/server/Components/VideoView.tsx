"use client";

import { Episode } from "@/app/page";
import { useEffect, useState } from "react";
import Video from "./Video";

type ParamType = {
   episodes: Episode[];
};

export default function VideoView(params: ParamType) {
   const episodes = params.episodes;
   const [episodeIndex, setEpisodeIndex] = useState(1);

   return (
      <>
         <section className="video-frame">
            <h1>{episodeIndex}</h1>
            <div id="player">
               <Video
                  videoIndex={episodeIndex}
                  videoKey={episodes[episodeIndex].key}
               />
            </div>

            <div className="video-library">
               {episodes.slice(1, 4).map((episode, index) => {
                  return (
                     <div key={index}>
                        <button
                           className=""
                           key={episode.key}
                           onClick={() => setEpisodeIndex(index)}
                        >
                           <p key={episode.name}>{episode.name}</p>
                        </button>
                     </div>
                  );
               })}
            </div>
         </section>
      </>
   );
}
