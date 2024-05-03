/* eslint-disable @typescript-eslint/no-explicit-any */
import { message } from "antd";
import chatLogo from "../../assets/chat-logo.svg";
import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { userService } from "../../services/UserService/userService";
import { FormProvider, useForm } from "react-hook-form";
import Input from "../../components/Form/Input";
import ErrorMessage from "../../components/Form/ErrorMessage";
import { registerUserSchema } from "./registerUserSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { UserRegister } from "../../interface/user-interface";
import ApiErrorMessage from "../../components/Form/ApiErrorMessage";
import { useApiErrorStore } from "../../store/errorExceptions/errorExceptions";

type RegisterUserData = z.infer<typeof registerUserSchema>;

const Register: FunctionComponent = () => {
  const { hasApiError, setHasApiError } = useApiErrorStore();
  const navigate = useNavigate();

  const registerUserForm = useForm<RegisterUserData>({
    resolver: zodResolver(registerUserSchema),
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = registerUserForm;

  const handleRegisterUser = async (data: UserRegister) => {
    console.log("registe", data);
    try {
      await userService.createUser(data);
      message.success("Usuário criado com sucesso!");

      navigate("/login");
    } catch (error: any) {
      message.error("Erro ao registrar o usuário. Por favor, tente novamente.");
      setHasApiError(error.response.status);
      console.log("apierror", error.response.status);
    }
  };

  const handleAlreadyHaveAccount = () => {
    navigate("/login");
  };

  return (
    <div className="grid grid-cols-2 rounded-full h-screen">
      <div className="flex flex-col justify-center h-screen bg-login-pattern bg-cover bg-no-repeat w-full">
        <p className="text-5xl text-gray-200 font-bold pl-24 pr-[18rem] pb-3">
          Conecte-se com amigos e o mundo ao seu redor
        </p>
        <p className="text-3xl text-gray-200 pl-24 pr-72">
          A sua comunidade em tempo real
        </p>
      </div>
      <div className="flex flex-col justify-between gap-10 bg-main-bg px-32 py-10">
        <div className="flex justify-center">
          <img src={chatLogo} alt="Chat Logo" className="h-10" />
        </div>
        <main className="flex flex-col justify-center gap-10 w-full max-w-[384px] mx-auto">
          <header className="flex flex-col gap-1 w-full max-w-[350px]">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-200 text-center uppercase">
              Cadastre-se
            </h1>
            <p className="text-gray-500 text-center">
              Preencha os dados para cadastro
            </p>
          </header>
          <FormProvider {...registerUserForm}>
            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit(handleRegisterUser)}
            >
              <Input
                name="username"
                type="text"
                placeholder="Escolha um username"
              />
              <ErrorMessage field="username" />

              <Input
                name="email"
                type="email"
                placeholder="Digite seu e-mail"
              />
              <ErrorMessage field="email" />
              {hasApiError === 409 && (
                <ApiErrorMessage message="E-mail já cadastrado!" />
              )}

              <Input
                name="password"
                type="password"
                placeholder="Escolha uma senha forte"
              />
              <ErrorMessage field="password" />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-violet-700 text-white  py-2 rounded-lg uppercase font-bold hover:bg-violet-600 px-4"
              >
                Cadastarr
              </button>
              <a
                className="text-sm  text-center text-violet-600 hover:text-violet-500 hover:underline focus:bg-black"
                onClick={handleAlreadyHaveAccount}
              >
                Já possui conta?
              </a>
            </form>
          </FormProvider>
        </main>
        <div className="text-center text-xs text-gray-400 hover:text-violet-500">
          <a href="https://www.linkedin.com/in/tamicaires/" target="_blank">
            Developed by: Tamires Carvalho
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
