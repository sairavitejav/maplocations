import styled from 'styled-components';

export const DashboardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 89vh;
    background-image: linear-gradient(#288BFE, #F33538);
`;

export const DashboardHeader = styled.h1`
    color: #ffffff;
    font-size: 50px;
    margin-bottom: 0px;
`;

export const DashboardDescription = styled.p`
    color: #ffffff;
    font-size: 20px;
`;

export const CardsContainer = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
`;