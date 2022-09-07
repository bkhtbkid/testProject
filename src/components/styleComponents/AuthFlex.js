import React from "react";
import styled from "styled-components";

const StyledAuthFlex = styled.div`
    display: flex;
    margin-bottom: ${(props) => props.margin}px;
    justify-content: ${(props) => props.content};
    align-items: ${(props) => props.alignItems};
    @media (max-width: 510px) {
        display: block;
        margin-bottom: 15px;
    }
`;

function AuthFlex(props) {
    return <StyledAuthFlex {...props}></StyledAuthFlex>;
}

export default AuthFlex;
