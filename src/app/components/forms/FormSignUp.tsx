
import { UserRegister } from "../../../domain/types/Auth";
import Input from "../Input";
import { useForm } from "react-hook-form";
import { Button } from "../Button";
import { signUpRequest } from "../../services/auth/signUpRequest";

interface FormSignUpProps {
  name?: string;
  email?: string;
  username?: string;
  avatarUrl?: string;
}
export const FormSignUp = ({ name, email, username, avatarUrl }: FormSignUpProps) => {
  const { register, handleSubmit, watch } = useForm<UserRegister>({
    defaultValues: {
      name,
      email,
      username,
    },
  });

  async function onSubmit(data: UserRegister) {
    const dataWithAvatar = { ...data, avatarUrl };
    const response = await signUpRequest(dataWithAvatar);
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
