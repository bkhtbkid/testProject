import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    font-weight: 800;
    font-size: 24px;
    line-height: 29px;
    background-color: #e4b062;
    border-radius: 10px;
    width: 213px;
    height: 43px;
    cursor: pointer;
    border: none;
`;

function Button(props) {
    return (
        <div>
            <StyledButton {...props}></StyledButton>
        </div>
    );
}

export default Button;
