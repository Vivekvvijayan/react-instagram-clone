import { useState, useContext, useEffect } from "react";
import PostProfile from "./PostProfile";
import Moment from "react-moment";
import ClipLoader from "react-spinners/ClipLoader";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../Context/AuthContext";
import Comment from "./Comment";

import { Popover } from "@headlessui/react";

function Post({
  postID,
  u_image,
  u_name,
  postImage,
  likesNo,
  time,
  caption,
  likedUsers,
  comments,
}) {
  const { authUser } = useContext(AuthContext);
  const [liked, setLiked] = useState(likedUsers?.includes(authUser.email));
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(true);

  // handleLike

  const handleLike = () => {
    setLiked(true);

    updateDoc(doc(db, "posts", postID), {
      likedUsers: [...likedUsers, authUser.email],
    });
  };

  const handleUnlike = () => {
    setLiked(false);

    updateDoc(doc(db, "posts", postID), {
      likedUsers: likedUsers.filter((user) => user !== authUser.email),
    });
  };

const [firstLikedMan, ...rest] = likedUsers.reverse();
console.log(rest);

  // handlecomment feature

  const handleComment = async () => {
    await updateDoc(doc(db, "posts", postID), {
      comments: [
        ...comments,
        {
          username: authUser.displayName,
          c_image: authUser.photoURL,
          time: Timestamp.now(),
          comment: comment,
        },
      ],
    });
    setComment("");
  };

  return (
    <div className="w-full max-h-5/6 min-h-3/6 h-auto bg-white mt-5 lg:mt-4 border-zinc-200 lg:border lg:border-zinc-200 lg:rounded-lg relative">
      {/* top of post */}
      <div className="top flex justify-between items-center h-16 lg:h-20 p-3 border-b border-zinc-300 ">
        <PostProfile u_name={u_name} u_image={u_image} />

        {authUser.displayName.toUpperCase() === u_name.toUpperCase() ? (
          <MyPopover authUser={authUser} username={u_name} postID={postID} />
        ) : (
          <img src="/dots.png" alt="" className="h-6 lg:h-8 cursor-pointer" />
        )}
      </div>

      {/* middle */}

      <div className="post_image max-h-[500px] lg:max-h-[1000px] min-h-[250px] w-100 h-auto object-cover overflow-hidden cursor-pointer">
        <img
          className="w-full h-full text-center"
          src={postImage}
          alt=""
          onDoubleClick={() => !liked && handleLike()}
        />
      </div>

      {/* bottom  */}

      <div className="ml-3 p-1">
        <div className="reaction flex justify-between mt-4">
          <div className="left flex justify-between w-28 lg:-32">
            {/* render red heart accounrding to checking  */}
            {!liked === true ? (
              <img
                src="/hearth.png"
                alt=""
                className="h-6 lg:h-8 cursor-pointer"
                onClick={handleLike}
              />
            ) : (
              <img
                src="/redhearth.png"
                alt=""
                className="h-6 lg:h-8 cursor-pointer"
                onClick={handleUnlike}
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
          <div className="pr-2">
            <img src="/save.png" alt="" className="h-6 lg:h-8 cursor-pointer" />
          </div>
        </div>
        {/* <p className=" text-base lg:text-lg font-semibold mt-3">
          {likes === 0 ? " No Likes" : likes + " Likes"}
        </p> */}

        <p className=" text-base lg:text-lg font-semibold mt-3 flex">
          {likedUsers.length === 0 ? " No likes" : likedUsers.length + " likes"}

          <p className="ml-3 text-[14px] font-semibold">
            {likedUsers.length > 0 &&
              (firstLikedMan != authUser.email
                ? firstLikedMan.split("@")[0]
                : "") + (rest.length === 0 ? "" : " and more likes")}
          </p>
        </p>

        <p className="font-semibold text-base  lg:text-base lg:mt-3">
          {caption}
        </p>
        <p className="font-light text-[10px] lg:text-sm mt-2 text-zinc-500">
          <Moment fromNow interval={1000}>
            {time?.toDate()}
          </Moment>
        </p>

        <div className="w-full min-h-0 max-h-24 h-auto pr-3 lg:p-0 lg:min-h-0 lg:max-h-24 lg:h-auto overflow-y-auto scrollbar-none mt-1">
          {comments.length > 0 &&
            comments.map((e) => (
              <Comment
                c_image={e.c_image}
                username={e.username}
                time={e.time}
                comment={e.comment}
              />
            ))}
        </div>

        <div className="comment flex mt-5 mb-2 border-t border-zinc-200 pt-3 w-full justify-between items-center">
          <img src="/emojy.png" alt="" className=" h-6 lg:h-8" />
          <input
            type="text"
            name="comment"
            placeholder="Add a comment..."
            id=""
            className="flex-grow text-sm lg:text-lg outline-none pl-3 pr-3"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          />

          <button
            disabled={comment.trim(" ") === ""}
            className="pr-3 text-sm lg:text-lg font-semibold text-[#0095f6] lg:cursor-pointer bg-none"
            onClick={handleComment}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;

function MyPopover({ postID }) {
  const handleDeletePost = async (postID) => {
    await deleteDoc(doc(db, "posts", postID));
  };

  return (
    <Popover className="">
      {({ open }) => (
        /* Use the `open` state to conditionally change the direction of the chevron icon. */
        <>
          <Popover.Button className="text-white outline-none">
            <img src="/dots.png" alt="" className="h-6 lg:h-8 cursor-pointer" />
          </Popover.Button>
          <Popover.Panel className="flex flex-col pr-1 absolute right-0">
            <button
              className="bg-[#efedef] p-3 text-gray font-semibold rounded-lg shadow-md"
              onClick={() => {
                handleDeletePost(postID);
              }}
            >
              Delete Post
            </button>
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
}
