import styled from "styled-components";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { BiCabinet } from "react-icons/bi";
import UserAvatar from "../features/authentication/UserAvatar";
import { useDarkMode } from "../features/Context/DarkModeContext";

const StyledHeader = styled.ul`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  justify-content: end;
`;

function HeaderMenu() {
  const navigate = useNavigate();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <StyledHeader>
      <li>
        <ButtonIcon onClick={toggleDarkMode}>
          {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
        </ButtonIcon>
      </li>

      <li>
        <ButtonIcon onClick={() => navigate("cabins")}>
          <BiCabinet />
        </ButtonIcon>
      </li>
      <li>
        <UserAvatar />
      </li>
    </StyledHeader>
  );
}

export default HeaderMenu;
