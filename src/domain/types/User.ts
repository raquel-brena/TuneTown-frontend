import { Profile } from "./Profile";

export type User = {
  email: string;
  name: string;
  username: string | null;

};

export type UserWithProfile = User & {
  id: string;
  profile: Profile
}

export type UserEntity = User & {
  id: string;

  profileId: number;
  createdAt: string;
};
