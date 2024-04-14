import { MYSQL_DB } from "../classes/MYSQL_DB";
import { langCode } from "../types/dbSchemes";
import { MinifiedChapters } from "./organizeEpisodesData";
import { runFunctionWithRetry } from "./RunFunctionWithRetry";

export default async function getAcademiaData(
   clientName: string,
   lang: langCode = "EN"
) {
   const db = new MYSQL_DB();
   try {
      db.createPool();
      const query = `SELECT 
                     c.client_name,
                     l.${lang}, 
                     ch.chapter_name, 
                     e.episode_name, 
                     e.episode_key,
                     ch.chapter_order,
                     e.episode_order
                 FROM economicnews.ACD__CORE_L3_clientEpisodes as e
                 JOIN economicnews.ACD__CORE_L2_clientChapters as ch ON e.chapter_id = ch.chapter_id
                 JOIN economicnews.ACD__CORE_L1_levelNames as l ON ch.level_id = l.level_id
                 JOIN economicnews.ACD__CORE_L1_clients as c  ON ch.client_id = c.client_id
                 where client_name = '${clientName}'
                 ORDER BY ch.chapter_order, e.episode_order;`;
      return (
         await runFunctionWithRetry(() => {
            return db.pool.query(query);
         }, 5)
      )[0];
   } catch (error) {
      console.error("Failed to get data:", error);
   } finally {
      db.pool.end();
   }
}
