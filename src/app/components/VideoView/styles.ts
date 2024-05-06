'use client';

import styled from 'styled-components';

export const VideoViewContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* flex-grow: 0.5; */
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding: 5px;
    /* margin: auto; */
`;

export const PlayerContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    border-radius: 10px;
    z-index: 1;
`;

export const VideoTitleContainer = styled.div`
    padding: 0 5px;
`;

// export const ResponsiveColumn = styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     align-items: center;

//     // when the screen size is less than 768px,
//     // change the flex direction to column
//     @media (max-width: 768px) {
//         flex-direction: column;
//         width: 600px;
//     }
// `;

export const NextPrevButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px;
    /* background-color: red; */
`;
