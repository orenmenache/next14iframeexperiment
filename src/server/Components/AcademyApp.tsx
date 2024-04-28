"use client";

import { useState } from "react";
import VideoView from "./VideoView";
import { MinifiedChapters } from "../Functions/organizeEpisodesData";
import { Button } from "flowbite-react";
import LoginTrigger from "./envokeLogin";

type AcademyAppProps = {
   videoData: MinifiedChapters[];
   client_url: { login_url: string; register_url: string };
};

export default function AcademyApp__CC({
   videoData,
   client_url,
}: AcademyAppProps) {
   // const chapters = videoData.map((academia) => academia.chapter);
   console.log(client_url);
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
               flexDirection: "row-reverse",
               width: "800px",
               margin: "auto",
            }}
         >
            <VideoView
               episodes={episodes}
               activeChapter={activeChapter}
               episodeIndex={episodeIndex}
               setEpisodeIndex={setEpisodeIndex}
               url={client_url.login_url}
            />
            <div
               className="chapter-list"
               style={{
                  display: "flex",
                  flexDirection: "column",
                  // justifyContent: 'flex-start',
                  // alignItems: 'center',
                  margin: "5px",
                  gap: "5px",
                  height: "452.1666px",
                  overflowY: "auto",
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
         </div>
      </>
   );
}
