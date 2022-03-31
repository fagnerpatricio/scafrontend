import { useState } from "react";
import Cabecalho from "../../components/cabecalho";
import PassoUm from "../../components/recuperarsenha/passoum";
import PassoDois from "../../components/recuperarsenha/passodois";
import TelaSucesso from "../../components/telasucesso";

export default function RecuperarSenha() {
  const [pagina, setPagina] = useState(1);
  const [dadosParaEnvio, setDadosParaEnvio] = useState({
    celular: "",
    email: "",
  });

  const PageDisplay = () => {
    if (pagina === 1) {
      return (
        <PassoUm
          dadosParaEnvio={dadosParaEnvio}
          setDadosParaEnvio={setDadosParaEnvio}
          setPagina={setPagina}
        />
      );
    } else if (pagina === 2) {
      return <PassoDois dadosParaEnvio={dadosParaEnvio} setPagina={setPagina} />;
    } else if (pagina === 3) {      
      return <TelaSucesso mensagemDeTela="Senha alterada com sucesso e logo será enviada a você!" botaoSair="link" />;
    }
  };

  return (
    <div>
      <Cabecalho />
      {PageDisplay()}
    </div>
  );
}
