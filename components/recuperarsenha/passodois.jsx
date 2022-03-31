import React from "react";
import Cabecalho from "../cabecalho";
import * as Yup from "yup";
import Axios from "axios";
import { useFormik } from "formik";

import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";

import css from "./passodois.module.css";

export default function PassoDois({ dadosParaEnvio, setPagina }) {
  const passoDoisSchema = Yup.object({
    email: Yup.boolean(),
    celular: Yup.boolean(),
  }).test("testeDeValidacaoDeEnvio", null, (obj) => {
    if (obj.email || obj.celular) {
      return true;
    }
    return new Yup.ValidationError("* Escolha pelo menos uma opção de envio", null, "email");
  });

  const formik = useFormik({
    initialValues: {
      email: false,
      celular: false,
    },
    validationSchema: passoDoisSchema,
    onSubmit: async (values) => {
      console.log(values);
      setPagina(3);
    },
  });
  return (
    <div>
      <Cabecalho />
      <div className={css.body}>
        <div className={css.box}>
          <div className={css.embrulho}>
            <form action="" id="form" onSubmit={formik.handleSubmit}>
              <h2>Informações de Recuperação</h2>
              <hr />
              <div className={css.embrulhoEscolhas}>
                <div className={css.celular}>
                  <input
                    id="celular"
                    name="celular"
                    aria-describedby="celular"
                    type="checkbox"
                    value={formik.values.celular}
                    onChange={formik.handleChange}
                  />
                  <div className={css.celularRotulo}>
                    <label>Enviar via Celular: {dadosParaEnvio.celular}</label>
                  </div>
                </div>
                <div className={css.email}>
                  <input
                    id="email"
                    name="email"
                    aria-describedby="email"
                    type="checkbox"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                  <div className={css.emailRotulo}>
                    <label>Enviar via e-mail: {dadosParaEnvio.email}</label>
                  </div>
                </div>
              </div>
              {formik.touched.email && formik.errors.email && (
                <div className={css.alerta}>{formik.errors.email}</div>
              )}
              <div className={css.rodape}>
                <button
                  className={css.telalogin}
                  onClick={() => {
                    setPagina(1);
                  }}
                >
                  <ArrowNarrowLeftIcon className={css.arrowNarrowLeftIcon} />
                  <span>Voltar</span>
                </button>
                <button type="submit" className={css.continuar}>
                  <span>Enviar Solicitação</span>
                  <ArrowNarrowRightIcon className={css.arrowNarrowRightIcon} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
