namespace NodeJS {
  export interface ProcessEnv {
    ENV: "development" | "staging" | "production";
    PORT: string;
    DB_HOST: string;
    DB_USER: string;
    DB_PASSWORD: string;
    DB_NAME: string;
  }
}
