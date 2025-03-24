import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LocationCardContainer = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    background-color: #F7F7F7;
    border-radius: 10px;
    box-shadow: 0 0 10px #000;
    margin: 20px;
    padding: 20px;
    cursor: pointer;
`;

export const RouterLink = styled(Link)`
    text-decoration: none;
`;

export const LocationImage = styled.img`
    width: 100%;
    height: 70%;
    border-radius: 10px;
`;

export const LocationName = styled.p`
    color: #000000;
    font-size: 30px;
`