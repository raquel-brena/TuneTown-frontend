
import { UserRegisterDTO } from "../../../domain/types/Auth";
import Input from "../Input";
import { useForm } from "react-hook-form";
import { Button } from "../Button";
import { signUpRequest } from "../../services/auth/signUpRequest";

export const FormSignUp = () => {
  const {
    register,
    handleSubmit,
    watch
  } = useForm<UserRegisterDTO>();

  async function onSubmit (data: UserRegisterDTO) {
    console.log("enviado: ", data);
    const response = await signUpRequest(data)
     console.log("response: ", response);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-5 px-6 py-5"
    >
      <div className="mb-4">
        <p className="text-3xl mb-1 font-semibold">Cadastre-se!</p>
        <p className="text-md font-light">
          Esteja conectado aos seus amigos e suas músicas
        </p>
      </div>

      <div className="flex flex-col space-y-4">
        <Input label="Nome" {...register("name", { required: true })} />
        <Input label="Email" {...register("email", { required: true })} />
        <Input label="Username" {...register("username", { required: true })} />
        <Input
          label="Senha"
          type="password"
          {...register("password", { required: true })}
        />
      </div>

      <Button>Criar conta</Button>
    </form>
  );
};
