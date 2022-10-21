import { useState } from "react";
import PostProfile from "./PostProfile";
import Moment from 'react-moment';
function Post({
  u_image,
  u_name,
  postImage,
  likeNo,
  time,
  likePersonsNo,
  caption,
}) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(+likeNo);

  return (
    <div className="w-full max-h-5/6 min-h-3/6 h-auto bg-white mt-4 border border-zinc-200 rounded-lg">
      {/* top of post */}
      <div className="top flex justify-between items-center h-16 lg:h-20 p-3 border-b border-zinc-300">
        <PostProfile u_name={u_name} u_image={u_image} />
        <img src="/dots.png" alt="" className="h-6 lg:h-8 cursor-pointer" />
      </div>

      {/* middle */}

      <div className="post_image max-h-[500px] min-h-[250px] w-100 h-auto object-cover overflow-hidden cursor-pointer">
        <img
          className="w-full h-full text-center"
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
          <div className="left flex justify-between w-28 lg:-32">
            {/* render red heart accounrding to checking  */}
            {!liked ? (
              <img
                src="/hearth.png"
                alt=""
                className="h-6 lg:h-8 cursor-pointer"
                onClick={() => {
                  setLiked(!liked);
                  setLikes(!liked ? likes + 1 : likes - 1);
                }}
              />
            ) : (
              <img
                src="/redhearth.png"
                alt=""
                className="h-6 lg:h-8 cursor-pointer"
                onClick={() => {
                  setLiked(!liked);
                  setLikes(!liked ? likes + 1 : likes - 1);
                }}
              />
            )}

            <img
              src="/comment.png"
              alt=""
              className="h-6 lg:h-8 cursor-pointer"
            />
            <img
              src="/message.png"
              alt=""
              className="h-6 lg:h-8 cursor-pointer"
            />
          </div>
          <div>
            <img src="/save.png" alt="" className="h-6 lg:h-8 cursor-pointer" />
          </div>
        </div>
        <p className=" text-base lg:text-lg font-semibold mt-3">
          {likes} Likes
        </p>

        <p className="font-semibold text-base  lg:text-base lg:mt-3">
          {caption}
          
        </p>
        <p className="font-light text-[10px] lg:text-sm mt-2 text-zinc-500">
          {/* {time === 0 ? " Few minutes ago" : time + " hours ago"} */}
          <Moment fromNow interval={1000}>
                {
                  time?.toDate()
                }
          </Moment>
        </p>

        <div className="comment flex mt-5 mb-2 border-t border-zinc-200 pt-3 w-full justify-between items-center">
          <img src="/emojy.png" alt="" className=" h-6 lg:h-8" />
          <input
            type="text"
            name="comment"
            placeholder="Add a comment..."
            id=""
            className="flex-grow text-sm lg:text-lg outline-none pl-3 pr-3"
          />
          <p className="pr-2 text-sm lg:text-lg font-semibold text-[#0095f6] cursor-pointer">
            Post
          </p>
        </div>
      </div>
    </div>
  );
}

export default Post;
