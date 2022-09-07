import React from "react";
import styled from "styled-components";

const StyledText = styled.div`
    font-weight: 800;
    font-size: ${(props) => props.fontSize}px;
    line-height: ${(props) => props.lineHeight}px;
    margin-right: ${(props) => props.marginRight}px;
`;

function Text(props) {
    return <StyledText {...props} />;
}

export default Text;
