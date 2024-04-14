// @refresh reset
import Script from "next/script";
import { useEffect, useState } from "react";

type ParamType = {
   videoKey: string;
   videoIndex: number;
   activeChapter: string;
};

export default function Video(params: ParamType) {
   const videoKey = params.videoKey;
   let video = <div className="video-player" data-dyntube-key={videoKey}></div>;
   const [key, setKey] = useState(0);

   // Effect to update the key when videoIndex changes, which remounts the video player
   useEffect(() => {
      console.log(params.activeChapter);
      setKey((prevKey) => prevKey + 1); // Increment key to force re-mount
   }, [params.videoIndex, params.activeChapter]);
   return (
      <>
         <div
            key={key}
            className="video-player"
            data-dyntube-key={videoKey}
         ></div>
         <Script src="https://embed.dyntube.com/v1.0/dyntube.js" />
      </>
   );
}
