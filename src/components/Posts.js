import Post from "./Post";
import { useState, useEffect } from "react";

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
        console.log(snapshot.docs);
      }
    );
  }, [db]);

  return (
    <div className="mb-5">
      {post.length > 0 ? (
        post.map((post) => (
          <Post
            key={post.id}
            u_image={post.data().profileImage}
            u_name={post.data().username}
            postImage={post.data().image}
            likeNo={10}
            time={post.data().timeStamp}
            caption={post.data().caption}
          />
        ))
      ) : (
        <p className="text-lg text-gray-600 text-center">Loading...</p>
      )}
    </div>
  );
}

export default Posts;
