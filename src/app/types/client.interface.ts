export interface Client {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  address: string;
  types: string;
  accountNumber: string;
  balance: number;
}

export type PartialClient = Partial<Client>
