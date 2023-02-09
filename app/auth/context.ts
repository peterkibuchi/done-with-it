import { createContext } from "react";

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

const AuthContext = createContext<ContextType | any>({ user: {} });

export default AuthContext;
