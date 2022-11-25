/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FormFile } from "../../components/FormFile";
import { api } from "../../services/api";
import { CardContainer, Container, HeaderContainer } from "./syles";

interface ITransaction {
  id: string;
  type: string;
  date: Date;
  value: number;
  cpf: string;
  card_number: string;
  hour: Date;
  store: string;
  kind: string;
}

interface IStore {
  id: string;
  name: string;
  owner_name: string;
  balance: number;
  transactions: ITransaction[];
}

export const Dashboard = () => {
  const [file, setFile] = useState<File>();
  const [stores, setStores] = useState<IStore[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getStores = async () => {
      try {
        const response = await api.get("stores/", {
          headers: {
            Authorization: `Token ${sessionStorage.getItem("token")}`,
          },
        });

        setTimeout(() => setStores(response.data.results), 500);
      } catch (_) {
        navigate("/");
      }
    };
    getStores();
  }, []);

  const handleFileSubmit = async () => {
    if (file === undefined) return console.log("indefinido");

    try {
      await api.post(
        "transactions/",
        { file },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Token ${sessionStorage.getItem("token")}`,
          },
        }
      );

      toast.success("Arquivo salvo com sucesso", {
        icon: "🦆🟢",
        autoClose: 3000,
      });
      setTimeout(
        () =>
          toast.success("Aguarde...", {
            icon: "🦆🟢",
            autoClose: 3000,
          }),
        500
      );

      const response = await api.get("stores/", {
        headers: { Authorization: `Token ${sessionStorage.getItem("token")}` },
      });

      setTimeout(() => setStores(response.data.results), 500);
    } catch (error) {
      toast.error("Parece que houve um problema...", { icon: "🦆🔴" });
      setTimeout(() => {
        toast.error("Reveja se mandou o arquivo correto", { icon: "🦆🔴" });
      }, 500);
    }
  };

  return (
    <Container>
      <HeaderContainer>
        <h1>Bem-vindo(a) ao File Request</h1>
        <div>
          <p>Esta é uma aplicação full stack que simula a seguinte situação:</p>
          <p>
            Pelo front-end o usuário enviará um arquivo .txt que contém os dados
            das transações de algumas lojas.
          </p>
          <p>
            No back-end a aplicação irá ler o arquivo e armazenar no banco de
            dados. A partir deste ponto, estando tudo certo, o usuário terá
            acesso às informações
          </p>
        </div>
        <span>
          {"=>"} Baixe o arquivo{" "}
          <a href="https://drive.google.com/uc?id=11t-FKXvZyZ_2-jbCwr35BETpgrvYTVfj&authuser=1&export=download">
            aqui
          </a>
          . {"<="}
        </span>
      </HeaderContainer>
      <FormFile
        setFile={setFile}
        onSubmit={(e) => {
          e.preventDefault();
          handleFileSubmit();
        }}
      />

      <CardContainer>
        {stores &&
          stores.map((store) => (
            <div
              key={store.id}
              onClick={() => {
                navigate(`/pages/${store.name}`);
              }}
            >
              <span>{store.name}</span>
            </div>
          ))}
      </CardContainer>
    </Container>
  );
};
