import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import { HiOutlineMenu } from "react-icons/hi";
import ButtonIcon from "./ButtonIcon";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 2.4rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    padding: 1.2rem 4.8rem;
    justify-content: flex-end;
  }
`;

const MenuButton = styled.div`
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`;

function Header({ onToggleMenu }) {
  return (
    <StyledHeader>
      <MenuButton>
        <ButtonIcon onClick={onToggleMenu}>
          <HiOutlineMenu />
        </ButtonIcon>
      </MenuButton>
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
