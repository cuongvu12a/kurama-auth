import { Query } from "src/configs";

import { createAccounts, createLoginSessions } from "./schemas";

(async () => {
  try {
    const queryCreateTables = [createAccounts, createLoginSessions];

    for (let index = 0; index < queryCreateTables.length; index++) {
      const queryCreateTable = queryCreateTables[index];
      await Query(queryCreateTable);
    }
  } catch (error) {
    throw error;
  } finally {
    console.log("🚀 ~ file: index.ts:28 ~ finally:");
    process.exit();
  }
})();
