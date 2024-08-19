import { UserRegister } from "./Auth";
import { Post } from "./Post";
import { UserEntity } from "./User";

export type Profile = {
  userId: string;
  bio?: string | null;
  favoriteSong?: string | null;
  avatarUrl?: string | null;
  posts: Post[] | null;
  followers: UserEntity[] | null;
  following: UserEntity[] | null;
};

export type ProfileEntity = Profile & {
  id: number;
  lastLoginAt: string;
  createdAt: string;
  updatedAt: string;
};

export type EditProfile = UserRegister & {
  avatarURL?: string | null;
  bio?: string | null;
  favoriteSong?: string;
  password: string | null;
};

export type EditConfig = UserRegister & {
};