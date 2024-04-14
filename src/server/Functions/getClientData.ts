import { MYSQL_DB } from "../classes/MYSQL_DB";
import { runFunctionWithRetry } from "./RunFunctionWithRetry";

export default async function getClientData(clientName: string) {
   const funcName = "getClientData";
   const db = new MYSQL_DB();
   try {
      db.createPool();
      const query = `SELECT * FROM economicnews.ACD__CORE_L1_clients WHERE client_name = '${clientName}'`;
      console.log(query);
      return await runFunctionWithRetry(async () => {
         return await db.pool.query(query);
      }, 5);
   } catch (e) {
      console.error(`error in ${funcName}`, e);
      return [];
   } finally {
      db.pool.end();
   }
}
