import AcademyApp from "@/server/Components/AcademyApp";
import Drawer from "@/server/Components/Drawer";
import FullAcademy from "@/server/Components/FullAcademy";
import Video from "@/server/Components/Video";
import VideoView from "@/server/Components/VideoView";
import getClientData from "@/server/Functions/getClientData";
import getClientVideos from "@/server/Functions/getClientVideos";
import getEpisodesData from "@/server/Functions/getEpisodeData";
import organizeEpisodesData, {
   MinifiedChapters,
   MinifiedEpisodes,
} from "@/server/Functions/organizeEpisodesData";
import { Client, DyntubeVideo } from "@/server/types/dbSchemes";
import fs from "fs";

import { useEffect } from "react";
export interface Episode {
   name: string;
   key: string;
}
export interface Academia {
   episodes: Episode[];
   chapter: string;
}
export default async function Home() {
   const clientName = "Shmual";
   const clientId = "345";
   const url = `https://clownfish-app-atszh.ondigitalocean.app/protected?clientId=${clientId}&clientName=${clientName}`;
   const dummy: MinifiedChapters[] = [
      {
         episodes: [
            {
               episode:
                  "1. Forex Double Top And Double Bottom Formation Patterns",
               key: "sivLZRsA7UejUo4gRZN1EQ",
            },
            {
               episode: "2. Learn Forex Head And Shoulders Pattern",
               key: "Jth83q6cfUCO7zLYIVkrxw",
            },
            {
               episode: "3. Forex Inverse Head And Shoulders Pattern",
               key: "CUo2wHYlUu8DFsuxsHdA",
            },
            {
               episode: "4. Forex Bull Flag Formation Patterns",
               key: "U7J0rcQsSkuxqcQsoRTaqg",
            },
            {
               episode: "5. Forex Bear Flag Patterns",
               key: "5kkIIaNiNkmblMFk4QPiw",
            },
            {
               episode: "6. Forex Bullish And Bearish Pennant Formation",
               key: "YbIO6ZKx20m6Hu4P8897JA",
            },
            {
               episode: "7. Forex Falling Wedge Pattern",
               key: "DFE6UGTFkkCbZTBvmAqZbg",
            },
            {
               episode: "8. Forex Ascending And Descending Triangle Formations",
               key: "3DN70JImUqjiAI9ZEcg",
            },
            {
               episode: "9. Forex Symmetrical Triangle Pattern",
               key: "HOnbqTLDzECraLHSIm9qw",
            },
         ],
         chapter: "Chart Formation Patterns",
         levelId: 1,
      },
      {
         chapter: "Forex Indicators",
         levelId: 1,
         episodes: [
            {
               episode:
                  "10. Forex Double Top And Double Bottom Formation Patterns",
               key: "R0sEV05rEIkRaBfV1zw",
            },
            {
               episode: "20. Learn Forex Head And Shoulders Pattern",
               key: "YbrGhfGET0maoLe0MIaUQ",
            },
            {
               episode: "30. Forex Inverse Head And Shoulders Pattern",
               key: "0UF3YCY0UOhdktn4v3sxQ",
            },
            {
               episode: "40. Forex Bull Flag Formation Patterns",
               key: "v1nTG6qMxUWkCDAMtkwpmA",
            },
            {
               episode: "50. Forex Bear Flag Patterns",
               key: "QdCM4mdkGkSeAaOxiL02Jg",
            },
         ],
      },
   ];

   return (
      <main>
         <AcademyApp videoData={dummy} />
      </main>
   );
}
/*
R0sEV05rEIkRaBfV1zw
YbrGhfGET0maoLe0MIaUQ
0UF3YCY0UOhdktn4v3sxQ
v1nTG6qMxUWkCDAMtkwpmA
QdCM4mdkGkSeAaOxiL02Jg
*/
