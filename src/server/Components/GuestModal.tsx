"use client";

import { Button, Modal } from "flowbite-react";
import { useEffect, useState } from "react";

type PropsParam = {
   showModal: boolean;
   setShowModal: Function;
};

export default function GuestModal({ showModal, setShowModal }: PropsParam) {
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
            <Modal.Footer>
               <div className="flex justify-around">
                  <div>
                     <Button onClick={() => setShowModal(false)}>Log In</Button>
                  </div>
                  <div>
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
