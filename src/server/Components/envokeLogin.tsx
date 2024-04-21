"use client";
import { Button } from "flowbite-react";
import React from "react";

type ParamType = {
   targetOrigin: string;
   client_url: string;
};

export default function LoginTrigger({ targetOrigin, client_url }: ParamType) {
   const sendMessage = () => {
      console.log(client_url);
      // Make sure the parent URL (targetOrigin) is correct
      window.parent.postMessage(
         {
            message: "openLogin",
            url: client_url,
         },
         targetOrigin
      );
   };

   return <Button onClick={sendMessage}>Open Parent Login</Button>;
}
