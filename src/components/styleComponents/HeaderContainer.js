import styled from "styled-components";

const StyledHeaderContainer = styled.div`
    background-color: #e4b062;
    height: 118px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    margin-bottom: 20px;
    @media (max-width: 635px) {
        padding: 0 15px;
    }
`;

export default StyledHeaderContainer;
