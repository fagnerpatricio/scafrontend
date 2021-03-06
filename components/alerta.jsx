import css from "./alerta.module.css";
import { ShieldCheckIcon } from "@heroicons/react/outline";
import { XCircleIcon } from "@heroicons/react/outline";

export default function Alerta({ tipo, mensagem }) {
  return (
    <div>
      {tipo === "sucesso" && (
        <div id={css["sucesso"]}>
          <aside>
            <ShieldCheckIcon />
          </aside>
          <span>
            <b>Sucesso!</b>
            <p>{mensagem}</p>
          </span>
        </div>
      )}
      {tipo === "erro" && (
        <div id={css["erro"]}>
          <aside>
            <XCircleIcon />
          </aside>
          <span>
            <b>Algo deu Errado</b>
            <p>{mensagem}</p>
          </span>
        </div>
      )}
    </div>
  );
}
