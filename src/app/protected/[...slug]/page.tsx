import AcademyApp__CC from "@/server/Components/AcademyApp";
import getAcademiaData from "@/server/Functions/getAcademiaData";
import getClientData from "@/server/Functions/getClientData";
import { MinifiedChapters } from "@/server/Functions/organizeEpisodesData";
import orgenizeAcademiaData from "@/server/Functions/orgenizeAcademiaData";
import { Client, OrgenizedEpisodesData } from "@/server/types/dbSchemes";
import axios from "axios";
import React from "react";

type SearchParams = {
   clientId: string;
   clientName: string;
   client: string;
};

type PageProps = {
   params: { slug: string[] };
};

export default async function Page({ params }: PageProps) {
   const clientName = decodeURIComponent(params.slug[0]);
   const userId = params.slug[1];
   const userName = params.slug[2];
   if (!clientName) return <h1>No client</h1>;
   if (!userId || !userName) return <h1>No user id or no user name</h1>;
   const user = await userExists(userId, userName);
   if (!user) {
      return <h1>UnAuthorised</h1>;
   }
   const clientData: Client[] = (
      await getClientData(clientName)
   )[0] as Client[];
   const academiaData = (await getAcademiaData(
      clientName
   )) as OrgenizedEpisodesData[];

   let academiaDataReady: MinifiedChapters[] =
      orgenizeAcademiaData(academiaData);
   console.log(user);
   if (user === "guest") {
      academiaDataReady = sanitizeAcademiaData(academiaDataReady);
   }

   const client_url = {
      login_url: clientData[0].login_url,
      register_url: clientData[0].register_url,
   };

   return (
      <AcademyApp__CC videoData={academiaDataReady} client_url={client_url} />
   );
}

async function userExists(
   clientId: string,
   clientName: string
): Promise<"user" | "guest" | false> {
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
      return response.data.message;
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

function sanitizeAcademiaData(academiaData: MinifiedChapters[]) {
   for (let i = 0; i < academiaData.length; i++) {
      for (let j = 2; j < academiaData[i].episodes.length; j++) {
         academiaData[i].episodes[j].key = "";
      }
   }
   return academiaData;
}
