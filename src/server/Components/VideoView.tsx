'use client';

import { Episode } from '@/app/page';
import { use, useEffect, useRef, useState } from 'react';
import Video from './Video';
import { MinifiedEpisodes } from '../Functions/organizeEpisodesData';
import { Button } from 'flowbite-react';

type VideoViewPrpos = {
    episodes: MinifiedEpisodes[];
    activeChapter: string;
};

export default function VideoView({ episodes, activeChapter }: VideoViewPrpos) {
    const [episodeIndex, setEpisodeIndex] = useState(0);

    const onClickIncrementEpisodeIndex = () => {
        if (episodeIndex < episodes.length - 1) {
            setEpisodeIndex(episodeIndex + 1);
        }
    };

    const onClickDecrementEpisodeIndex = () => {
        if (episodeIndex > 0) {
            setEpisodeIndex(episodeIndex - 1);
        }
    };

    return (
        <>
            <section className="video-frame">
                <h1>{episodeIndex}</h1>
                <div id="player">
                    <Video
                        videoIndex={episodeIndex}
                        videoKey={episodes[episodeIndex].key}
                        activeChapter={activeChapter}
                    />
                </div>

                <div
                    className="episode-library"
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <Button
                        onClick={onClickDecrementEpisodeIndex}
                        disabled={episodeIndex === 0}
                    >
                        Prev
                    </Button>
                    <p
                        className="font-normal text-gray-700 dark:text-gray-400"
                        key={episodes[episodeIndex].episode}
                        style={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            padding: '0 1rem',
                            margin: 'auto',
                        }}
                    >
                        {episodes[episodeIndex].episode}
                    </p>
                    <Button
                        onClick={onClickIncrementEpisodeIndex}
                        disabled={episodeIndex === episodes.length - 1}
                    >
                        Next
                    </Button>
                </div>

                {/* <div className="video-library">
                    {episodes.slice(1, 4).map((episode, index) => {
                        return (
                            <div key={index}>
                                <button
                                    className=""
                                    key={episode.key}
                                    onClick={() => setEpisodeIndex(index)}
                                >
                                    <p key={episode.episode}>
                                        {episode.episode}
                                    </p>
                                </button>
                            </div>
                        );
                    })}
                </div> */}
            </section>
        </>
    );
}
