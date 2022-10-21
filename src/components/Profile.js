import { faker } from "@faker-js/faker";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import ImageProfile from "./ImageProfile";
import {db} from '../firebase'
import { collection, getDoc } from 'firebase/firestore'
import { handleLogOut } from "../utils/Logout";
const postRef = collection(db,"posts")

function Profile() {
  const [image, setImage] = useState([]);
  const { authUser } = useContext(AuthContext);
  useEffect( () => {

    //  getDoc(postRef).then(result => {
    //   if(result.exists){
    //     console.log(result);
    //   }
    //  })
   

  }, []);

  return (
    <div className="w-full mb-20 lg:mb-5 overflow-x-hidden lg:w-full h-auto lg:h-auto max-h-auto flex mt-5 min-h-screen lg:items-center flex-col lg:mt-16">
      <div className=" w-[100%] lg:w-[60%] lg:h-[200px] p-5 flex justify-center lg:justify-between items-center border-b border-zinc-300  lg:p-3">
        <img
          src={authUser.photoURL}
          alt=""
          className="rounded-full h-20 lg:h-40 border border-zinc-400 p-3"
        />

        <div className="w-full lg:w-[600px] ">
          <div className="flex flex-col justify-center items-center lg:w-[650px] lg:flex-row  ">
            <h2 className="mr-7 text-2xl lg:text-3xl font-light">
              {authUser.displayName}
            </h2>
            <button className="w-2/3 h-10 mt-2 lg:mt-0 lg:w-1/4 lg:h-12 border rounded-sm border-[#010101]">
              Edit Profile
            </button>
            <button className=" lg:hidden w-1/3 h-8 mt-2 lg:mt-0 lg:w-2/4 lg:h-12 border rounded-sm border-[#010101]" onClick={handleLogOut}>
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* image section */}

      <div class="grid grid-cols-3 lg:grid-rows-2 grid-flow-row gap-x-3 lg:gap-2 gap-y-14 lg:gap-y-14 lg:mt-20 h-auto lg:overflow-y-hidden">
        {image.map((i) => (
          <ImageProfile src={i.src} likes={i.likes} />
        ))}
      </div>
    </div>
  );
}

export default Profile;
