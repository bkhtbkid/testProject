import React from "react";
import styled from "styled-components";

const StyledLogo = styled.div`
    width: 273px;
    height: 63px;
    @media (max-width: 500px) {
        display: none;
    }
`;

function Logo({ children }) {
    return <StyledLogo>{children}</StyledLogo>;
}

export default Logo;
