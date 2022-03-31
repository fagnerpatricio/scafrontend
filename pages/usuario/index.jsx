import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useRouter } from "next/router";
import Cabecalho from "../../components/cabecalho";
import Navbar from "../../components/navbar";
import AlterarSenha from "../../components/alterasenha";
import TelaSucesso from "../../components/telasucesso";

export default function usuario() {
  const [pagina, setPagina] = useState(1);
  const [carreando, setCarregando] = useState(true);
  const route = useRouter();

  useEffect(async () => {
    try {
      await Axios.get(process.env.NEXT_PUBLIC_BACKEND_IP + "/usuario", {
        withCredentials: true,
      });
      //Se Deu tudo Certo
      setCarregando(false);
    } catch (err) {
      console.log(err);
      route.push("/");
    }
  }, []);

  const PageDisplay = () => {
    if (pagina === 1) {
      return <AlterarSenha setPagina={setPagina} />;
    } else if (pagina === 2) {      
      return <TelaSucesso mensagemDeTela="Senha Alterada Com Sucesso!" botaoSair="sair"/>;
    }
  };

  if (carreando) {
    return (
      <div>
        <Cabecalho />
        <h1>Carreando</h1>
      </div>
    );
  }

  return (
    <div>
      <Cabecalho />
      <Navbar />
      <PageDisplay />
    </div>
  );
}
