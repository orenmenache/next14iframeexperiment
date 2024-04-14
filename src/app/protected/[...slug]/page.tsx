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
   console.log("clientName", clientName);
   console.log("userId", userId);
   console.log("userName", userName);
   if (!(await userExists(userId, userName))) {
      return <h1>UnAuthorised</h1>;
   }
   const clientData: Client[] = (
      await getClientData(clientName)
   )[0] as Client[];
   const academiaData = (await getAcademiaData(
      clientName
   )) as OrgenizedEpisodesData[];

   const academiaDataReady: MinifiedChapters[] =
      orgenizeAcademiaData(academiaData);

   return <AcademyApp__CC videoData={academiaDataReady} />;
}

async function userExists(clientId: string, clientName: string) {
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
