import { PropsWithChildren, useEffect, useState } from "react";
import { AuthContext } from "./UseAuth";
import AxiosAdapter from "../../http/AxiosAdapter";
import { User } from "../../../domain/types/User";
import { signUpRequest } from "../../../app/services/auth/signUpRequest";
import { signInRequest } from "../../../app/services/auth/signInRequest";
import { UserLoginDTO } from "../../../domain/types/Auth";

type AuthProviderProps = PropsWithChildren & {
  isSignedIn?: boolean;
};

export default function AuthProvider({
  children
}: AuthProviderProps) {

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  
  const httpClient = new AxiosAdapter();

    useEffect(() => {
      const token = localStorage.getItem("token");

      if (token) {
       httpClient.setHeaders({ Authorization: `Bearer ${token}` });
       setUser(user);
      }

      setLoading(false);
    }, []);
  
      async function handleLogin({email, password} : UserLoginDTO) {
      setLoading(true)

      const data =  await signInRequest({email, password})
      console.log("data: ", data)
      localStorage.setItem("token", JSON.stringify(data.token));
      httpClient.setHeaders( `Bearer ${data.token}`);

          setUser(data.user);
          setLoading(false);
      }

      function handleLogout() {
        setUser(null);
        localStorage.removeItem("token");
        httpClient.setHeaders(null);
      }

  return <AuthContext.Provider value={{loading, user, handleLogin, handleLogout
  }}>{children}</AuthContext.Provider>;
}
