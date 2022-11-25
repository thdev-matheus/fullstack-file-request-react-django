import { useState } from "react";
import { api } from "../../services/api";

export const Dashboard = () => {
  const [file, setFile] = useState<File | null>();

  const handleFileSubmit = async () => {
    if (file === undefined) return console.log("indefinido");

    const response = await api.post(
      "transactions/",
      { file },
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Token ${sessionStorage.getItem("token")}`,
        },
      }
    );

    console.log(response.data);
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
        <div>
          {" "}
          {/* card */}
          <span>Nome da loja</span>
        </div>
        <div>
          <span>Nome da loja</span>
        </div>
        <div>
          <span>Nome da loja</span>
        </div>
        <div>
          <span>Nome da loja</span>
        </div>
        <div>
          <span>Nome da loja</span>
        </div>
      </div>
    </div>
  );
};
