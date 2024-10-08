import { Profile } from "./Profile";

export type AuthProvider = { 
    isSignedIn?: boolean;
}

export type UserLogin = {
  email: string;
  password: string;
};

export type UserRegister =  {
  name: string;
  email: string;
  username: string;
  password: string;
  avatarUrl?: string;
  refreshToken?: string;
  accessToken?: string;
};

export type userSpotifyToken = {
  userId: string;
  accessToken: string;
  refreshToken: string;
};
