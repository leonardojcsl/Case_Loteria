import styled from 'styled-components';

export const CardBox = styled.div`
    border: solid 1px red;
    display: flex;
    flex-direction: column;
    max-height: 15em;
    max-width: 8em; 
    align-items: center;
    text-align: center;

    img {
        max-height: 10em;
        max-width: 15em;
    };

    p {
        font-size: smaller;
    }
`

export const Grid = styled.div`
    display: grid;
    border: solid red 2px;
    justify-content: center;
    align-items: baseline;
    grid-template-columns: repeat(6, 12.5em);
    grid-template-rows: 15em;
    grid-gap: 1.5em;
`
