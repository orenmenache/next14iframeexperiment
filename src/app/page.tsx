export interface Episode {
   name: string;
   key: string;
}
export interface Academia {
   episodes: Episode[];
   chapter: string;
}
export default async function Home() {
   return <main></main>;
}
