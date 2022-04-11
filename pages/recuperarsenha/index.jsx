import { useState } from "react";
import Cabecalho from "../../components/cabecalho";
import PassoUm from "../../components/recuperarsenha/passoum";
import PassoDois from "../../components/recuperarsenha/passodois";
import TelaSucesso from "../../components/telasucesso";
import TelaAviso from "../../components/telaaviso";
import TelaErro from "../../components/telaerro";

export default function RecuperarSenha() {
  const [pagina, setPagina] = useState(1);
  const [emailParaEnvio, setEmailParaEnvio] = useState("");
  const [loginUsuario, setLoginUsuario] = useState("");

  const PageDisplay = () => {
    if (pagina === 1) {
      return <PassoUm setLoginUsuario={setLoginUsuario} setEmailParaEnvio={setEmailParaEnvio} setPagina={setPagina} />;
    } else if (pagina === 2) {
      return <PassoDois loginUsuario={loginUsuario} emailParaEnvio={emailParaEnvio} setPagina={setPagina} />;
    } else if (pagina === 3) {
      return <TelaSucesso mensagemDeTela="Senha alterada com sucesso e logo será enviada a você!" botaoSair="link" />;
    } else if (pagina === 4) {
      return (
        <TelaAviso
          mensagemDeTela="No foi encontrado nenhum e-mail que possamos enviar a nova senha no cadastro do Departamento de Recursos Humanos, entre em contato com eles pelo ramal: 6000 para regularização e tente novamente"
          setPagina={setPagina}
        />
      );
    } else if (pagina === 5) {
      return (
        <TelaErro
          mensagemDeTela="Infelizmente houve algum problema quando tentamos alterar sua senha, tente novamente! Se o erro persistir entre em contato com o Departamento de Suporte pelo ramal: 6041"
          setPagina={setPagina}
        />
      );
    }
  };

  return (
    <div>
      <Cabecalho />
      {PageDisplay()}
    </div>
  );
}
