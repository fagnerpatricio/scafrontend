import * as Yup from "yup";
import Axios from "axios";
import Link from "next/link";
import { useFormik } from "formik";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";
import Cabecalho from "../cabecalho";
import styles from "./passoum.module.css";
import Input from "../input";

export default function PassoUm({ dadosParaEnvio, setDadosParaEnvio, setPagina }) {
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
        await Axios.post(process.env.urlAPI + "/passoum", {
          login: values.login,
          matricula: values.matricula,
          cpf: values.cpf,
        }).then((res) => {
          setPagina(2);
          setDadosParaEnvio({
            ...dadosParaEnvio,
            celular: res.data.celular,
            email: res.data.email,
          });
        });
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <div>
      <Cabecalho />
      <div className={styles.passoUmBody}>
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
