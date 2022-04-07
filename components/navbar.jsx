import Axios from "axios";
import { useRouter } from "next/router";
import { GlobeAltIcon, ArrowCircleLeftIcon } from "@heroicons/react/solid";
import css from "./navbar.module.css";

export default function Navbar() {
  const route = useRouter();

  const sair = async () => {
    const usuario = await Axios.get(process.env.urlAPI + "/logout", {
      withCredentials: true,
    });
    if (usuario.status === 200) {
      route.push("/");
    }
  };

  return (
    <nav id={css["nav"]}>
      <div id={css["wrapper"]}>
        <div>
          <GlobeAltIcon />
          <h1>SCA - Sistema de Controle de Acesso</h1>
        </div>
        <button onClick={sair}>
          <ArrowCircleLeftIcon />
          <span>sair</span>
        </button>
      </div>
    </nav>
  );
}
