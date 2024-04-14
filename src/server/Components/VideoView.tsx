"use client";

import { Episode } from "@/app/page";
import { use, useEffect, useRef, useState } from "react";
import Video from "./Video";
import { MinifiedEpisodes } from "../Functions/organizeEpisodesData";

type ParamType = {
   episodes: MinifiedEpisodes[];
   activeChapter: string;
};

export default function VideoView(params: ParamType) {
   const episodes = params.episodes;
   const activeChapter = params.activeChapter;
   const [episodeIndex, setEpisodeIndex] = useState(1);

   return (
      <>
         <section className="video-frame">
            <h1>{episodeIndex}</h1>
            <div id="player">
               <Video
                  videoIndex={episodeIndex}
                  videoKey={episodes[episodeIndex].key}
                  activeChapter={activeChapter}
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
                           <p key={episode.episode}>{episode.episode}</p>
                        </button>
                     </div>
                  );
               })}
            </div>
         </section>
      </>
   );
}
