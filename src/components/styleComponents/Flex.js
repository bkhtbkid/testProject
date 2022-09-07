import React from "react";
import styled from "styled-components";

const StyledFlex = styled.div`
    display: flex;
    margin-bottom: ${(props) => props.margin}px;
    justify-content: ${(props) => props.content};
    align-items: ${(props) => props.alignItems};

    @media (max-width: 992px) {
        display: block;
    }
`;

function Flex(props) {
    return <StyledFlex {...props}></StyledFlex>;
}

export default Flex;
