"use client";

import Video from "./Video";
import { MinifiedEpisodes } from "../Functions/organizeEpisodesData";
import { Button } from "flowbite-react";
import { HiOutlineArrowRight, HiOutlineArrowLeft } from "react-icons/hi";

type VideoViewPrpos = {
   episodes: MinifiedEpisodes[];
   activeChapter: string;
   episodeIndex: number;
   setEpisodeIndex: (index: number) => void;
};

export default function VideoView({
   episodes,
   activeChapter,
   episodeIndex,
   setEpisodeIndex,
}: VideoViewPrpos) {
   const onClickIncrementEpisodeIndex = () => {
      if (episodeIndex < episodes.length - 1) {
         setEpisodeIndex(episodeIndex + 1);
      }
   };

   const onClickDecrementEpisodeIndex = () => {
      if (episodeIndex > 0) {
         setEpisodeIndex(episodeIndex - 1);
      }
   };

   return (
      <>
         <section>
            <div
               id="player"
               style={{
                  borderRadius: "10px",
                  border: "1px solid #ccc",
                  zIndex: 1,
               }}
            >
               <Video
                  videoIndex={episodeIndex}
                  videoKey={episodes[episodeIndex].key}
                  activeChapter={activeChapter}
               />
            </div>

            <div
               className="video-episode-library-container-version1"
               style={{
                  display: "flex",
                  flexDirection: "column",
               }}
            >
               <div
                  className="button-container"
                  style={{
                     display: "flex",
                     flexDirection: "row",
                     justifyContent: "space-between",
                     padding: "5px",
                  }}
               >
                  <Button
                     color="blue"
                     size="sm"
                     style={{
                        width: "48%",
                        textAlign: "center",
                     }}
                     onClick={onClickDecrementEpisodeIndex}
                     disabled={episodeIndex === 0}
                  >
                     <HiOutlineArrowLeft className="ml-2 h-5 w-5" />
                     <span style={{ color: "transparent" }}>...</span>
                     Prev
                  </Button>
                  <Button
                     color="blue"
                     size="sm"
                     style={{ width: "48%" }}
                     onClick={onClickIncrementEpisodeIndex}
                     disabled={episodeIndex === episodes.length - 1}
                  >
                     Next
                     <HiOutlineArrowRight className="ml-2 h-5 w-5" />
                  </Button>
               </div>

               <div
                  className="video-title-container"
                  style={{
                     padding: "0 5px",
                  }}
               >
                  <Button
                     color="blue"
                     key={episodes[episodeIndex].episode}
                     style={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        padding: "0 1rem",
                        margin: "auto",
                        width: "100%",
                        cursor: "default",
                        border: "none",
                     }}
                  >
                     {episodes[episodeIndex].episode}
                  </Button>
               </div>
            </div>

            <div
               className="video-episode-library-container-version2"
               style={{
                  display: "flex",
                  flexDirection: "column",
               }}
            ></div>

            {/* <div className="video-library">
                    {episodes.slice(1, 4).map((episode, index) => {
                        return (
                            <div key={index}>
                                <button
                                    className=""
                                    key={episode.key}
                                    onClick={() => setEpisodeIndex(index)}
                                >
                                    <p key={episode.episode}>
                                        {episode.episode}
                                    </p>
                                </button>
                            </div>
                        );
                    })}
                </div> */}
         </section>
      </>
   );
}
