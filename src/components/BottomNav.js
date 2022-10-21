import { faker } from "@faker-js/faker"
import { AuthContext } from "../Context/AuthContext";
import { Link } from 'react-router-dom'
import { useContext } from "react";
function BottomNav() {
  const {authUser} = useContext(AuthContext)
  return (
    <div className="w-full h-16 p-2 flex justify-around items-center  bg-white border-t border-zinc-100 fixed bottom-0 left-0 lg:hidden">
        <Link to="/">
        <img
          src="/home.png"
          alt=""
          className="h-6 mr-5"
          />
          </Link>
          <Link to="/search">
        <img
          src="/search-interface-symbol.png"
          alt=""
          className="h-6 mr-5"
          />
          </Link>
          <img
            src="/video.png"
            alt=""
            className="h-6 mr-5"
          />
        <img
          src="/hearth.png"
          alt=""
          className="h-6 mr-5"
        />
        <Link to="/profile">
        <img
          src={authUser.photoURL}
          alt=""
          className="h-6 mr-5 rounded-full"
          />
          </Link>
    
    </div>
  )
}

export default BottomNav