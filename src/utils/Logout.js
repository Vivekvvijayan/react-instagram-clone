import { signOut, getAuth } from "firebase/auth";

export const handleLogOut = () => {
  const auth = getAuth();

  signOut(auth);

};
