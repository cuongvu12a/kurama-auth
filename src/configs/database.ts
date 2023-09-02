import * as mysql from "mysql2/promise";

import { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } from "src/constants";
import { RawQuery } from "src/types";

const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

export const Query = async (sql: RawQuery, values?: any[]) => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query(sql, values);
    return rows;
  } catch (error) {
    throw error;
  } finally {
    connection.release();
  }
};
