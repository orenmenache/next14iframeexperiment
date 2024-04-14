import { OrgenizedEpisodesData } from "../types/dbSchemes";
import { MinifiedChapters } from "./organizeEpisodesData";

export default function orgenizeAcademiaData(
   flatData: OrgenizedEpisodesData[]
) {
   const chaptersMap = new Map();

   flatData.forEach((item) => {
      const {
         chapter_name,
         chapter_order,
         episode_name,
         episode_key,
         episode_order,
         EN,
      } = item;

      // Create a unique key for each chapter with levelId to distinguish chapters across levels
      const chapterKey = `${chapter_order}-${EN}`;

      if (!chaptersMap.has(chapterKey)) {
         chaptersMap.set(chapterKey, {
            chapter: `${chapter_name}`,
            episodes: [],
            EN,
         });
      }

      const chapter = chaptersMap.get(chapterKey);
      chapter.episodes.push({
         episode: episode_name,
         key: episode_key,
         //order: episode_order, // Optionally include if you need to use or display the order explicitly
      });

      // Optionally sort episodes by their order if not guaranteed by the SQL query
      //chapter.episodes.sort((a, b) => a.order - b.order);
   });

   // Convert map to array and sort by chapter order if necessary
   return Array.from(chaptersMap.values()).sort((a, b) => {
      return a.chapter.split(". ")[0] - b.chapter.split(". ")[0]; // Sorting by chapter number extracted from the chapter title
   }) as MinifiedChapters[];
}
