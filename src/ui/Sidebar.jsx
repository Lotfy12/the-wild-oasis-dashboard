import styled from "styled-components";
import MainNav from "./MainNav";
import Logo from "./Logo";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineX } from "react-icons/hi";

const Overlay = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  z-index: 90;
  transition: all 0.3s;

  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledSideBar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  /* Mobile settings */
  position: fixed;
  top: 0;
  left: 0;
  width: 26rem;
  height: 100vh;
  z-index: 100;
  transform: ${(props) => (props.isOpen ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;
  box-shadow: ${(props) => (props.isOpen ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" : "none")};

  display: flex;
  flex-direction: column;
  gap: 2.3rem;

  @media (min-width: 768px) {
    position: static;
    height: auto;
    transform: none;
    grid-row: 1 / -1;
    z-index: 1;
    box-shadow: none;
  }
`;

const CloseButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (min-width: 768px) {
    display: none;
  }
`;

function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {isOpen && <Overlay onClick={onClose} />}
      <StyledSideBar isOpen={isOpen}>
        <CloseButtonWrapper>
          <ButtonIcon onClick={onClose}>
            <HiOutlineX />
          </ButtonIcon>
        </CloseButtonWrapper>
        <Logo />
        <MainNav />
      </StyledSideBar>
    </>
  );
}

export default Sidebar;
