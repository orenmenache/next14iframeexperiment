'use client';

import { Academia } from '@/app/page';
import Drawer from './Drawer';
import { useState } from 'react';
import VideoView from './VideoView';
import getEpisodesData from '../Functions/getEpisodeData';
import { MinifiedChapters } from '../Functions/organizeEpisodesData';

type PropsType = {
    videoData: MinifiedChapters[];
};

export default function AcademyApp(props: PropsType) {
    const videoData = props.videoData;
    const cahpters = videoData.map((academia) => academia.chapter);
    const [activeChapter, setActiveChapter] = useState(cahpters[0]);
    let episodes = videoData.filter(
        (academia) => academia.chapter === activeChapter
    )[0].episodes;
    return (
        <>
            {console.log('videoData', videoData)}
            <div className="frame">
                <Drawer
                    onChangeActiveChapter={setActiveChapter}
                    chapters={cahpters}
                />
                <VideoView episodes={episodes} activeChapter={activeChapter} />
            </div>
        </>
    );
}