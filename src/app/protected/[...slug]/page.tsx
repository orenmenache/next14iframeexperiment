import { MYSQL_DB } from "@/server/classes/MYSQL_DB";
import FullAcademy from "@/server/Components/FullAcademy";
import { runFunctionWithRetry } from "@/server/Functions/RunFunctionWithRetry";
import axios from "axios";
import { headers } from "next/headers";
import React from "react";

type SearchParams = {
   clientId: string;
   clientName: string;
   client: string;
};

type PageProps = {
   params: { slug: string[] };
};

// test

export default async function Page({ params }: PageProps) {
   console.log("You got to search");

   const client = params.slug[0];
   const clientId = params.slug[1];
   const clientName = params.slug[2];
   if (!client) return <h1>No client</h1>;
   if (!clientId || !clientName) return <h1>No clientId or no clientName</h1>;
   let clientVideos: string[] = [];
   if (await clientExists(clientId, clientName)) {
      clientVideos = await getClientVideos();
   }
   console.log(clientVideos);
   return (
      <div style={{ height: "500px", width: "500px" }}>
         <FullAcademy
            params={{
               videos: clientVideos,
            }}
         />
      </div>
   );
}

async function getClientVideos() {
   const db = new MYSQL_DB();
   db.createPool();
   const videos: Video[] = await runFunctionWithRetry(() => {
      return db.SELECT("backoffice.videos", {
         projectId: "77qeGi0Eu9xPv5EcNe8w",
      });
   }, 5);

   //console.log(videosEmbbedString);
   return videos.map((video) => video.channelKey);
}

async function clientExists(clientId: string, clientName: string) {
   try {
      const response = await axios.post(
         "https://traderslab.education/api/v1",
         {
            user_id: Number(clientId),
            user_name: clientName,
         },
         {
            headers: {
               authorization: "GcraeyIJAz8svdo",
               "Content-Type": "application/json",
            },
         }
      );
      return true;
      console.log(response.data);
   } catch (e) {
      console.log(e);
      return false;
   }
}
interface validatedUser {
   ID: string;
   user_login: string;
   user_nicename: string;
   user_email: string;
   user_url: string;
   user_registered: string;
   user_status: string;
   display_name: string;
}

export interface Video {
   id: string;
   duration: number;
   projectId: string;
   accountKey: string;
   region: any;
   captions: any;
   video_key: string;
   channelKey: string;
   privateLink: string;
   hlsLink: string;
   planType: any;
   mp4Url: any;
   mp4Urls: any;
   formats: any;
   hlsUrl: any;
   hlsUrlWeb: any;
   title: string;
   description: any;
   options: any;
   tags: any;
   version: any;
   status: any;
   created: any;
}
