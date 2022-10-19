function Story({ image, uname }) {
  return (
    <div className="ml-3 flex flex-col justify-center items-center cursor-pointer">
      <div className=" w-16 h-16 object-contain rounded-full bg-gradient-to-t from-orange-400 via-red-500 to-pink-500">
        <img
          src={image}
          alt=""
          className=" h-16 rounded-full p-0.5 z-10 "
        />
      </div>
      <p className="w-16 truncate text-sm text-center">{uname}</p>
    </div>
  );
}

export default Story;
