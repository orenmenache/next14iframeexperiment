import { MYSQL_DB } from '@/server/classes/MYSQL_DB';
import { runFunctionWithRetry } from '@/server/Functions/RunFunctionWithRetry';
import axios from 'axios';
import React from 'react';

type SearchParams = {
    clientId: string;
    clientName: string;
};

type PageProps = {
    searchParams: SearchParams;
};

// test

export default async function Page({ searchParams }: PageProps) {
    console.log('You got to search');

    const clientId = searchParams.clientId;
    const clientName = searchParams.clientName;

    if (!clientId || !clientName) return <h1>No clientId or no clientName</h1>;
    if (await clientExists(clientId, clientName)) {
        getClientVideos();
    }
    return (
        <div>
            <h2>client id:{clientId}</h2>
            <h2>client name:{clientName}</h2>
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
    const embbedString =
        '<script>!function(e,t,i){if(void 0===e._dyntube_v1_init){e._dyntube_v1_init=!0;var a=t.createElement("script");a.type="text/javascript",a.async=!0,a.src="https://embed.dyntube.com/v1.0/dyntube.js",t.getElementsByTagName("head")[0].appendChild(a)}}(window,document);</script><div data-dyntube-key="$CHANNELKEY$"></div>';
    const videosEmbbedString = [];
    for (const video of videos) {
        videosEmbbedString.push(
            embbedString.replace('$CHANNELKEY$', video.channelKey)
        );
    }
    //console.log(videosEmbbedString);
    return videosEmbbedString;
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

interface Video {
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
