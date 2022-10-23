import { signOut, getAuth } from "firebase/auth";

export const handleLogOut = () => {
  const auth = getAuth();
  localStorage.removeItem("key")
  signOut(auth);

};
