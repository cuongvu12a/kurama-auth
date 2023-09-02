export interface Account {
  id: string;
  email: string;
  password: string;
  createdAt: Date;
  deletedAt?: Date | null;
}

export interface CreateAccount
  extends Omit<Account, "id" | "createdAt" | "deletedAt"> {
  createdAt?: Date;
}

export interface UpdateAccount extends Partial<Account> {
  id: string;
}

export interface DeleteAccount {
  id: string;
}

export interface IAccountDatabase {
  create: (payload: CreateAccount) => Promise<boolean>;
  update: (payload: UpdateAccount) => Promise<boolean>;
  delete: (payload: DeleteAccount) => Promise<boolean>;
  findOne: (payload: DeleteAccount) => Promise<Account>;
  findMany: (payload: DeleteAccount) => Promise<Account[]>;
}
