import { Button } from "../Button";
import Input from "../Input";
import spotify_logo from "../../assets/spotify_logo.svg";
import { useForm } from "react-hook-form";
import { EditProfile } from "../../../domain/types/Profile";
import { useAuth } from "../../../infra/contexts/auth/UseAuth";
import { Photo } from "../Photo";
import { TextArea } from "../TextArea";

export const FormEditProfile = () => {
  const { register, handleSubmit } = useForm<EditProfile>();
  const { user } = useAuth();

  function sendSubmit(data: EditProfile) {}

  return (
    <form
      onSubmit={handleSubmit(sendSubmit)}
      className="flex flex-col space-y-5 px-6 py-5"
    >
      <div className="flex flex-col space-y-4">
        <div className="flex items-center gap-6 w-full ">
          <Photo size="5" src={user?.profile.avatarUrl} />
          <Input
            label="Avatar"
            {...register("avatarURL", { required: true })}
          ></Input>
        </div>

        <Input label="Nome" {...register("name", { required: true })} />
        <TextArea
          label="Bio"
          height="16"
          {...register("bio", { required: false })}
        />
        <Input
          label="Música favorita"
          {...register("favoriteSong", { required: true })}
        />
        <Input
          label="Senha"
          type="password"
          {...register("password", { required: true })}
        />
      </div>

      <Button type="submit">Editar</Button>
    </form>
  );
};
