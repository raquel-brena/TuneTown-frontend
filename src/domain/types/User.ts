export type User = {
  email: string;
  name: string;
  username: string | null;
};

export type UserEntity = User & {
  id: string;

  profileId: number;
  createdAt: string;
};
