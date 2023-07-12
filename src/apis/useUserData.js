import { useEffect, useState } from "react";
import { authService } from "./firebaseService";
import { onAuthStateChanged } from "firebase/auth";
export const useUserData = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      setUser(user);
    });
  }, []);

  return user;
};
