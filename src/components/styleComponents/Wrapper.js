import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    max-width: 480px;
    height: 330px;
    border: 5px solid #27569c;
    border-radius: 6px;
    margin: 0 auto;
    text-align: center;
    padding: 25px 20px;
    animation: showLogin 1s ease-in-out;
    background-color: #fff;
    @media (max-width: 510px) {
        padding-top: 10px;
    }
    @keyframes showLogin {
        from {
            margin-top: -50px;
            opacity: 0;
        }
        to {
            margin-top: 0;
            opacity: 1;
        }
    }
`;

function Wrapper(props) {
    return <StyledWrapper {...props}></StyledWrapper>;
}

export default Wrapper;
