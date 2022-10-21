import { signInWithPopup,GoogleAuthProvider, getAuth } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
function Login() {
  const { setAuthUser } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const handleLogin = () => {
    signInWithPopup(auth, provider).then((result) => {
      setAuthUser(result);
     
    });
  };
  return (
    <div className="w-full h-full min-h-[100vh] flex flex-col justify-center items-center">
      <img
        src="/instagram.png"
        alt=""
        className="w-[50%] lg:w-[20%] mb-5 lg:mb-10"
      />

      <button
        className="w-3/6 h-12 p-2 rounded-3xl bg-[#0095f6] lg:w-1/5 text-white font-semibold"
        onClick={handleLogin}
      >
        Log In With Google
      </button>
    </div>
  );
}

export default Login;
