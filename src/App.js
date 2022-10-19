import Feed from "./components/Feed";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Profile from "./components/Profile";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="w-full bg-zinc-50 flex flex-col justify-center items-center relative">
      <Header />
      <section className="flex flex-col w-5/6 min-w-[300px] justify-around">
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="profile" element={<Profile />} />  
          
        </Routes>
      </section>
      <Modal />
    </div>
  );
}

export default App;
