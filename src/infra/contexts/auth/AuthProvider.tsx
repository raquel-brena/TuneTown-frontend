import { PropsWithChildren, useEffect, useState } from "react";
import { AuthContext } from "./UseAuth";
import AxiosAdapter from "../../http/AxiosAdapter";
import { UserWithProfile } from "../../../domain/types/User";
import { signInRequest } from "../../../app/services/auth/signInRequest";
import { UserLogin, userSpotifyToken } from "../../../domain/types/Auth";
import { storeTokenSpotifyService } from "../../../app/services/auth/storeTokenSpotifyService";

type AuthProviderProps = PropsWithChildren & {
  isSignedIn?: boolean;
};


export default function AuthProvider({
  children
}: AuthProviderProps) {

  const [user, setUser] = useState<UserWithProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [tokenSpotify, setTokenSpotify] = useState<string>("");

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
  

      async function handleLogin({email, password} : UserLogin) {
      setLoading(true)

      const data = await signInRequest({email, password})

      localStorage.setItem("tunetown@token", JSON.stringify(data.token));
      httpClient.setHeaders( `Bearer ${data.token}`);
      setUser(data.user);
      setLoading(false);
      }

      function handleLogout() {
        setUser(null);
        localStorage.removeItem("token");
        httpClient.setHeaders(null);
      }

     async function storeTokenSpotify(accessToken:string, refreshToken:string) {
        setTokenSpotify(accessToken);
        const data = await storeTokenSpotifyService({accessToken, refreshToken, userId: user!.profile!.userId});
      
        localStorage.setItem("tunetown@tokenSpotify", JSON.stringify(accessToken));
      }

  return (
    <AuthContext.Provider
      value={{
        loading,
        user,
        handleLogin,
        handleLogout,
        tokenSpotify,
        storeTokenSpotify,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
