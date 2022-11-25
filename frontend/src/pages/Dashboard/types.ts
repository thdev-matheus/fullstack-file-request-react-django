export interface ITransaction {
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

export interface IStore {
  id: string;
  name: string;
  owner_name: string;
  balance: number;
  transactions: ITransaction[];
}
