import { MYSQL_DB } from "../classes/MYSQL_DB";
import { runFunctionWithRetry } from "./RunFunctionWithRetry";

export default async function getEpisodesData(
   episodes: string[],
   lang: string
) {
   const funcName = "getEpisodesData";
   lang = lang.toUpperCase();
   if (lang.length > 3 || lang.length < 2)
      throw new Error("Invalid language code in " + funcName);
   if (episodes.length === 0)
      throw new Error("No episodes provided" + funcName);
   const db = new MYSQL_DB();
   try {
      db.createPool();
      const query = `SELECT 
                  e.episode_id,
                   e.${lang} as episode_name,
                   e.char_length as episode_char_length,
                   e.time_length as episode_time_length,
                   e.chapter_id,
                   e.episode_order,
                   c.${lang} as chapter_name,
                   c.char_length as chapter_char_length,
                   c.time_length as chapter_time_length,
                   c.level_id,
                   c.chapter_order,
                   l.${lang} as level_name
                   FROM economicnews.ACD__CORE_L3_episodesNames AS e
                   JOIN economicnews.ACD__CORE_L2_chapterNames AS c ON e.chapter_id = c.chapter_id
                   JOIN economicnews.ACD__CORE_L1_levelNames AS l ON c.level_id = l.level_id
                   WHERE e.${lang} IN ( ${episodes
         .map((episode) => `'${episode}'`)
         .join(",")} )`;
      //console.log(query);
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
