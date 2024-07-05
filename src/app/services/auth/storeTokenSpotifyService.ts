import { toast } from "sonner";
import { userToken } from "../../../domain/types/Auth";
import AuthGatewayHttp from "../../../infra/gateway/AuthGatewayHttp";

export async function storeTokenSpotifyService({
  accessToken,
  refreshToken,
  userId
}: userToken) {
  const authGatewayHttp = new AuthGatewayHttp();

  try {
    const response = await authGatewayHttp.storeTokenSpotify({
      accessToken,
      refreshToken,
    });
    return response;
  } catch (error: any) {
    console.error("Erro ao fazer requisição:", error);
    toast.error("Ocorreu um erro, por favor tente novamente.");
  }
}
