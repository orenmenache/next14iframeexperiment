"use client";
import { Button } from "flowbite-react";
import React from "react";

type ParamType = {
   targetOrigin: string;
};

export default function LoginTrigger({ targetOrigin }: ParamType) {
   const sendMessage = () => {
      // Make sure the parent URL (targetOrigin) is correct
      window.parent.postMessage(
         {
            message: "openLogin",
            url: "http://127.0.0.1:5500/index.html#login",
         },
         targetOrigin
      );
   };

   return <Button onClick={sendMessage}>Open Parent Login</Button>;
}
