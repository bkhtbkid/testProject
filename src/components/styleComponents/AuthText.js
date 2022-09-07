import React from "react";
import styled from "styled-components";

const StyledAuthText = styled.p`
    align-self: center;
    margin-right: 10px;
    margin-bottom: 13px;
`;

function AuthText({ children }) {
    return <StyledAuthText>{children}</StyledAuthText>;
}

export default AuthText;
