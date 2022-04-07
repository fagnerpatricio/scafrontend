import Cabecalho from "./cabecalho";
import { KeyIcon } from "@heroicons/react/outline";
import css from "./telaaviso.module.css";
import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";

export default function TelaAviso({ mensagemDeTela, setPagina }) {
  return (
    <div className={css.body}>
      <Cabecalho />
      <div className={css.box}>
        <KeyIcon className={css.keyicon} />
        <div className={css.embrulho}>
          <span>Informação!</span>          
          <p>{mensagemDeTela}</p>
          <div className={css.botao}>
            <button
              onClick={() => {
                setPagina(1);
              }}
              className={css.botaoitens}
            >
              <ArrowNarrowLeftIcon className={css.arrownarrowlefticon} />
              Tentar Novamente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
