function SuggestionComponent({ name, email, profileImage }) {

  return (
    <div className="flex justify-between mt-5 items-center">
      <div className="flex">
        <img
          src={profileImage !== "" ? profileImage : "/avatar-no.jpg"}
          alt=""
          className="rounded-full h-10"
        />

        <div className="flex flex-col pl-3 ">
          <p className="text-base font-semibold">{name}</p>
          <p className="font-medium text-base text-slate-500 truncate">
            followed by {email}
          </p>
        </div>
      </div>

      <p className="text-base text-right text-[#0095f6] cursor-pointer">
        Follow
      </p>
    </div>
  );
}

export default SuggestionComponent;
