import css from "./carregando.module.css";
import IconeCarregando from "./iconecarregando";

export default function Carregando() {
  return (
    <div id={css["pagina"]}>
      <IconeCarregando />
      <h2>Carregando...</h2>
      <p>Estamos processando sua requisição. Por favor não feche essa página!</p>
    </div>
  );
}
