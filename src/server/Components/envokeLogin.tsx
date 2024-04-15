"use client";
import { Button } from "flowbite-react";
import React from "react";

type ParamType = {
   targetOrigin: string;
};

export default function LoginTrigger({ targetOrigin }: ParamType) {
   const sendMessage = () => {
      // Make sure the parent URL (targetOrigin) is correct
      window.parent.postMessage("openLogin", targetOrigin);
   };

   return <Button onClick={sendMessage}>Open Parent Login</Button>;
}
