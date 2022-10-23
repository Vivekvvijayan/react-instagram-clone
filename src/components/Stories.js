import Story from "./Story";
import {faker} from '@faker-js/faker'
import { useEffect, useState,useContext } from "react";
import { AuthContext } from '../Context/AuthContext'

function Stories() {
  const [stories, setStories] = useState([]);
  const { authUser } = useContext(AuthContext)
  // useEffect(() => {
  //   setStories(
    
  // }, []);

  return (
    <div className=" flex border pr-2 lg:border-gray-200 bg-white h-32 lg:h-32 items-center max-w-5/6 w-full overflow-x-auto rounded-lg scrollbar-none">
       <Story image={authUser.photoURL} uname={authUser.displayName} firstImg={true}/>
      <Story image={faker.image.avatar()} uname={faker.name.fullName()}/>
      <Story image={faker.image.avatar()} uname={faker.name.fullName()}/>
      <Story image={faker.image.avatar()} uname={faker.name.fullName()}/>
      <Story image={faker.image.avatar()} uname={faker.name.fullName()}/>
      <Story image={faker.image.avatar()} uname={faker.name.fullName()}/>
      <Story image={faker.image.avatar()} uname={faker.name.fullName()}/>
      <Story image={faker.image.avatar()} uname={faker.name.fullName()}/>
      <Story image={faker.image.avatar()} uname={faker.name.fullName()}/>
      <Story image={faker.image.avatar()} uname={faker.name.fullName()}/>
      <Story image={faker.image.avatar()} uname={faker.name.fullName()}/>
     
      
    </div>
  );
}

export default Stories;
