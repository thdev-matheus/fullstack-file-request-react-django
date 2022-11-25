import { useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";

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
    <div>
      <div>
        <h1>Dashboard</h1>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleFileSubmit();
        }}
      >
        {" "}
        {/* formulário */}
        <input
          type="file"
          name="file"
          onChange={(e) => e.target.files && setFile(e.target.files[0])}
        />
        <button type="submit">enviar</button>
      </form>
      <div>
        {/* box dos cards */}
        {stores &&
          stores.map((store) => (
            <div key={store.id}>
              {/* card */}
              <span>{store.name}</span>
            </div>
          ))}
      </div>
    </div>
  );
};
