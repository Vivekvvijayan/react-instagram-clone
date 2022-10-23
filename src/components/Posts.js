import Post from "./Post";
import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

const postRef = collection(db, "posts");

function Posts() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    onSnapshot(
      query(collection(db, "posts"), orderBy("timeStamp", "desc")),
      (snapshot) => {
        setPost(snapshot.docs);
      }
    );
  }, [db]);

  return (
    <div className="mb-5 h-[calc(100%-118px)] lg:h-auto mt-0">
      {post.length > 0 ? (
        post.map((post) => (
          <Post
            key={post.id}
            postID={post.id}
            u_image={post.data().profileImage}
            u_name={post.data().username.toLowerCase()}
            postImage={post.data().image}
            // likesNo={post.data().likesNo}
            time={post.data().timeStamp}
            caption={post.data().caption}
            likedUsers={post.data().likedUsers}
            comments={post.data().comments}
          />
        ))
      ) : (
        <p className="text-lg text-gray-600 text-center mt-10">
          {post === 0 ? (
            <span className="font-bold text-center">No posts</span>
          ) : (
            <ClipLoader loading color="gray" className="mt-20" />
          )}
        </p>
      )}
      { post && <p className="font-semibold text-center text-zinc-600 p-3">No more posts..</p>}
    </div>
  );
}

export default Posts;
