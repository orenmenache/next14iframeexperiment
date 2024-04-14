import AcademyApp from "@/server/Components/AcademyApp";
import Drawer from "@/server/Components/Drawer";
import FullAcademy from "@/server/Components/FullAcademy";
import Video from "@/server/Components/Video";
import VideoView from "@/server/Components/VideoView";
import getClientData from "@/server/Functions/getClientData";
import getClientVideos from "@/server/Functions/getClientVideos";
import getEpisodesData from "@/server/Functions/getEpisodeData";
import organizeEpisodesData, {
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
         chapter: "Forex Indicators",
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
      },
   ];
   const clientRawData: any = await getClientData("Traders Lab");
   const clientData: Client = await clientRawData[0][0];
   console.log(clientData);
   const clientVideos: DyntubeVideo[] = (
      await getClientVideos(clientData.dyntube_project_id)
   )[0] as DyntubeVideo[];
   //console.log(clientVideos);
   const episodes: MinifiedEpisodes[] = clientVideos.map((video) => {
      let regex = /^\d+\.\s/;
      let title = video.title.replace(regex, "");
      return { episode: title, key: video.channelKey };
   });
   const dyntubeEpisodes = Array.from(episodes);
   let episodesData: any = [];
   while (episodes.length > 0) {
      const tempEpisodesData = (
         await getEpisodesData(
            episodes.splice(0, 10).map((episode) => episode.episode),
            clientData.lang
         )
      )[0] as any[];
      episodesData = [...episodesData, ...tempEpisodesData];
   }
   console.log(dyntubeEpisodes);
   const data = organizeEpisodesData(episodesData, dyntubeEpisodes);

   fs.writeFile("data.json", JSON.stringify(data), (err) => {
      if (err) {
         console.error("Error writing data to file:", err);
      } else {
         console.log("Data written to file successfully!");
      }
   });

   console.log(data);
   return (
      <main>
         <AcademyApp videoData={data} />
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
