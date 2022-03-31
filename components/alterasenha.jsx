import { useState } from "react";
import * as Yup from "yup";
import Axios from "axios";
import { useFormik } from "formik";
import Cabecalho from "./cabecalho";
import css from "./alterasenha.module.css";
import Input from "./input";
import { ArrowCircleRightIcon } from "@heroicons/react/outline";

export default function AlterarSenha({ setPagina }) {
  const [sucessoalterarSenha, setsucessoAlterarSenha] = useState(false);
  const [falhaAlterarSenha, setfalhaAlterarSenha] = useState(false);

  const alterarSenhaSchema = Yup.object().shape({
    senhaatual: Yup.string().required("* Campo Obrigatório"),
    novasenha: Yup.string()
      .oneOf([Yup.ref("confirmasenha"), null], "As senhas precisam serem iguais!")
      .min(8, "A senha deve ter pelo menos 8(oito) caracteres!")
      .max(14, "A senha deve ter no máximo 14(quartoze) caracteres!")
      .required("* Campo Obrigatório"),
    confirmasenha: Yup.string()
      .oneOf([Yup.ref("novasenha"), null], "As senhas precisam serem iguais!")
      .min(8, "A senha deve ter pelo menos 8(oito) caracteres!")
      .max(14, "A senha deve ter no máximo 14(quartoze) caracteres!")
      .required("* Campo Obrigatório"),
  });

  const formik = useFormik({
    initialValues: {
      senhaatual: "",
      novasenha: "",
      confirmasenha: "",
    },
    validationSchema: alterarSenhaSchema,
    onSubmit: async (values) => {
      try {
        await Axios.post(
          process.env.urlAPI + "/alterarsenha",
          {
            senhaatual: values.senhaatual,
            novasenha: values.novasenha,
            novasenha: values.novasenha,
          },
          {
            withCredentials: true,
          }
        );
        //Se Deu tudo Certo
        console.log("Ola");
        setPagina(2);
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <div id={css["componente"]}>
      <Cabecalho />
      <div id={css["box"]}>
        <form id="form" onSubmit={formik.handleSubmit}>
          <h2>Alteração de Senha</h2>
          <p>Informe os dados abaixo para continuar</p>
          <hr />
          <Input
            label="Senha Atual"
            name="senhaatual"
            type="password"
            placeholder="Ex: 12345678"
            value={formik.values.senhaatual}
            onChange={formik.handleChange}
            touched={formik.touched.senhaatual}
            erro={formik.errors.senhaatual}
          />
          <Input
            label="Nova Senha"
            name="novasenha"
            type="password"
            placeholder="Ex: as7%*2M&N%E#8Q"
            value={formik.values.novasenha}
            onChange={formik.handleChange}
            touched={formik.touched.novasenha}
            erro={formik.errors.novasenha}
          />
          <Input
            label="Confirmar Nova Senha"
            name="confirmasenha"
            type="password"
            placeholder="Ex: as7%*2M&N%E#8Q"
            value={formik.values.confirmasenha}
            onChange={formik.handleChange}
            touched={formik.touched.confirmasenha}
            erro={formik.errors.confirmasenha}
          />
          <button type="submit">
            <span>Enviar Solicitação</span>
            <ArrowCircleRightIcon className={css.buttonIcon} />
          </button>
        </form>
      </div>
    </div>   
  );
}