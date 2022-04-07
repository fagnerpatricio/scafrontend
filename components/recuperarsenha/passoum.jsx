import { useState } from "react";
import * as Yup from "yup";
import Axios from "axios";
import Link from "next/link";
import { useFormik } from "formik";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";
import Cabecalho from "../cabecalho";
import styles from "./passoum.module.css";
import Input from "../input";
import Alerta from "../alerta";

export default function PassoUm({ emailParaEnvio, setEmailParaEnvio, setPagina }) {
  const [falhaLogin, setfalhaLogin] = useState(false);
  const passoUmSchema = Yup.object().shape({
    login: Yup.string().required("* Campo Obrigatório"),
    matricula: Yup.string().required("* Campo Obrigatório"),
    cpf: Yup.string().required("* Campo Obrigatório"),
  });

  const formik = useFormik({
    initialValues: {
      login: "",
      matricula: "",
      cpf: "",
    },
    validationSchema: passoUmSchema,
    onSubmit: async (values) => {
      try {
        const dados = await Axios.post(process.env.NEXT_PUBLIC_BACKEND_IP + "/passoum", {
          login: values.login,
          matricula: values.matricula,
          cpf: values.cpf,
        });

        if (dados.status === 200) {
          setPagina(2);
          setEmailParaEnvio(dados.data);
        }

        if (dados.status === 204) {          
          setPagina(4);          
        }
        
      } catch (err) {
        setfalhaLogin(true);
      }
    },
  });

  return (
    <div>
      <Cabecalho />
      <div className={styles.passoUmBody}>
        <div className={`${falhaLogin ? "" : "hidden"}`}>
          <Alerta
            tipo="erro"
            mensagem="Não encontramos nenhum usuário com os dados informados, revise e tente novamente!"
          />
        </div>
        <div className={styles.passoUmBox}>
          <div className={styles.embrulhoFormPassoUm}>
            <form action="" id="form" onSubmit={formik.handleSubmit}>
              <h2>Informações de Identificação</h2>
              <p>Informe os dados abaixo para continuar</p>
              <hr />
              <Input
                label="Login do Usuário"
                name="login"
                type="text"
                placeholder="Ex: joão.silva"
                value={formik.values.login}
                onChange={formik.handleChange}
                touched={formik.touched.login}
                erro={formik.errors.login}
              />
              <Input
                label="Mátricula: Apenas os Números"
                name="matricula"
                type="text"
                placeholder="Ex: 7000012"
                value={formik.values.matricula}
                onChange={formik.handleChange}
                touched={formik.touched.matricula}
                erro={formik.errors.matricula}
              />
              <Input
                label="CPF: Apenas os Números"
                name="cpf"
                type="text"
                placeholder="Ex: 00100200304"
                value={formik.values.cpf}
                onChange={formik.handleChange}
                touched={formik.touched.cpf}
                erro={formik.errors.cpf}
              />
              <div className={styles.embrulhoFormPassoUmRodape}>
                <button className={styles.botaoTelaLogin}>
                  <ArrowNarrowLeftIcon className={styles.setaBotaoTelaLogin} />
                  <Link href={"/"}>
                    <span>Tela de Login</span>
                  </Link>
                </button>
                <button type="submit" className={styles.botaoContinuar}>
                  <span>Continuar</span>
                  <ArrowNarrowRightIcon className={styles.setaBotaoContinuar} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
