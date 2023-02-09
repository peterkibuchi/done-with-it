import jwtDecode, { JwtPayload } from "jwt-decode";
import { useContext } from "react";

import AuthContext from "./context";
import authStorage from "./storage";

interface User {
  email: string;
  iat: number;
  name: string;
  userId: number;
}

interface ContextType {
  user: User;
  setUser: (user: Object | null) => void;
  logout: () => void;
}

const useAuth = () => {
  const { user, setUser } = useContext<ContextType>(AuthContext);

  const login = async (authToken: string) => {
    const currentUser = jwtDecode<JwtPayload>(authToken);
    setUser(currentUser);
    await authStorage.storeToken(authToken);
  };

  const logout = async () => {
    setUser(null);
    await authStorage.removeToken();
  };

  return { user, login, logout };
};

export default useAuth;
