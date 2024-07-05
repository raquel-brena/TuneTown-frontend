import { toast } from "sonner";
import { UserLogin } from "../../../domain/types/Auth";
import AuthGatewayHttp from "../../../infra/gateway/AuthGatewayHttp";

export async function signInRequest(userData: UserLogin) {
    const authGatewayHttp = new AuthGatewayHttp();

    try {
       
        const response = await authGatewayHttp.signIn(userData);
         console.log("signrequest:", userData);
        return response;
    } catch (error: any) {
        console.error("Erro ao fazer requisição:", error);
        toast.error("Ocorreu um erro, por favor tente novamente.");
      }
          
    

}
