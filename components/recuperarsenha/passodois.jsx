// import React from "react";
import Cabecalho from "../cabecalho";
import Axios from "axios";
import { useFormik } from "formik";

import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";

import css from "./passodois.module.css";

export default function PassoDois({ emailParaEnvio, setPagina }) {
  const formik = useFormik({
    initialValues: {
      email: emailParaEnvio,
    },
    onSubmit: async (e) => {
      try {
        await Axios.post(process.env.NEXT_PUBLIC_BACKEND_IP + "/passodois", {
          email: emailParaEnvio,
        });
      } catch (err) {
        console.log(err);
      }
      setPagina(3);
    },
  });
  return (
    <div id={css["pagina"]}>
      <Cabecalho />
      <div id={css["box"]}>
        <form action="" id="form" onSubmit={formik.handleSubmit}>
          <h2>Informações de Recuperação</h2>
          <hr />
          <p>Sua nova senha será enviada para o seguinte e-mail:</p>
          <div>
            <span>{emailParaEnvio}</span>
          </div>
          <footer>
            <p>
              OBS. Informação retirada do seu cadastro no Recursos Humanos. Se essa informação estiver errada entre em
              contato com o Departamento de Recursos Humanos para regularizar seu cadastro funcional
            </p>
          </footer>
          <div>
            <button
              onClick={() => {
                setPagina(1);
              }}
            >
              <ArrowNarrowLeftIcon />
              Voltar
            </button>
            <button type="submit">
              Enviar Solicitação
              <ArrowNarrowRightIcon />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
