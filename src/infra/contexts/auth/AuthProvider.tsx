import { PropsWithChildren, useEffect, useState } from "react";
import { AuthContext } from "./UseAuth";
import AxiosAdapter from "../../http/AxiosAdapter";
import { UserWithProfile } from "../../../domain/types/User";
import { signInRequest } from "../../../app/services/auth/signInRequest";
import { UserLogin, UserRegister, userSpotifyToken } from "../../../domain/types/Auth";
import { storeTokenSpotifyService } from "../../../app/services/auth/storeTokenSpotifyService";
import { signUpRequest } from "../../../app/services/auth/signUpRequest";
import { access } from "fs";

type AuthProviderProps = PropsWithChildren & {
  isSignedIn?: boolean;
};


export default function AuthProvider({
  children
}: AuthProviderProps) {

  const [user, setUser] = useState<UserWithProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [tokenSpotify, setTokenSpotify] = useState<string>("");
  const [refreshToken, setRefreshToken] = useState<string>("");
  const [posts, setPosts] = useState<any[]>([]);

  const httpClient = new AxiosAdapter();

    useEffect(() => {
      const token = localStorage.getItem("tunetown@token");
      //buscar user pelo token
      if (token) {
       httpClient.setHeaders({ Authorization: `Bearer ${token}` });
       setUser(user);
      }

      setLoading(false);
    }, []);
  

    async function handleRegister(data: UserRegister) {
      setLoading(true);

      if (data.accessToken) {
        setTokenSpotify(data.accessToken);
        localStorage.setItem("tunetown@tokenSpotify", JSON.stringify(data.accessToken));
      }
    
      const response = await signUpRequest(data);

       setLoading(false);
    }


      async function handleLogin({email, password} : UserLogin) {
      setLoading(true)

      const data = await signInRequest({email, password})
        console.log(data)
      localStorage.setItem("tunetown@token", JSON.stringify(data.token));

      setTokenSpotify(data.user.userToken.accessToken);
      setRefreshToken(data.refreshToken);
      

      httpClient.setHeaders( `Bearer ${data.token}`);

      setUser(data.user);

      setLoading(false);
      }

      function handleLogout() {
        setUser(null);
        localStorage.removeItem("token");
        httpClient.setHeaders(null);
      }

  return (
    <AuthContext.Provider
      value={{
        loading,
        user,
        handleLogin,
        handleLogout,
        tokenSpotify,
        handleRegister,
        setPosts,
        posts
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
