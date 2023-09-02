import { Query } from "src/configs";
import { IAccountDatabase } from "src/models";
import { uuid } from "src/utils";

export const accountQueries: IAccountDatabase = {
  create: async (payload) => {
    try {
      const sql = "INSERT INTO accounts (id, email, password) VALUES (?, ?, ?)";
      const result = await Query(sql, [
        uuid(),
        payload.email,
        payload.password,
      ]);
      console.log("🚀 ~ file: accounts.ts:9 ~ create: ~ result:", result);

      return true;
    } catch (error) {
      return false;
    }
  },

  update: async (payload) => {
    return true;
  },

  delete: async (payload) => {
    return true;
  },

  findOne: async () => {
    return {
      id: "",
      email: "",
      password: "",
      createdAt: new Date(),
    };
  },

  findMany: async () => {
    return [];
  },
};
