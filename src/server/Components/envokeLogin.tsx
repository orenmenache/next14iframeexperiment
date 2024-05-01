"use client";
import { Button } from "flowbite-react";
import React from "react";

type ParamType = {
   targetOrigin: string;
   url: string;
   buttonText: string;
   setShowModal: Function;
};

export default function LoginTrigger({
   targetOrigin,
   url,
   buttonText,
   setShowModal,
}: ParamType) {
   const sendMessage = () => {
      setShowModal(false);
      console.log(url);
      console.log(targetOrigin);
      // Make sure the parent URL (targetOrigin) is correct
      window.postMessage(
         {
            message: "openLogin",
            url: url,
         },
         targetOrigin
      );
   };

   return <Button onClick={sendMessage}>{buttonText}</Button>;
}

/**
 *  ?>
    <style>
        @media (max-width: 430px) 
        .responsive-iframe {
         width: 100vw;
     }
 }
</style>
<script>
window.addEventListener(
"message",
function (event) {
if(event.origin !== "https://clownfish-app-atszh.ondigitalocean.app"){
 console.log("rejected: " + event.origin);
 console.log(event.data);
 return;
}
if (event.data.message === "openLogin") {
             console.log(event.data);
             var loginButton = document.querySelector("a.ld-login");
             if(!loginButton){
                 console.log("could not find login button");
             }
             loginButton.click();
           //window.location.replace(event.data.url);
           //window.location.reload();
 }
},
false
);
</script>
<?php
 */
