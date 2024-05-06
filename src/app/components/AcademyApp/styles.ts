'use client';

import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 1000px;
    background-color: transparent;
    /* margin: auto; */
    justify-content: center;
    align-items: center;
    gap: 5px;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 500px;
    }
`;

export const ChapterListContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* flex-grow: 1; */
    background-color: transparent;
    gap: 5px;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    /* height: 100%; */
    height: 450px;
    overflow-y: auto;
    width: 350px;

    @media (max-width: 768px) {
        width: 100%;
        height: auto;
    }
`;
