import Post from "./Post";
import { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";

function Posts() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    setPost(
      [...Array(10)].map((post) => ({
        u_image: faker.image.avatar(),
        u_name: faker.name.fullName(),
        postImage: faker.image.abstract(1234, 2345,true) ,
        likes: faker.random.numeric(),

        time: faker.date.recent(1).getHours(),
        likePersonsNo: faker.random.numeric(),
        likedPersonName: faker.name.fullName(),
      }))
    );
  }, []);

  return (
    <div className="mb-5">
      {post.length > 0 ? (
        post.map((e) => (
          <Post
            u_image={e.u_image}
            u_name={e.u_name}
            postImage={e.postImage}
            likeNo={e.likes}
            time={e.time}
            likePersonsNo={e.likePersonsNo}
            likedPersonName={e.likedPersonName}
          />
        ))
      ) : (
        <p className="text-lg text-gray-600 text-center">Loading...</p>
      )}
      <Post />
    </div>
  );
}

export default Posts;
