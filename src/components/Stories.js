import Story from "./Story";
import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";

function Stories() {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    setStories(
      [...Array(7)].map((profile) => ({
        profileImage: faker.image.avatar(),
        uname: faker.name.fullName(),
      }))
    );
  }, []);

  return (
    <div className=" flex border border-gray-200 bg-white h-36 lg:h-32 items-center max-w-5/6 w-full overflow-x-auto scroll-smooth rounded-lg scrollbar-thin scrollbar-thumb-gray-300">
      {stories.length > 0 &&
        stories.map((element) => (
          <Story image={element.profileImage} uname={element.uname} />
        ))}
    </div>
  );
}

export default Stories;
