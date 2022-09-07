import React from "react";
import styled from "styled-components";

const StyledMobileLogo = styled.div`
    display: none;
    @media (max-width: 500px) {
        display: block;
    }
`;

function MobileLogo({ children }) {
    return <StyledMobileLogo>{children}</StyledMobileLogo>;
}

export default MobileLogo;
