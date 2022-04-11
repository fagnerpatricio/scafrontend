import Cabecalho from "./cabecalho";
import { ArrowNarrowLeftIcon } from "@heroicons/react/outline";
import { ChatAlt2Icon } from "@heroicons/react/outline";
import css from "./telaerro.module.css";

export default function TelaErro({ mensagemDeTela, setPagina }) {
  return (
    <div id={css["c"]}>
      <Cabecalho />      
      <section>
        <header>
          <ChatAlt2Icon />
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
