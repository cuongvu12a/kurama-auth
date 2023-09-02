import "dotenv/config";

export const ENV = process.env.ENV || "development";
export const PORT = process.env.PORT || "6200";
export const DB_HOST = process.env.DB_HOST || "";
export const DB_USER = process.env.DB_USER || "";
export const DB_PASSWORD = process.env.DB_PASSWORD || "";
export const DB_NAME = process.env.DB_NAME || "kurama-auth";
