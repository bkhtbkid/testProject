import React from "react";
import styled from "styled-components";

const StyledMarginBottom = styled.div`
    margin-bottom: ${(props) => props.marginBottom}px;
`;

function MarginBottom(props) {
    return <StyledMarginBottom {...props}></StyledMarginBottom>;
}

export default MarginBottom;
