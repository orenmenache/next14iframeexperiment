"use client";

import { Button, Modal } from "flowbite-react";
import { useEffect, useState } from "react";
import LoginTrigger from "./envokeLogin";

type PropsParam = {
   showModal: boolean;
   setShowModal: Function;
   url: string;
};

export default function GuestModal({
   showModal,
   setShowModal,
   url,
}: PropsParam) {
   return (
      <>
         <Modal show={showModal} onClose={() => setShowModal(false)}>
            <Modal.Header></Modal.Header>
            <Modal.Body>
               <div className="space-y-6">
                  <div className="text-center">
                     <h1>Dear Guest</h1>
                  </div>
                  <p className="text-center text-base leading-relaxed text-gray-500 dark:text-gray-400">
                     you are welcom to register in order to get full access to
                     our academy.
                  </p>
               </div>
            </Modal.Body>
            <Modal.Footer className="flex justify-center items-center">
               <div className="flex justify-around">
                  <div style={{ marginRight: "15px" }}>
                     <LoginTrigger
                        targetOrigin={
                           "https://traderslab.education/our-courses/"
                        }
                        url={url}
                        buttonText="Log In"
                        setShowModal={setShowModal}
                     />
                  </div>
                  <div style={{ marginLeft: "15px" }}>
                     <Button color="gray" onClick={() => setShowModal(false)}>
                        Register
                     </Button>
                  </div>
               </div>
            </Modal.Footer>
         </Modal>
      </>
   );
}
