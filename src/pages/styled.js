import styled from 'styled-components';

export const CardBox = styled.div`
    border: solid 1px red;
    display: flex;
    flex-direction: column;
    max-height: 18em;
    max-width: 18em; 
    align-items: center;
    text-align: center;

    img {
        max-height: 18em;
        max-width: 18em;
    };

    p {
        font-size: medium
    }
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 500em);
    grid-template-rows: 20em 20em;
    grid-gap: 5px;
`
