import { Button } from "../Button";
import { LineInput } from "../LineInput";
import {
  SheetClose,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "../Sheet";
import { useForm } from "react-hook-form";
import { EditConfig } from "../../../domain/types/Profile";
import { useAuth } from "../../../infra/contexts/auth/UseAuth";
import { Switch } from "../SwitchButton";
export const FormConfig = () => {
  const { register, handleSubmit } = useForm<EditConfig>();
  const { user } = useAuth();

  function sendSubmit(data: EditConfig) {}

  return (
    <>
      <SheetHeader>
        <SheetTitle>Configurações</SheetTitle>
        <div className="border-b border-stroke w-full" />
      </SheetHeader>
      <form
        onSubmit={handleSubmit(sendSubmit)}
        className="flex flex-col space-y-5 px-2 py-5"
      >
        <div className="flex flex-col space-y-4">
          <div>
            <p className="text-md font-semibold mb-4">Sua conta</p>
            <div className="ml-2 flex items-end flex-col space-y-5">
              <LineInput
                label="Email"
                {...register("email", { required: true })}
                defaultValue={user?.email}
              />

              <LineInput
                label="Senha"
                {...register("password", { required: true })}
                defaultValue={"alterar senha"}
              />
              <LineInput
                label="Username"
                {...register("username", { required: true })}
                defaultValue={user?.username? `@${user.username}` : ""}
              />
            </div>
          </div>

          <div>
            <p className="text-md font-semibold">Painel</p>
            <div className="justify-between flex w-full">
              <p className="text-sm font-light"> Paleta de cores</p>
              <button> alterar cor</button>
            </div>
          </div>

          <div>
            <p className="text-md font-semibold mb-4">Notificações</p>
            <div className="ml-2 flex flex-col space-y-5">
              <div className="flex w-full justify-between">
                <p className="text-sm font-light">Notícias do TuneTown</p>
                <div className="flex w-[70%] gap-2 justify-between">
                  <Switch />
                  <p className="text-xs text-justify">
                    Me envie notificações sobre posts populares de amigos,
                    músicas interessantes compartilhadas, essas coisas.
                  </p>
                </div>
              </div>
              <div className="flex w-full justify-between">
                <p className="text-sm font-light">Notícias de amigos</p>
                <div className="flex w-[70%] gap-2 justify-between">
                  <Switch />
                  <p className="text-xs text-justify">
                    Me envie notificações sobre posts populares de amigos,
                    músicas interessantes compartilhadas, essas coisas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </form>
      <SheetFooter>
        <SheetClose asChild>
          <Button type="submit">Salvar</Button>
        </SheetClose>
      </SheetFooter>
    </>
  );
};
