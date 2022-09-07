import React from "react";
import styled from "styled-components";

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    @media (max-width: 635px) {
        grid-template-columns: 1fr;
    }
`;

function Grid({ children }) {
    return <StyledGrid>{children}</StyledGrid>;
}

export default Grid;
