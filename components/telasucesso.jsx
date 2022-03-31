import Cabecalho from "./cabecalho";
import { KeyIcon } from "@heroicons/react/outline";
import css from "./telasucesso.module.css";
import Axios from "axios";
import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

export default function TelaSucesso({ mensagemDeTela, botaoSair }) {
  const route = useRouter();

  const sair = async (botaoSair) => {
    if (botaoSair === "sair") {
      const usuario = await Axios.get(process.env.urlAPI + "/logout", {
        withCredentials: true,
      });
      if (usuario.status === 200) {
        route.push("/");
      }
    }
    route.push("/");
  };

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
              <button onClick={() => sair(botaoSair)} className={css.botaoitens}>
                <ArrowNarrowLeftIcon className={css.arrownarrowlefticon} />
                Tela de Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
