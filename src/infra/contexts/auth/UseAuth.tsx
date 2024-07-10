import { createContext, useContext } from "react";
import { UserWithProfile } from "../../../domain/types/User";
import { UserRegister, userSpotifyToken } from "../../../domain/types/Auth";

type AuthContextType = {
  user: UserWithProfile | null;
  posts: any[];
  loading: boolean;
  handleLogin: (data: { email: string; password: string }) => Promise<void>;
  handleRegister: (data: UserRegister) => Promise<void>;
  handleLogout: () => void;
  setPosts: (posts: any[]) => void;
  tokenSpotify: string | null;
};

export const AuthContext = createContext<AuthContextType | undefined>({
  user: null,
  loading: true,
  tokenSpotify: null,
  handleLogin: async () => {},
  handleRegister: async () => {},
  handleLogout: () => {},
  setPosts: () => {},
  posts: [],
} as AuthContextType);

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("UseAuth must be used within a AuthProvider");
  }

  return context;
}
