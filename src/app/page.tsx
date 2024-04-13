import AcademyApp from "@/server/Components/AcademyApp";
import Drawer from "@/server/Components/Drawer";
import FullAcademy from "@/server/Components/FullAcademy";
import Video from "@/server/Components/Video";
import VideoView from "@/server/Components/VideoView";

import { useEffect } from "react";
export interface Episode {
   name: string;
   key: string;
}
export interface Academia {
   episodes: Episode[];
   chapter: string;
}
export default function Home() {
   const clientName = "Shmual";
   const clientId = "345";
   const url = `https://clownfish-app-atszh.ondigitalocean.app/protected?clientId=${clientId}&clientName=${clientName}`;
   const dummy: Academia[] = [
      {
         episodes: [
            {
               name: "1. Forex Double Top And Double Bottom Formation Patterns",
               key: "sivLZRsA7UejUo4gRZN1EQ",
            },
            {
               name: "2. Learn Forex Head And Shoulders Pattern",
               key: "Jth83q6cfUCO7zLYIVkrxw",
            },
            {
               name: "3. Forex Inverse Head And Shoulders Pattern",
               key: "CUo2wHYlUu8DFsuxsHdA",
            },
            {
               name: "4. Forex Bull Flag Formation Patterns",
               key: "U7J0rcQsSkuxqcQsoRTaqg",
            },
            {
               name: "5. Forex Bear Flag Patterns",
               key: "5kkIIaNiNkmblMFk4QPiw",
            },
            {
               name: "6. Forex Bullish And Bearish Pennant Formation",
               key: "YbIO6ZKx20m6Hu4P8897JA",
            },
            {
               name: "7. Forex Falling Wedge Pattern",
               key: "DFE6UGTFkkCbZTBvmAqZbg",
            },
            {
               name: "8. Forex Ascending And Descending Triangle Formations",
               key: "3DN70JImUqjiAI9ZEcg",
            },
            {
               name: "9. Forex Symmetrical Triangle Pattern",
               key: "HOnbqTLDzECraLHSIm9qw",
            },
         ],
         chapter: "Chart Formation Patterns",
      },
      {
         episodes: [
            {
               name: "10. Forex Double Top And Double Bottom Formation Patterns",
               key: "R0sEV05rEIkRaBfV1zw",
            },
            {
               name: "20. Learn Forex Head And Shoulders Pattern",
               key: "YbrGhfGET0maoLe0MIaUQ",
            },
            {
               name: "30. Forex Inverse Head And Shoulders Pattern",
               key: "0UF3YCY0UOhdktn4v3sxQ",
            },
            {
               name: "40. Forex Bull Flag Formation Patterns",
               key: "v1nTG6qMxUWkCDAMtkwpmA",
            },
            {
               name: "50. Forex Bear Flag Patterns",
               key: "QdCM4mdkGkSeAaOxiL02Jg",
            },
         ],
         chapter: "Forex Indicators",
      },
   ];

   return (
      <main>
         <AcademyApp videoData={dummy} />

         {/*<FullAcademy
            params={{
               videos: [
                  "sivLZRsA7UejUo4gRZN1EQ",
                  "Jth83q6cfUCO7zLYIVkrxw",
                  "CUo2wHYlUu8DFsuxsHdA",
                  "U7J0rcQsSkuxqcQsoRTaqg",
                  "5kkIIaNiNkmblMFk4QPiw",
                  "YbIO6ZKx20m6Hu4P8897JA",
                  "DFE6UGTFkkCbZTBvmAqZbg",
                  "3DN70JImUqjiAI9ZEcg",
                  "HOnbqTLDzECraLHSIm9qw",
               ],
            }}
         />*/}
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
