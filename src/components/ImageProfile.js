function ImageProfile({ src, likes }) {
  return (
    <div className=" w-[150px] h-[140px] lg:w-[300px] lg:h-[300px] object-cover lg:cursor-pointer group hover:bg-black/60">
      <div className="flex items-center justify-center w-full h-full object-cover">
        <img src={src} alt="" className="w-full h-full" />
        
        <p className="text-center font-bold text-white text-2xl ml-2 mb-2 absolute hidden group-hover:block">
        <img src="/heart-white.png" alt="" className="h-6" />
          {likes}
        </p>
      </div>
   
    </div>
  );
}

export default ImageProfile;
