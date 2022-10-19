import { useState } from "react";
import PostProfile from "./PostProfile";

function Post({
  u_image,
  u_name,
  postImage,
  likeNo,
  time,
  likePersonsNo,
  likedPersonName,
}) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(+likeNo);

  return (
    <div className="w-full max-h-5/6 min-h-3/6 h-auto bg-white mt-4 border border-zinc-200 rounded-lg">
      {/* top of post */}
      <div className="top flex justify-between items-center h-20 p-3 border-b border-zinc-300">
        <PostProfile u_name={u_name} u_image={u_image} />
        <img src="/dots.png" alt="" className="h-8 cursor-pointer" />
      </div>

      {/* middle */}

      <div className="post_image max-h-[500px] min-h-[250px] w-100 h-auto object-contain overflow-hidden cursor-pointer">
        <img
          className="w-100 h-100 text-center"
          src={postImage}
          alt="loading..."
          onDoubleClick={() => {
            setLiked(!liked);
            setLikes(!liked ? likes + 1 : likes - 1);
          }}
        />
      </div>

      {/* bottom  */}

      <div className="ml-3 p-1">
        <div className="reaction flex justify-between mt-4">
          <div className="left flex justify-between w-32">
            {/* render red heart accounrding to checking  */}
            {!liked ? (
              <img
                src="/hearth.png"
                alt=""
                className="h-8 cursor-pointer"
                onClick={() => {
                  setLiked(!liked);
                  setLikes(!liked ? likes + 1 : likes - 1);
                }}
              />
            ) : (
              <img
                src="/redhearth.png"
                alt=""
                className="h-8 cursor-pointer"
                onClick={() => {
                  setLiked(!liked);
                  setLikes(!liked ? likes + 1 : likes - 1);
                }}
              />
            )}

            <img src="/comment.png" alt="" className="h-8 cursor-pointer" />
            <img src="/message.png" alt="" className="h-8 cursor-pointer" />
          </div>
          <div>
            <img src="/save.png" alt="" className="h-8 cursor-pointer" />
          </div>
        </div>
        <p className="text-lg font-semibold mt-3">{likes} Likes</p>

        <p className="font-light mt-3">
          Liked by
          <span className="font-semibold">
            {likedPersonName} and {likePersonsNo} others...
          </span>
        </p>
        <p className="font-light text-sm mt-2 text-zinc-500">
          {time === 0 ? " Few minutes ago" : time + " hours ago"}
        </p>

        <div className="comment flex mt-5 mb-2 border-t border-zinc-200 pt-3 w-full justify-between">
          <img src="/emojy.png" alt="" className="h-8" />
          <input
            type="text"
            name="comment"
            placeholder="Add a comment..."
            id=""
            className="flex-grow text-lg outline-none pl-3 pr-3"
          />
          <p className="pr-2 text-lg font-semibold text-[#0095f6] cursor-pointer">
            Post
          </p>
        </div>
      </div>
    </div>
  );
}

export default Post;
