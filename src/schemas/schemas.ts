import { RawQuery } from "src/types";

export const createAccounts: RawQuery = `
  CREATE TABLE IF NOT EXISTS accounts (
    id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    deletedAt DATETIME
  );
`;

export const createLoginSessions: RawQuery = `
  CREATE TABLE IF NOT EXISTS loginSessions (
    id VARCHAR(255) PRIMARY KEY,
    accountId VARCHAR(255) NOT NULL,
    sessionId VARCHAR(255) NOT NULL UNIQUE,
    sessionKey VARCHAR(255) NOT NULL UNIQUE,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    expiredAt DATETIME NOT NULL,
    CONSTRAINT FK_LoginSessionAccount FOREIGN KEY (accountId) REFERENCES accounts(id)
  );
`;
