"use client";
import { useState } from "react";

type ParamType = {
   onChangeActiveChapter: Function;
   chapters: string[];
};

export default function Drawer(params: ParamType) {
   const setActiveChapter = params.onChangeActiveChapter;
   const chapters = params.chapters;
   const [isOpen, setIsOpen] = useState(false);
   return (
      <>
         <div className={`drawer-container ${isOpen ? "open" : ""}`}>
            <div className="drawer">
               {chapters.map((chapter, index) => (
                  <button
                     onClick={() => {
                        setActiveChapter(chapter);
                     }}
                     key={chapter}
                  >
                     {chapter}
                  </button>
               ))}
            </div>
            <div className="drawer-icon">
               <div
                  className="toggle-drawer"
                  onClick={() => setIsOpen(!isOpen)}
               >
                  <svg
                     className="open-mark"
                     aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="24"
                     fill="none"
                     viewBox="0 0 24 24"
                  >
                     <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m9 5 7 7-7 7"
                     />
                  </svg>
               </div>
            </div>
         </div>
      </>
   );
}
