
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useContext } from 'react'
import { ModalContext } from "../Context/ModalContext";

function Modal() {
//   let [isOpen, setIsOpen] = useState(true);
  const {isOpen,setIsOpen} = useContext(ModalContext)

  return (
    // Use the `Transition` component at the root level
    <Transition  show={isOpen} as={Fragment}>
      <Dialog as="div" onClose={() => setIsOpen(false)}>
        {/*
          Use one Transition.Child to apply one transition to the backdrop...
        */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className=" fixed inset-0 bg-black/30 w-100 h-100 ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95 opacity-0"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0 scale-95 opacity-0"
            >
              <div className="w-2/6 h-3/4 bg-white absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 rounded-xl">
                   <Dialog.Title as="h2" className="text-lg font-semibold leading-6 p-4 w-100 border-b border-gray-200 text-gray-900 text-center">Create New Post</Dialog.Title>
                <div className="w-full h-full flex flex-col justify-center items-center  ">
                 
                 <div className="w-full h-50 flex flex-col justify-center items-center">

                  <div className="w-25 h-32 object-cover">
                    <img src="/media.png" alt="" className="h-full w-full" />
                  </div>
                 </div>
                  <p className="font-light text-3xl">
                    Drag photos and videos here
                  </p>
                  <button type="file" className=" w-2/6 h-10 rounded-lg bg-[#0095f6] text-white font-semibold text-lg outline-none mt-4">
                    Select From Computer
                  </button>
                </div>
              </div>
            </Transition.Child>
            <img src="/close.png" alt=""className="absolute top-10 right-10 cursor-pointer" onClick={() => setIsOpen(false)} />
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}
export default Modal;
