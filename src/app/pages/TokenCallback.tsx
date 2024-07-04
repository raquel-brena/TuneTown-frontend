import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { InitialPage } from "./InitialPage";
import { useAuth } from "../../infra/contexts/auth/UseAuth";

export const TokenCallback = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<any>();
  const { setTokenSpotify } = useAuth();

  const getQueryParams = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get("code");
  };

  useEffect(() => {
    const fetchTokens = async () => {
      const code = getQueryParams();

      const redirect_uri = process.env.REDIRECT_URI | 'http://localhost:3000/token-callback';

      if (!code) {
        console.error("Authorization code is missing");
        return;
      }

      try {

         const tokenResponse = await axios.post(
           "https://accounts.spotify.com/api/token",
           new URLSearchParams({
             code,
             redirect_uri,
             grant_type: "authorization_code",
           }).toString(),
           {
             headers: {
               "Content-Type": "application/x-www-form-urlencoded",
               Authorization: "Basic " + btoa(`${clientId}:${clientSecret}`),
             },
           }
         );

       
        const accessToken = tokenResponse.data.access_token;
   

        setTokenSpotify(accessToken);
          localStorage.setItem(
            "tunetown@accessSpotify",
            JSON.stringify(accessToken)
          );
          
        // Use o token de acesso para obter informações do usuário
        const userResponse = await axios.get("https://api.spotify.com/v1/me", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        setUserData(userResponse.data);

        // Redirecione ou armazene os dados do usuário conforme necessário
        // navigate("/home", {
        //   state: { user: userData, accessToken },
        // });
      } catch (error) {
        console.error("Error fetching tokens", error);
      }
    };

    fetchTokens();
  }, []);

  return (
    <div>
      {userData ? (
        <InitialPage form="signUp" avatarUrl={userData.images[1].url} name={userData.display_name} email={userData.email} username={userData.id} />
        
      ) : (
        <div>Processando...</div>
      )}
    </div>
  );
};
