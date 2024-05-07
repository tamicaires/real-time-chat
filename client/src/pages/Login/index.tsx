import { FunctionComponent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { message } from "antd";
import { useAuth } from "../../context/AuthProvider/useAuth";
import chatLogo from "../../assets/chat-logo.svg";
import Input from "../../components/Form/Input";
import { userLoginSchema } from "./userLoginSchema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserLogin } from "../../interface/user-interface";
import ErrorMessage from "../../components/Form/ErrorMessage";

type UserLoginData = z.infer<typeof userLoginSchema>;

const Login: FunctionComponent = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const userLoginForm = useForm<UserLoginData>({
    resolver: zodResolver(userLoginSchema),
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = userLoginForm;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLoginUser = async (data: UserLogin) => {
    try {
      await auth.authenticate(data.email, data.password);

      navigate("/chatroom");
    } catch (error) {
      message.error("Email ou senha inválidos");
    }
  };

  const handleRegisterUser = () => {
    navigate("/register");
  };

  return (
    <div className="flex rounded-full h-screen">
        <div className={`flex flex-col justify-between w-full gap-10 bg-main-bg ${windowWidth > 768 ? 'px-40' : 'px-10'} py-10`}>
        <div className="flex justify-center">
          <img src={chatLogo} alt="Chat Logo" className="h-10" />
        </div>
        <main className="flex flex-col justify-center gap-10">
          <header className="flex flex-col gap-1 ">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-200 text-center uppercase">
              Login
            </h1>
            <p className="text-gray-500 text-center">
              Acesse seu perfil e divirta-se
            </p>
          </header>
          <FormProvider {...userLoginForm}>
            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit(handleLoginUser)}
            >
              <Input
                name="email"
                type="email"
                placeholder="Digite seu e-mail"
              />
              <ErrorMessage field="email" />

              <Input
                name="password"
                type="password"
                placeholder="Digite sua senha"
              />
              <ErrorMessage field="password" />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-violet-700 text-white  py-2 rounded-lg uppercase font-bold hover:bg-violet-600 px-4"
              >
                Entrar
              </button>
              <a
                className="text-sm  text-center text-violet-600 hover:text-violet-500 hover:underline focus:bg-black"
                onClick={handleRegisterUser}
              >
                Não tem cadastro?
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
      {windowWidth > 768 && (
        <div
          className={`flex flex-col justify-center bg-login-pattern bg-cover bg-no-repeat w-full ${
            windowWidth < 768 ? "hidden" : ""
          }`}
        >
          <p className="text-5xl text-gray-200 font-bold pl-24 max-w-[27rem] pb-3">
            Conecte-se com amigos e o mundo ao seu redor
          </p>
          <p className="text-[1.3rem] text-gray-200 pl-24 pr-10 max-w-[28rem]">
            Comunidade em tempo real
          </p>
        </div>
      )}
    </div>
  );
};

export default Login;
