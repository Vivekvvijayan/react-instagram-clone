import { faker } from "@faker-js/faker";
import { Menu } from "@headlessui/react";
import { useContext } from "react";
import { ModalContext } from "../Context/ModalContext";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { handleLogOut } from '../utils/Logout'
function Header() {
  const { setIsOpen } = useContext(ModalContext);

  return (
    <div className="flex justify-between lg:justify-evenly p-4 w-full bg-white border-b-2 sticky top-0 left-0 right-0">
      <Link to="/" className="">
        <div className="header_logo w-32 lg:w-36 flex items-center">
          <img src="/instagram.png" alt="" className="object-cover" />
          <img src="/arrowdown.png" alt="" className=" h-4 lg:h-6" />
        </div>
      </Link>
      <div className="hidden input_box w-3/4 lg:h-12 lg:flex justify-around bg-[#e5e5e5] items-center p-2 rounded-lg lg:w-1/5">
        <img src="/search.png" alt="" className="h-5" />
        <input
          type="search"
          placeholder="Search"
          className="w-full h-10 bg-transparent p-3 outline-none"
        />
      </div>

      <div className="header_right flex justify-evenly w-1/5 items-center   ">
        <img
          src="/home.png"
          alt=""
          className=" hidden lg:w-8 lg:block cursor-pointer"
        />
        <img
          src="/message.png"
          alt=""
          className=" w-6 lg:w-8 mr-5 lg:mr-0 cursor-pointer"
        />
        <img
          src="/upload.png"
          alt=""
          className="w-6 lg:w-8 cursor-pointer"
          onClick={() => setIsOpen(true)}
        />

        <span className="w-8 h-8 relative hidden lg:block">
          <img
            src="/hearth.png"
            alt=""
            className="hidden lg:w-8 lg:block cursor-pointer"
          />
          <span className="w-5 h-5 bg-[red] absolute -top-2 -right-2 rounded-full flex justify-center items-center text-white font-semibold ">
            {faker.datatype.number({ max: 9 })}
          </span>
        </span>
        <MyDropdown />
      </div>
    </div>
  );
}

export default Header;

export function MyDropdown() {
  const { authUser } = useContext(AuthContext);
 
  
  return (
    <Menu>
      <Menu.Button className=" hidden lg:relative lg:block ">
        <img
          src={authUser.photoURL}
          alt=""
          className="w-8 cursor-pointer rounded-full border border-zinc-500"
        />
      </Menu.Button>
      <Menu.Items className="flex p-3 flex-col rounded-lg justify-around z-1000 absolute top-[100%] -left[100%] bg-white w-[330px] h-[226px] shadow-lg mt-1">
        <Menu.Item>
          {({ active }) => (
            <Link className={`${active && "bg-zinc-200"}`} to="/profile">
              <div className="w-full flex h-12 items-center p-2">
                <img src="/user.png" alt="" className="h-7" />
                <p className="ml-2 font-semibold"> Profile</p>
              </div>
            </Link>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && "bg-zinc-100 "}`}
              href="/account-settings"
            >
              <div className="w-full flex h-12 items-center p-2">
                <img src="/save.png" alt="" className="h-7" />
                <p className="ml-2 font-semibold"> Saved</p>
              </div>
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && "bg-zinc-100"}`}
              href="/account-settings"
            >
              <div className="w-full flex h-12 items-center p-2">
                <img src="/setting.png" alt="" className="h-7" />
                <p className="ml-2 font-semibold"> Settings</p>
              </div>
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <Link
              className={`${active && "bg-zinc-100"}`}
              to="/login"
            >
              <div className="w-full flex border-t border-black-100 items-center h-12 p-2" onClick={handleLogOut}>
                <p className="ml-4 font-semibold"> Logout</p>
              </div>
            </Link>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}
