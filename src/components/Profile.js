import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import ImageProfile from "./ImageProfile";

function Profile() {
  const [image, setImage] = useState([]);
  useEffect(() => {
    setImage([...Array(10)].map((e) => ({
        src:faker.image.animals(0, 0, true),
        likes:faker.random.numeric({min:0,max:100})
    })));
  
  }, []);

  return (
    <div className="w-full h-auto flex min-h-screen justify-self-auto items-center flex-col mt-16">
      <div className="w-[60%] h-[200px] flex justify-between items-center border-b border-zinc-300  p-3">
        <img
          src="/logo192.png"
          alt=""
          className="rounded-full h-40 border border-zinc-400 p-3"
        />

        <div className="w-[600px] ">
          <div className="flex justify-center items-center w-[600px] ">
            <h2 className="mr-6 text-5xl font-light ">
              vivek_aravikulathillam
            </h2>
            <button className="w-2/4 h-12 border rounded-sm border-black">
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* image section */}

      <div class="grid grid-cols-3 grid-rows-2 grid-flow-row gap-4 gap-y-20 mt-20">
        {image.map((i) => (
          <ImageProfile src={i.src} likes={i.likes} />
        ))}
      </div>
    </div>
  );
}

export default Profile;
