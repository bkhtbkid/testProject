import React from "react";
import styled from "styled-components";

const StyledInput = styled.input.attrs(() => ({
    type: "text",
}))`
    border: 4px solid #27569c;
    border-radius: 4px;
    background-color: #d9d9d9;
    height: 45px;
    max-width: 295px;
    width: 100%;
    padding: 0 10px;
    outline: none;
`;

const StyledPasswordInput = styled.input.attrs(() => ({
    type: "password",
}))`
    border: 4px solid #27569c;
    border-radius: 4px;
    background-color: #d9d9d9;
    height: 45px;
    max-width: 295px;
    width: 100%;
    padding: 0 10px;
    outline: none;
`;

function Input(props) {
    return <StyledInput {...props} />;
}

export const PasswordInput = (props) => {
    return <StyledPasswordInput {...props} />;
};

export default Input;
