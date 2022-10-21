import Feed from "./components/Feed";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Profile from "./components/Profile";
import { Routes, Route, useNavigate } from "react-router-dom";
import BottomNav from "./components/BottomNav";
import Login from "./components/Login";
import { useEffect, useContext } from "react";
import "./firebase";
import { getAuth } from "firebase/auth";
import { AuthContext } from "./Context/AuthContext";

function App() {
  const navigate = useNavigate();
  const { authUser, setAuthUser } = useContext(AuthContext);
  useEffect(() => {
    getAuth().onAuthStateChanged((user) => {
      if (!user) {
        setAuthUser({});
      } else {
        setAuthUser(user);
        navigate("/");
      }
    });
  }, [authUser,setAuthUser]);
  return (
    <>
      {authUser.accessToken ? (
        <div className="w-full bg-zinc-50 flex flex-col justify-center items-center relative">
          <Header />
          <section className="flex flex-col w-full lg:w-5/6 min-w-[300px] justify-around">
            <Routes>
              <Route path="/" element={<Feed />} />
              <Route path="profile" element={<Profile />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </section>
          <BottomNav />
          <Modal />
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
