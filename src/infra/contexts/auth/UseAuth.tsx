import { createContext, useContext } from "react";
import {  UserWithProfile } from "../../../domain/types/User";
import { userSpotifyToken } from "../../../domain/types/Auth";

type AuthContextType = {
  user: UserWithProfile | null;
  loading: boolean;
  handleLogin: (data: { email: string; password: string }) => Promise<void>;
  handleLogout: () => void;
  tokenSpotify: string | null;
  storeTokenSpotify: ({ accessToken, refreshToken }: userSpotifyToken) => void;
};

export const AuthContext = createContext<AuthContextType | undefined>({
  user: null,
  loading: true,
  tokenSpotify: null,
  storeTokenSpotify: () => {},
  handleLogin: async () => {},
  handleLogout: () => {},
} as AuthContextType);

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("UseAuth must be used within a AuthProvider");
  }

  return context;
}
