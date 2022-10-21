import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useContext, useState, useRef } from "react";
import { ModalContext } from "../Context/ModalContext";
import { AuthContext } from "../Context/AuthContext";
import { db, storage } from "../firebase";
import { ref, getDownloadURL, uploadString } from "firebase/storage";
import {
  collection,
  addDoc,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";

function Modal() {
  //   let [isOpen, setIsOpen] = useState(true);
  const { isOpen, setIsOpen } = useContext(ModalContext);
  const { authUser } = useContext(AuthContext);
  // console.log(authUser);
  const [selectImage, setSelectImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [caption, setCaption] = useState("");
  const hiddenFileInput = useRef(null);
  const postCollectionRef = collection(db, "posts");

  // handle image selection from storage

  const handleSelectClick = () => {
    hiddenFileInput.current.click();
  };
  // handle image selection
  const handleSelection = (e) => {
    const reader = new FileReader();

    if (e.target.files[0]) {
      setSelectImage(true);
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
    }
  };

  // handle image caption text

  const handlePostCaption = (e) => {
    setCaption(e.target.value);
  };

  // handle upload post

  const handleUpload = async () => {
    setLoading(true);
    const docRef = await addDoc(postCollectionRef, {
      username: authUser.displayName,
      profileImage: authUser.photoURL,
      caption: caption,
      timeStamp: serverTimestamp(),
    });
    console.log("Document Added: " + docRef.id);

    const imageRef = ref(storage, `posts/${docRef.id}/image`);

    await uploadString(imageRef, selectedImage, "data_url").then(
      async (snapshot) => {
        const downloadURL = await getDownloadURL(imageRef);

        await updateDoc(doc(db, "posts", docRef.id), {
          image: downloadURL,
        });
      }
    );
    setSelectedImage("")
    setLoading(false);
    setIsOpen(false);
  };

  return (
    // Use the `Transition` component at the root level
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" onClose={() => setIsOpen(isOpen)}>
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
          <form>
            <div className=" fixed inset-0 bg-black/30 lg:w-100 lg:h-100">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95 opacity-0"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0 scale-95 opacity-0"
              >
                <div className="w-full h-4/6 lg:p-0 lg:w-2/6 lg:h-3/4 bg-white absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 rounded-xl">
                  <Dialog.Title
                    as="h2"
                    className="text-lg font-semibold leading-6 p-4 w-100 border-b border-gray-200 text-gray-900 text-center"
                  >
                    Create New Post
                  </Dialog.Title>

                  <div className=" w-full h-full flex flex-col justify-center items-center  ">
                    <>
                      {!selectImage ? (
                        <>
                          <div className="w-full h-50 flex flex-col justify-center items-center">
                            <div className="w-25 h-32 object-cover">
                              <img
                                src="/media.png"
                                alt=""
                                className="h-full w-full"
                              />
                            </div>
                          </div>

                          <p className="font-light text-3xl">
                            Drag photos and videos here
                          </p>

                          <button
                            type="button"
                            className=" w-3/6 h-12 lg:w-2/6 lg:h-10 rounded-lg bg-[#0095f6] text-white font-semibold text-lg outline-none mt-4"
                            onClick={handleSelectClick}
                          >
                            Select From Computer
                            <input
                              type="file"
                              hidden
                              ref={hiddenFileInput}
                              onChange={handleSelection}
                            />
                          </button>
                        </>
                      ) : (
                        <div className="w-full h-auto flex justify-center flex-col items-center">
                          <div className="w-[80%] min-h-[300px] h-auto object-contain rounded-lg flex justify-center border border-zinc-200">
                            <img
                              src={selectedImage}
                              alt=""
                              className=" h-full"
                            />
                          </div>
                          <input
                            type="text"
                            placeholder="Caption.."
                            className="w-[80%] h-12 mt-3 outline-none border-b border-zinc-200 p-3 text-base text-zinc-600"
                            onChange={handlePostCaption}
                          />
                          <button
                            type="button"
                            className=" w-3/6 h-12 lg:w-2/6 lg:h-10 rounded-lg bg-[#0095f6] text-white font-semibold text-lg outline-none mt-4"
                            onClick={handleUpload}
                          >
                            {!loading ? "Upload" : "Uploading..."}
                          </button>
                        </div>
                      )}
                    </>
                  </div>
                </div>
              </Transition.Child>
              <img
                src="/close.png"
                alt=""
                className="absolute top-10 right-10 cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            </div>
          </form>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}
export default Modal;
