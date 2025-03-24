import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { FaMapLocationDot } from "react-icons/fa6";
import {
  NavbarContainer,
  LogoContainer,
  LinksContainer,
  Links,
  LogoutButton,
  LinkRouter,
} from "./styledComponents";

const Header = () => {
  const navigate = useNavigate();
  const onClickLogout = () => {
    Cookies.remove("jwtToken");
    navigate("/");
  };
  return (
    <NavbarContainer>
      <LinkRouter to="/dashboard">
        <LogoContainer>
          <FaMapLocationDot />
        </LogoContainer>
      </LinkRouter>
      <LinksContainer>
        <LinkRouter to="/dashboard">
          <Links>Dashboard</Links>
        </LinkRouter>
        <LogoutButton onClick={onClickLogout} type="submit">
          Logout
        </LogoutButton>
      </LinksContainer>
    </NavbarContainer>
  );
};
export default Header;
