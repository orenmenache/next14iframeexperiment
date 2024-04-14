"use client";

import { useState } from "react";
import VideoView from "./VideoView";
import { MinifiedChapters } from "../Functions/organizeEpisodesData";
import { Button } from "flowbite-react";

type AcademyAppProps = {
   videoData: MinifiedChapters[];
};

export default function AcademyApp__CC({ videoData }: AcademyAppProps) {
   // const chapters = videoData.map((academia) => academia.chapter);
   const [activeChapter, setActiveChapter] = useState(videoData[0].chapter);
   const [episodes, setEpisodes] = useState(videoData[0].episodes);
   const [episodeIndex, setEpisodeIndex] = useState(0);

   const onClickChapter = (chapter: string) => {
      setActiveChapter(chapter);
      setEpisodes(
         videoData.filter((academia) => academia.chapter === chapter)[0]
            .episodes
      );
      setEpisodeIndex(0);
   };

   return (
      <>
         <div
            style={{
               display: "flex",
               flexDirection: "column",
               width: "600px",
               margin: "auto",
            }}
         >
            <div
               className="chapter-list"
               style={{
                  display: "flex",
                  flexDirection: "column",
                  // justifyContent: 'flex-start',
                  // alignItems: 'center',
                  margin: "5px",
                  gap: "5px",
               }}
            >
               {videoData.map((chapterData: MinifiedChapters) => (
                  <Button
                     key={chapterData.chapter}
                     color="blue"
                     onClick={() => onClickChapter(chapterData.chapter)}
                  >
                     {chapterData.chapter}
                  </Button>
               ))}
            </div>
            <VideoView
               episodes={episodes}
               activeChapter={activeChapter}
               episodeIndex={episodeIndex}
               setEpisodeIndex={setEpisodeIndex}
            />
         </div>
      </>
   );
}
