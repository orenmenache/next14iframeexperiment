// @refresh reset
import Script from "next/script";
import { useEffect, useState } from "react";

type ParamType = {
   videoKey: string;
   videoIndex: number;
};

export default function Video(params: ParamType) {
   const videoKey = params.videoKey;
   const [dyntubeKey, setDyntubeKey] = useState(videoKey);
   let video = (
      <div className="video-player" data-dyntube-key={dyntubeKey}></div>
   );
   useEffect(() => {
      setDyntubeKey(videoKey);
      !(function (e, t, i): any {
         //@ts-ignore
         if (void 0 === e._dyntube_v1_init) {
            //@ts-ignore
            e._dyntube_v1_init = !0;
            var a = t.createElement("script");
            (a.type = "text/javascript"),
               (a.async = !0),
               (a.src = "https://embed.dyntube.com/v1.0/dyntube.js"),
               t.getElementsByTagName("head")[0].appendChild(a);
         }
      })(window, document);
      video = (
         <div className="video-player" data-dyntube-key={dyntubeKey}></div>
      );
   }, [videoKey]);

   return <div>{video}</div>;
}
