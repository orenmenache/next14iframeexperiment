import AcademyApp from "@/server/Components/AcademyApp";
import Drawer from "@/server/Components/Drawer";
import FullAcademy from "@/server/Components/FullAcademy";
import Video from "@/server/Components/Video";
import VideoView from "@/server/Components/VideoView";
import getAcademiaData from "@/server/Functions/getAcademiaData";
import getClientData from "@/server/Functions/getClientData";
import getClientVideos from "@/server/Functions/getClientVideos";
import getEpisodesData from "@/server/Functions/getEpisodeData";
import organizeEpisodesData, {
   MinifiedChapters,
   MinifiedEpisodes,
} from "@/server/Functions/organizeEpisodesData";
import orgenizeAcademiaData from "@/server/Functions/orgenizeAcademiaData";
import {
   Client,
   DyntubeVideo,
   OrgenizedEpisodesData,
} from "@/server/types/dbSchemes";
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
   return <main></main>;
}
