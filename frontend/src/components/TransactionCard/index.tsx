import { AditionalInfoBox, Container, KindBox, MainInfoBox } from "./styles";
import { ITransactionCardProps } from "./types";

export const TransactionCard = ({ transaction }: ITransactionCardProps) => {
  const formatDate = (date: Date) => {
    return date.toString().split("-").reverse().join("/");
  };

  const formatHour = (hour: Date) => {
    const splitedHour = hour.toString().split(":");

    return `${splitedHour[0]}:${splitedHour[1]}`;
  };

  return (
    <Container>
      <KindBox kind={transaction.kind} />
      <MainInfoBox>
        <h3>Tipo: {transaction.type}</h3>
        <span>CPF: {transaction.cpf}</span>
        <span>Cartão: {transaction.card_number}</span>
        <span>R$ {transaction.value}</span>
      </MainInfoBox>
      <AditionalInfoBox kind={transaction.kind}>
        <span>{transaction.kind}</span>
        <span>{`${formatDate(transaction.date)} às ${formatHour(
          transaction.hour
        )}`}</span>
      </AditionalInfoBox>
    </Container>
  );
};
