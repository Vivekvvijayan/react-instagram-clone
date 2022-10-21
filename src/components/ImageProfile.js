function ImageProfile({ src, likes }) {
  return (
    <div className=" w-[150px] h-[140px] lg:w-[300px] lg:h-[300px] object-cover bg-zinc-100 lg:cursor-pointer">
      <div className="flex items-center justify-center w-full h-full object-cover">
        <img src={src} alt="" className="w-full h-full" />
      </div>
      <div className="flex w-full h-12 bg-black/50 justify-center mt-1 items-center">
        <img src="/heart-white.png" alt="" className="h-6" />
        <p className="text-center font-bold text-white text-2xl ml-2">
          {likes}
        </p>
      </div>
    </div>
  );
}

export default ImageProfile;
