"use client";
import { useEffect } from "react";
import { Carousel } from "flowbite-react";
import Image from "next/image";
type PageProps = {
   params: { videos: string[] };
};

export default function FullAcademy({ params }: PageProps) {
   useEffect(() => {
      // Check if the script has already been added to prevent duplicates
      if (window._dyntube_v1_init) return;

      window._dyntube_v1_init = true; // Mark as initialized

      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src = "https://embed.dyntube.com/v1.0/dyntube.js";

      // Append the script to the head
      document.head.appendChild(script);

      // Cleanup function to remove script when component unmounts
      return () => {
         document.head.removeChild(script);
      };
   }, []); // Empty dependency array means this effect runs once on mount

   return (
      <div style={{ display: "flex", height: 500 }}>
         <Carousel slide={false}>
            {params.videos.map((video) => {
               return <div key={video} data-dyntube-key={video}></div>;
            })}
         </Carousel>
      </div>
   );
}
