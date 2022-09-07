import styled from "styled-components";

const StyledAdmin = styled.div`
    display: block;
    @media (max-width: 992px) {
        display: none;
    }
`;

function Admin({ children }) {
    return <StyledAdmin>{children}</StyledAdmin>;
}

export default Admin;
