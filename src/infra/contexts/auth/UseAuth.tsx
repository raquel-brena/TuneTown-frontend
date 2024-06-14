import { createContext, useContext } from "react";
import { User } from "../../../domain/types/User";

type AuthContextType = {
  user: User | null;
  loading: boolean;
  handleLogin: (data: { email:string, password:string }) => Promise<void>;
  handleLogout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  {user: null, loading: true, handleLogin: async () => {}, handleLogout: () => {}} as AuthContextType
);

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("UseAuth must be used within a AuthProvider");
  }

  return context;
}
