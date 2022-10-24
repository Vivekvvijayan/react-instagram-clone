

function PostProfile({ u_name, u_image }) {
  return (
    <div className="left flex items-center">
      <div className="bg-red-200 w-10 h-10 lg:h-10 lg:w-10 rounded-full flex justify-center items-center ">
        <img
          src={u_image}
          alt=""
          className="rounded-full p-0.5 cursor-pointer"
        />
      </div>
      <div className="flex flex-col items-baseline p-2">
        <p className=" text-base lg:text-base font-semibold">{u_name}</p>
       
      </div>
    </div>
  );
}

export default PostProfile;


