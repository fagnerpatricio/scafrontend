import Axios from "axios";
import { useRouter } from "next/router";
import { CubeIcon } from "@heroicons/react/outline";
import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";
import Cabecalho from "./cabecalho";
import css from "./telasucesso.module.css";

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
    <div id={css["c"]}>
      <Cabecalho />
      <section>
        <header>
          <CubeIcon />
          <span>Sucesso!</span>
        </header>
        <hr />
        <p>{mensagemDeTela}</p>
        <button onClick={() => sair(botaoSair)}>
          <ArrowNarrowLeftIcon />
          Tela de Login
        </button>
      </section>
    </div>
  );
}
