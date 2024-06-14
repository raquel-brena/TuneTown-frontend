import { UserLoginDTO } from "../../../domain/types/Auth";
import AuthGatewayHttp from "../../../infra/gateway/AuthGatewayHttp";

export async function signInRequest(userData: UserLoginDTO) {
    const authGatewayHttp = new AuthGatewayHttp();
    const response = await authGatewayHttp.signIn(userData);
    return response;
}
