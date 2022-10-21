function PostProfile({ u_name, u_image }) {
  return (
    <div className="left flex items-center">
      <div className="bg-red-200 w-10 h-10 lg:h-12 lg:w-12 rounded-full flex justify-center items-center bg-gradient-to-t from-orange-400 via-red-500 to-pink-500">
        <img
          src={u_image}
          alt=""
          className="rounded-full p-0.5 cursor-pointer"
        />
      </div>
      <div className="flex flex-col items-baseline p-2">
        <p className=" text-sm lg:text-base font-semibold">{u_name}</p>
        {/* <p className="text-xs lg:text-sm font-light text-left">
          {faker.address.cityName()},{faker.address.country()}
        </p> */}
      </div>
    </div>
  );
}

export default PostProfile;
