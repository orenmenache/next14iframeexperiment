export type langCode =
   | "EN"
   | "IT"
   | "DE"
   | "FR"
   | "HU"
   | "CZ"
   | "JP"
   | "TCN"
   | "NL"
   | "PL"
   | "PT"
   | "RU"
   | "SWE"
   | "MY"
   | "RO"
   | "ES"
   | "TR"
   | "SR"
   | "IR"
   | "HI"
   | "TH"
   | "UKR"
   | "AZ"
   | "KK"
   | "ID"
   | "UZ"
   | "SCN"
   | "VN";

export interface Episode {
   episode_id: number;
   chapter_id: number;
   episode_order: number;
   time_length: number;
   char_length: number;
   EN: string;
   IT?: string;
   DE?: string;
   FR?: string;
   HU?: string;
   CZ?: string;
   JP?: string;
   TCN?: string;
   NL?: string;
   PL?: string;
   PT?: string;
   RU?: string;
   SWE?: string;
   MY?: string;
   RO?: string;
   ES?: string;
   TR?: string;
   SR?: string;
   IR?: string;
   HI?: string;
   TH?: string;
   UKR?: string;
   AZ?: string;
   KK?: string;
   ID?: string;
   UZ?: string;
   SCN?: string;
   VN?: string;
}

export interface Chapter {
   chapter_id: number;
   level_id: number;
   time_length: number;
   char_length: number;
   EN: string;
   IT?: string;
   DE?: string;
   FR?: string;
   HU?: string;
   CZ?: string;
   JP?: string;
   TCN?: string;
   NL?: string;
   PL?: string;
   PT?: string;
   RU?: string;
   SWE?: string;
   MY?: string;
   RO?: string;
   ES?: string;
   TR?: string;
   SR?: string;
   IR?: string;
   HI?: string;
   TH?: string;
   UKR?: string;
   AZ?: string;
   KK?: string;
   ID?: string;
   UZ?: string;
   SCN?: string;
   VN?: string;
}

export interface Level {
   level_id: number;
   time_length: number;
   char_length: number;
   EN: string;
   IT?: string;
   DE?: string;
   FR?: string;
   HU?: string;
   CZ?: string;
   JP?: string;
   TCN?: string;
   NL?: string;
   PL?: string;
   PT?: string;
   RU?: string;
   SWE?: string;
   MY?: string;
   RO?: string;
   ES?: string;
   TR?: string;
   SR?: string;
   IR?: string;
   HI?: string;
   TH?: string;
   UKR?: string;
   AZ?: string;
   KK?: string;
   ID?: string;
   UZ?: string;
   SCN?: string;
   VN?: string;
}

export interface Client {
   client_id: number;
   dyntube_project_id: string;
   client_name: string;
   lang: langCode;
   style_scheme: string;
   login_url: string;
   register_url: string;
}

export interface EpisodeData {
   episode_id: number;
   episode_name: string;
   episode_char_length: number;
   episode_time_length: number;
   chapter_id: number;
   episode_order: number;
   chapter_name: string;
   chapter_char_length: number;
   chapter_time_length: number;
   chapter_order: number;
   level_id: number;
   level_name: string;
}

export interface DyntubeVideo {
   id: string;
   duration: Date;
   projectId: string;
   accountKey: string;
   region: string;
   captions: any[];
   video_key: string;
   channelKey: string;
   privateLink: string;
   hlsLink: string;
   planType: number;
   mp4Url: string;
   mp4Urls: string;
   formats: any[];
   hlsUrl: string;
   hlsUrlWeb: string;
   title: string;
   description: string;
   options: any[];
   tags: string[];
   version: number;
   status: number;
   created: Date;
}

export interface OrgenizedEpisodesData {
   chapter_name: string;
   chapter_order: number;
   client_name: string;
   EN: string;
   episode_key: string;
   episode_name: string;
   episode_order: number;
}
