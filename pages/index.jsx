import * as Yup from "yup";
import Link from "next/link";
import Axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { ArrowCircleRightIcon } from "@heroicons/react/outline";
import Cabecalho from "../components/cabecalho";
import Alerta from "../components/alerta";
import Input from "../components/input";
import css from "./index.module.css";

export default function LoginPage() {
  //
  // Variaveis
  //
  const [falhaLogin, setfalhaLogin] = useState(false);
  const route = useRouter();

  //
  // Funções
  //
  const loginSchema = Yup.object().shape({
    login: Yup.string().required("* Campo Obrigatório"),
    password: Yup.string().required("* Campo Obrigatório"),
  });

  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      try {
        const data = new FormData(document.getElementById("form"));
        const usuario = await Axios.post(
          process.env.NEXT_PUBLIC_BACKEND_IP + "/login",
          {
            login: data.get("login"),
            password: data.get("password"),
          },
          {
            withCredentials: true,
          }
        );
        // Se deu tudo certo
        route.push("/usuario");
      } catch (err) {
        setfalhaLogin(true);
      }
    },
  });

  return (
    <div id={css["pagina"]}>
      <Cabecalho />

      {/* Mensagem de Erro */}
      <div className={`${falhaLogin ? "" : "hidden"}`}>
        <Alerta tipo="erro" mensagem="Usuário não encontrado, digite novamente seu login e senha" />
      </div>
      {/* Fim da Mensagem de Erro */}

      <section>
        <img src="imagens/undraw_login_re_4vu2.svg" alt="" />
        <header>SCA - Sistema de Controle de Acesso</header>
        <p>Entre com seu login e senha para ter acesso</p>

        <form action="" id="form" onSubmit={formik.handleSubmit}>
          <Input
            label="Login"
            name="login"
            type="text"
            placeholder="Ex: joão.silva"
            value={formik.values.login}
            onChange={formik.handleChange}
            touched={formik.touched.login}
            erro={formik.errors.login}
          />
          <Input
            label="Senha"
            name="password"
            type="password"
            placeholder="Ex: b2HSBcMh$53eEz"
            value={formik.values.password}
            onChange={formik.handleChange}
            touched={formik.touched.password}
            erro={formik.errors.password}
          />
          <button type="submit">
            <span>Autenticar</span>
            <ArrowCircleRightIcon />
          </button>
        </form>
      </section>
      <footer>
        <span>
          Esqueceu a senha ou primeiro acesso?
          <Link href="/recuperarsenha">
            <a>Clique aqui</a>
          </Link>
        </span>
      </footer>
    </div>
  );
}
