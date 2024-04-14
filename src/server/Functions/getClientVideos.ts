import { MYSQL_DB } from "../classes/MYSQL_DB";
import { runFunctionWithRetry } from "./RunFunctionWithRetry";

export default async function getClientVideos(project_id: string) {
   const funcName = "getClientVideos";
   const db = new MYSQL_DB();
   try {
      db.createPool();
      const query = `SELECT * FROM backoffice.videos WHERE projectId = '${project_id}'`;
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
