import { toast } from "sonner";
import { UserLoginDTO } from "../../../domain/types/Auth";
import AuthGatewayHttp from "../../../infra/gateway/AuthGatewayHttp";

export async function signInRequest(userData: UserLoginDTO) {
    const authGatewayHttp = new AuthGatewayHttp();

    try {
        return await authGatewayHttp.signIn(userData);
    } catch (error: any) {
        toast.error(error.message)
    }

}
