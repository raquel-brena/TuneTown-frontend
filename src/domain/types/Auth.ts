export type AuthProvider = { 
    isSignedIn?: boolean;
}

export type UserLoginDTO = {
  email: string;
  password: string;
};

export type UserRegisterDTO =  {
  name: string;
  email: string;
  username: string;
  password: string;
};
