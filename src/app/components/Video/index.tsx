"use client";

// @refresh reset
import Script from "next/script";
import { useEffect, useState } from "react";

type VideoProps = {
   videoKey: string;
   videoIndex: number;
   activeChapter: string;
};

export default function Video__CC({
   videoKey,
   videoIndex,
   activeChapter,
}: VideoProps) {
   // let video = (
   //     <div className="video-player" data-dyntube-key={videoKey}></div>
   // );
   const [key, setKey] = useState(0);

   // Effect to update the key when videoIndex changes, which remounts the video player
   useEffect(() => {
      //   console.log(activeChapter);
      setKey((prevKey) => prevKey + 1); // Increment key to force re-mount
   }, [videoIndex, activeChapter]);
   return (
      <>
         <div
            key={key}
            className="video-player"
            data-dyntube-key={videoKey}
            style={{ height: "85%", width: "auto" }}
         ></div>
         <Script src="https://embed.dyntube.com/v1.0/dyntube.js" />
      </>
   );
}
