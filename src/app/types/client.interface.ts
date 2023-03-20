export interface Client {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  address: string;
  accountType: string;
  accountNumber: string;
}

export type PartialClient = Partial<Client>
