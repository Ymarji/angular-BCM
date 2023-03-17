export interface Client {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  address: string;
}

export type PartialClient = Partial<Client>
