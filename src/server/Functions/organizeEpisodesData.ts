import { EpisodeData } from "../types/dbSchemes";
import fs from "fs";
export interface Episodes {
   episode: string;
   key: string;
   order: number;
   chapterId: number;
}

export interface MinifiedEpisodes {
   episode: string;
   key: string;
}

export interface Chapters {
   chapter: string;
   chapterId: number;
   episodes: Episodes[];
   levelId: number;
   chapterOrder: number;
}

export interface MinifiedChapters {
   chapter: string;
   episodes: MinifiedEpisodes[];
   levelId: number;
}

export default function organizeEpisodesData(
   data: EpisodeData[],
   dyntubeEpisodes: MinifiedEpisodes[]
) {
   const episodes: Episodes[] = createEpisode(data, dyntubeEpisodes);
   const chapters: Chapters[] = createChapters(data);
   let minifiedChapters: MinifiedChapters[] = [];
   for (const chapter of chapters) {
      chapter.episodes = episodes.filter(
         (episode) => episode.chapterId === chapter.chapterId
      ) as Episodes[];
      chapter.episodes.sort((a, b) => a.order - b.order);
      minifiedChapters.push(
         createMinifiedChapter(chapter, chapter.episodes, chapter.levelId)
      );
   }
   return minifiedChapters;
}

function createEpisode(
   episodes: EpisodeData[],
   dyntubeEpisodes: MinifiedEpisodes[]
) {
   return episodes.map((episode) => {
      const indexedEpisode = dyntubeEpisodes.find((dyntubeEpisode) => {
         const episodeName = episode.episode_name.toLowerCase().trim();
         const dyntubeEpisodeName = dyntubeEpisode.episode.toLowerCase().trim();
         return episodeName == dyntubeEpisodeName;
      });
      if (!indexedEpisode)
         throw new Error(
            `Episode ${episode.episode_name} not found in dyntubeEpisodes`
         );
      return {
         episode: episode.episode_name,
         key: indexedEpisode.key,
         order: episode.episode_order,
         chapterId: episode.chapter_id,
      };
   });
}

function createChapters(episodes: EpisodeData[]) {
   return episodes
      .map((episode) => {
         return {
            chapter: episode.chapter_name,
            chapterId: episode.chapter_id,
            episodes: [],
            levelId: episode.level_id,
            chapterOrder: episode.chapter_order,
         };
      })
      .sort((a, b) => a.chapterOrder - b.chapterOrder)
      .filter((chapter, index, self) => {
         return (
            index === self.findIndex((t) => t.chapterId === chapter.chapterId)
         );
      });
}

function createMinifiedChapter(
   chapter: Chapters,
   episodes: Episodes[],
   levelId: number
) {
   return {
      chapter: chapter.chapter,
      episodes: chapter.episodes.map((episode) => {
         return {
            episode: episode.episode,
            key: episode.key,
         };
      }),
      levelId: chapter.levelId,
   };
}
