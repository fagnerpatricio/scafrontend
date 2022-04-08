import Cabecalho from "./cabecalho";
import { ArrowNarrowLeftIcon } from "@heroicons/react/outline";
import { DocumentSearchIcon } from "@heroicons/react/outline";
import css from "./telaaviso.module.css";

export default function TelaAviso({ mensagemDeTela, setPagina }) {
  return (
    <div id={css["c"]}>
      <Cabecalho />
      <section>
        <header>
          <DocumentSearchIcon />
          <span>Informação!</span>
        </header>
        <hr />
        <p>{mensagemDeTela}</p>
        <button
          onClick={() => {
            setPagina(1);
          }}
        >
          <ArrowNarrowLeftIcon />
          Tentar Novamente
        </button>
      </section>
    </div>
  );
}
