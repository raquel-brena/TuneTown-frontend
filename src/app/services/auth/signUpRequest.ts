import { UserRegisterDTO } from "../../../domain/types/Auth";
import AuthGatewayHttp from "../../../infra/gateway/AuthGatewayHttp";

export async function signUpRequest(userData: UserRegisterDTO) {
  const authGatewayHttp = new AuthGatewayHttp();
  const response = await authGatewayHttp.signUp(userData);
  return response;
}
