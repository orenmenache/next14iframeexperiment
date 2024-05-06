'use client';

import Video from '../Video';
import { MinifiedEpisodes } from '../../../server/Functions/organizeEpisodesData';
import { Button } from 'flowbite-react';
import { HiOutlineArrowRight, HiOutlineArrowLeft } from 'react-icons/hi';
import GuestModal from '../GuestModal';
import { useState } from 'react';
import {
    NextPrevButtonContainer,
    PlayerContainer,
    VideoTitleContainer,
    VideoViewContainer,
} from './styles';

type VideoViewPrpos = {
    episodes: MinifiedEpisodes[];
    activeChapter: string;
    episodeIndex: number;
    setEpisodeIndex: (index: number) => void;
    url: string;
};

export default function VideoView({
    episodes,
    activeChapter,
    episodeIndex,
    setEpisodeIndex,
    url,
}: VideoViewPrpos) {
    const [showModal, setShowModal] = useState(false);

    const onClickIncrementEpisodeIndex = () => {
        if (episodeIndex < episodes.length - 1) {
            setEpisodeIndex(episodeIndex + 1);
            if (episodes[episodeIndex + 1].key === '') {
                setEpisodeIndex(episodeIndex);
                setShowModal(true);
            }
        }
    };

    const onClickDecrementEpisodeIndex = () => {
        if (episodeIndex > 0) {
            setEpisodeIndex(episodeIndex - 1);
        }
    };

    return (
        <VideoViewContainer>
            <GuestModal
                showModal={showModal}
                setShowModal={setShowModal}
                url={url}
            />

            <PlayerContainer>
                <Video
                    videoIndex={episodeIndex}
                    videoKey={episodes[episodeIndex].key}
                    activeChapter={activeChapter}
                />
            </PlayerContainer>
            <VideoTitleContainer>
                <Button
                    color="blue"
                    key={episodes[episodeIndex].episode}
                    style={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        padding: '0 1rem',
                        margin: 'auto',
                        width: '100%',
                        cursor: 'default',
                        border: 'none',
                    }}
                >
                    {episodes[episodeIndex].episode}
                </Button>
            </VideoTitleContainer>
            <NextPrevButtonContainer>
                <Button
                    color="blue"
                    size="sm"
                    style={{
                        width: '48%',
                        textAlign: 'center',
                    }}
                    onClick={onClickDecrementEpisodeIndex}
                    disabled={episodeIndex === 0}
                >
                    <HiOutlineArrowLeft className="ml-2 h-5 w-5" />
                    <span style={{ color: 'transparent' }}>...</span>
                    Prev
                </Button>
                <Button
                    color="blue"
                    size="sm"
                    style={{ width: '48%' }}
                    onClick={onClickIncrementEpisodeIndex}
                    disabled={episodeIndex === episodes.length - 1}
                >
                    Next
                    <HiOutlineArrowRight className="ml-2 h-5 w-5" />
                </Button>
            </NextPrevButtonContainer>

            {/* <div
               className="video-episode-library-container-version2"
               style={{
                  display: "flex",
                  flexDirection: "column",
               }}
            ></div> */}
        </VideoViewContainer>
    );
}
