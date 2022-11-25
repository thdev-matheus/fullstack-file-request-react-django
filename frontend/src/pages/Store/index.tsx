/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TransactionCard } from "../../components/TransactionCard";
import { api } from "../../services/api";
import { FiArrowLeftCircle } from "react-icons/fi";
import { IStore } from "../Dashboard/types";
import {
  Container,
  StoreInfoBox,
  TransactionsBox,
  TransactionsContainer,
} from "./syles";

export const Store = () => {
  const [store, setStore] = useState<IStore>({} as IStore);
  const { storeName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getStore = async () => {
      try {
        const response = await api.get(`stores/${storeName}/`, {
          headers: {
            Authorization: `Token ${sessionStorage.getItem("token")}`,
          },
        });

        setStore(response.data);
      } catch (_) {
        navigate("/");
      }
    };
    getStore();
  }, []);

  //   console.log(store);
  return (
    <Container>
      <StoreInfoBox
        balance={store.balance > 0 ? "p" : store.balance < 0 ? "n" : "0"}
      >
        <FiArrowLeftCircle size={60} onClick={() => navigate("/dashboard")} />

        <div>
          <h1>{storeName}</h1>
          <span>Dono do estabelecimento: {store.owner_name}</span>
          <p>
            Saldo: R$ <span>{store.balance?.toFixed(2)}</span>
          </p>
        </div>
      </StoreInfoBox>
      <TransactionsContainer>
        <h2>Transações:</h2>
        <TransactionsBox>
          {store.transactions?.map((transaction) => (
            <TransactionCard
              transaction={transaction}
              key={transaction.id}
            ></TransactionCard>
          ))}
        </TransactionsBox>
      </TransactionsContainer>
    </Container>
  );
};
