import React from "react";
import styled from "styled-components";

const StyledItem = styled.div`
    font-weight: 800;
    font-size: 16px;
    line-height: 19px;
    border: 5px solid #27569c;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    padding: 25px 20px;
`;

function Item(props) {
    return <StyledItem {...props}></StyledItem>;
}

export default Item;
