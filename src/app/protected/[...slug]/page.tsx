import { Academia } from '@/app/page';
import { MYSQL_DB } from '@/server/classes/MYSQL_DB';
import AcademyApp from '@/server/Components/AcademyApp';
import FullAcademy from '@/server/Components/FullAcademy';
import { MinifiedChapters } from '@/server/Functions/organizeEpisodesData';
import { runFunctionWithRetry } from '@/server/Functions/RunFunctionWithRetry';
import axios from 'axios';
import { headers } from 'next/headers';
import React from 'react';

type SearchParams = {
    clientId: string;
    clientName: string;
    client: string;
};

type PageProps = {
    params: { slug: string[] };
};

// test
const dummy: MinifiedChapters[] = [
    {
        episodes: [
            {
                episode:
                    '1. Forex Double Top And Double Bottom Formation Patterns',
                key: 'sivLZRsA7UejUo4gRZN1EQ',
            },
            {
                episode: '2. Learn Forex Head And Shoulders Pattern',
                key: 'Jth83q6cfUCO7zLYIVkrxw',
            },
            {
                episode: '3. Forex Inverse Head And Shoulders Pattern',
                key: 'CUo2wHYlUu8DFsuxsHdA',
            },
            {
                episode: '4. Forex Bull Flag Formation Patterns',
                key: 'U7J0rcQsSkuxqcQsoRTaqg',
            },
            {
                episode: '5. Forex Bear Flag Patterns',
                key: '5kkIIaNiNkmblMFk4QPiw',
            },
            {
                episode: '6. Forex Bullish And Bearish Pennant Formation',
                key: 'YbIO6ZKx20m6Hu4P8897JA',
            },
            {
                episode: '7. Forex Falling Wedge Pattern',
                key: 'DFE6UGTFkkCbZTBvmAqZbg',
            },
            {
                episode:
                    '8. Forex Ascending And Descending Triangle Formations',
                key: '3DN70JImUqjiAI9ZEcg',
            },
            {
                episode: '9. Forex Symmetrical Triangle Pattern',
                key: 'HOnbqTLDzECraLHSIm9qw',
            },
        ],
        chapter: 'Chart Formation Patterns',
        levelId: 1,
    },
    {
        chapter: 'Forex Indicators',
        levelId: 1,
        episodes: [
            {
                episode:
                    '10. Forex Double Top And Double Bottom Formation Patterns',
                key: 'R0sEV05rEIkRaBfV1zw',
            },
            {
                episode: '20. Learn Forex Head And Shoulders Pattern',
                key: 'YbrGhfGET0maoLe0MIaUQ',
            },
            {
                episode: '30. Forex Inverse Head And Shoulders Pattern',
                key: '0UF3YCY0UOhdktn4v3sxQ',
            },
            {
                episode: '40. Forex Bull Flag Formation Patterns',
                key: 'v1nTG6qMxUWkCDAMtkwpmA',
            },
            {
                episode: '50. Forex Bear Flag Patterns',
                key: 'QdCM4mdkGkSeAaOxiL02Jg',
            },
        ],
    },
];

export default async function Page({ params }: PageProps) {
    console.log('You got to search');

    const client = params.slug[0];
    const clientId = params.slug[1];
    const clientName = params.slug[2];
    if (!client) return <h1>No client</h1>;
    if (!clientId || !clientName) return <h1>No clientId or no clientName</h1>;
    let clientVideos: string[] = [];
    if (await clientExists(clientId, clientName)) {
        clientVideos = await getClientVideos();
    }
    console.log(clientVideos);
    return (
        <div
            style={{
                height: '500px',
                width: '500px' /*, background: 'green'*/,
            }}
        >
            <AcademyApp videoData={dummy} />
        </div>
    );
}

async function getClientVideos() {
    const db = new MYSQL_DB();
    db.createPool();
    const videos: Video[] = await runFunctionWithRetry(() => {
        return db.SELECT('backoffice.videos', {
            projectId: '77qeGi0Eu9xPv5EcNe8w',
        });
    }, 5);

    //console.log(videosEmbbedString);
    return videos.map((video) => video.channelKey);
}

async function clientExists(clientId: string, clientName: string) {
    try {
        const response = await axios.post(
            'https://traderslab.education/api/v1',
            {
                user_id: Number(clientId),
                user_name: clientName,
            },
            {
                headers: {
                    authorization: 'GcraeyIJAz8svdo',
                    'Content-Type': 'application/json',
                },
            }
        );
        return true;
        console.log(response.data);
    } catch (e) {
        console.log(e);
        return false;
    }
}
interface validatedUser {
    ID: string;
    user_login: string;
    user_nicename: string;
    user_email: string;
    user_url: string;
    user_registered: string;
    user_status: string;
    display_name: string;
}

export interface Video {
    id: string;
    duration: number;
    projectId: string;
    accountKey: string;
    region: any;
    captions: any;
    video_key: string;
    channelKey: string;
    privateLink: string;
    hlsLink: string;
    planType: any;
    mp4Url: any;
    mp4Urls: any;
    formats: any;
    hlsUrl: any;
    hlsUrlWeb: any;
    title: string;
    description: any;
    options: any;
    tags: any;
    version: any;
    status: any;
    created: any;
}
