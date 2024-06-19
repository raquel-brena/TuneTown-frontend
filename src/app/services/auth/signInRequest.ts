import { toast } from "sonner";
import { UserLoginDTO } from "../../../domain/types/Auth";
import AuthGatewayHttp from "../../../infra/gateway/AuthGatewayHttp";

export async function signInRequest(userData: UserLoginDTO) {
    const authGatewayHttp = new AuthGatewayHttp();

    try {
        const response = await authGatewayHttp.signIn(userData);
        return response;
    } catch (error: any) {
        toast.error(error.message)
    }

}
