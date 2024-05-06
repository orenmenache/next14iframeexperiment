'use client';

import { useState } from 'react';
import VideoView from '../VideoView';
import { MinifiedChapters } from '../../../server/Functions/organizeEpisodesData';
import { Button } from 'flowbite-react';
import LoginTrigger from '../LoginTrigger';
import { ChapterListContainer, MainContainer } from './styles';
import { HiOutlineArrowRight, HiOutlineArrowLeft } from 'react-icons/hi';

type AcademyAppProps = {
    videoData: MinifiedChapters[];
    client_url: { login_url: string; register_url: string };
};

export default function AcademyApp__CC({
    videoData,
    client_url,
}: AcademyAppProps) {
    // const chapters = videoData.map((academia) => academia.chapter);
    console.log(client_url);
    const [activeChapter, setActiveChapter] = useState(videoData[0].chapter);
    const [episodes, setEpisodes] = useState(videoData[0].episodes);
    const [episodeIndex, setEpisodeIndex] = useState(0);
    /**
     * We'll define a range of chapters to be displayed
     * as we have limited height for the episode list.
     * So the list will consist of 5 chapters at a time.
     * And a button on the top and bottom to navigate
     */
    const [chapterRange, setChapterRange] = useState([0, 5]);

    const onClickChapter = (chapter: string) => {
        setActiveChapter(chapter);
        setEpisodes(
            videoData.filter((academia) => academia.chapter === chapter)[0]
                .episodes
        );
        setEpisodeIndex(0);
    };

    // chapter navigation
    const onClickLoadNextChapters = () => {
        setChapterRange([chapterRange[0] + 3, chapterRange[1] + 3]);
    };

    const onClickLoadPrevChapters = () => {
        setChapterRange([chapterRange[0] - 3, chapterRange[1] - 3]);
    };

    return (
        <MainContainer>
            {/* <LoginTrigger
                    targetOrigin={'https://traderslab.education/our-courses/'}
                    url={client_url.login_url}
                    buttonText="Log In"
                    setShowModal={() => {}}
                /> */}
            <ChapterListContainer>
                <Button
                    color="gray"
                    size="sm"
                    style={{ width: '100%', maxWidth: '350px' }}
                    onClick={onClickLoadPrevChapters}
                    disabled={chapterRange[0] < 1}
                >
                    <HiOutlineArrowLeft className="ml-2 h-5 w-5" />
                    <span style={{ color: 'transparent' }}>...</span>
                    Load previous chapters
                </Button>

                {/* 
                Previous version that displayed all chapters at once

                {videoData.map((chapterData: MinifiedChapters) => (
                    <Button
                        key={chapterData.chapter}
                        color="blue"
                        onClick={() => onClickChapter(chapterData.chapter)}
                    >
                        {chapterData.chapter}
                    </Button>
                ))} */}

                {videoData
                    .slice(chapterRange[0], chapterRange[1])
                    .map((chapterData: MinifiedChapters) => (
                        <Button
                            key={chapterData.chapter}
                            color="blue"
                            style={{ width: '100%', maxWidth: '350px' }}
                            onClick={() => onClickChapter(chapterData.chapter)}
                        >
                            {chapterData.chapter}
                        </Button>
                    ))}

                <Button
                    color="gray"
                    size="sm"
                    style={{ width: '100%', maxWidth: '350px' }}
                    onClick={onClickLoadNextChapters}
                    disabled={chapterRange[1] >= videoData.length}
                >
                    Load next chapters
                    <HiOutlineArrowRight className="ml-2 h-5 w-5" />
                </Button>
            </ChapterListContainer>

            <VideoView
                episodes={episodes}
                activeChapter={activeChapter}
                episodeIndex={episodeIndex}
                setEpisodeIndex={setEpisodeIndex}
                url={client_url.login_url}
            />
        </MainContainer>
    );
}
