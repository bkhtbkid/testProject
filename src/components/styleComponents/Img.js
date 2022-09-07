import React from "react";
import styled from "styled-components";

const StyledImg = styled.img`
    width: 150px;
    height: 150px;
    margin-right: 30px;
    @media (max-width: 992px) {
        margin-bottom: 20px;
    }
    @media (max-width: 635px) {
        display: none;
    }
`;

function Img(props) {
    return <StyledImg {...props} />;
}

export default Img;
