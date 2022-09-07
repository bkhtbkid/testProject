import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h3`
    color: #27569c;
    margin-bottom: ${(props) => props.marginBottom};
    @media (max-width: 510px) {
        margin-bottom: 10px;
    }
`;

function Title(props) {
    return <StyledTitle {...props}></StyledTitle>;
}

export default Title;
