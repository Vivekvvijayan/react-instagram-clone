
function MiniProfile({ profileImage,uname,fname }) {
  return (
    <div className="flex justify-between">
        <div className="flex">

        <img src={profileImage !== '' ? profileImage : '/avatar-no.jpg'} alt="" className="h-14 rounded-full border border-slate-200 p-1" />
        <div className="flex flex-col justify-start ml-3">
            <p className="text-lg font-semibold">{uname}</p>
            <p className="text-base font-semibold text-slate-400">{fname}</p>
        </div>
        </div>
        <p className="text-base text-[#0095f6] cursor-pointer">Switch</p>
    </div>
  )
}

export default MiniProfile