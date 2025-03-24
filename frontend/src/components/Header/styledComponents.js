import styled from "styled-components";
import {Link} from 'react-router-dom'

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #fa4d59;
    color: white;
    height: 60px;
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 50px;
`;

export const LinksContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const Links = styled.p`
    margin-right: 20px;
    cursor: pointer;
    font-size: 24px;
    color: white;
`;

export const LogoutButton = styled.button`
    background-color: blue;
    outline: none;
    padding: 10px;
    border-radius: 5px;
    color: white;
    border: none;
    cursor: pointer;
`;

export const LinkRouter = styled(Link)`
    text-decoration: none;
    color: white;
`;