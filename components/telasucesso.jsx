import React from "react";
import Cabecalho from "./cabecalho";

import { KeyIcon } from "@heroicons/react/outline";
import css from "./telasucesso.module.css";
import Link from "next/link";
import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";

export default function TelaSucesso({mensagemDeTela}) {
  return (
    <div>
      <Cabecalho />
      <div className={css.body}>
        <div className={css.box}>
          <KeyIcon className={css.keyicon} />
          <div className={css.embrulho}>
            <span>Sucesso!</span>
            <hr />
            <p>{mensagemDeTela}</p>
            <div className={css.botao}>
              <div className={css.botaoitens}>
                <ArrowNarrowLeftIcon className={css.arrownarrowlefticon} />
                <Link href={"/"}> Tela de Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
