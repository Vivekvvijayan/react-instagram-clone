function Story({ image, uname, firstImg }) {
  return (
    <div className="ml-3 flex flex-col justify-center items-center cursor-pointer relative">
      <div className=" w-16 h-16 object-contain rounded-full bg-gradient-to-t from-orange-400 via-red-500 to-pink-500 relative">
        <img src={image} alt="" className=" h-16 rounded-full p-0.5 z-10 " />
      </div>
      {firstImg && (
        <img
          src="/plus.png"
          className="h-6 absolute right-[50%] bottom-[30%] translate-y-[50%] translate-x-[50%] "
          alt=""
        />
      )}
      <p className="w-18 truncate text-xs text-center pt-3">{uname}</p>
    </div>
  );
}

export default Story;
