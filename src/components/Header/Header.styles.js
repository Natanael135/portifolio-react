import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StyledHeader = styled.header`
  padding: 1rem;
  position: fixed;
  width: 100%;
  top: 0;
  background: ${theme.colors.background};
  z-index: 1000;
`;

export const Nav = styled.nav`
  max-width: 80rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  flex-direction: row-reverse;

  @media (min-width: 769px) {
    flex-direction: row;
    margin: 0 auto;
  }
`;

export const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
  user-select: none;
  color: ${theme.colors.text};

  @media (min-width: 768px) {
    font-size: 1.875rem;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: ${theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  transition: ${theme.effects.transition};
  display: flex;
  align-items: center;
  gap: 1rem;

  &:hover {
    color: ${theme.colors.primary};
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 767px) {
    margin: auto 0;
    align-items: center;
    margin: auto 0 0 0;
  }
`;

export const SocialLink = styled.a`
  color: ${theme.colors.text};
  transition: ${theme.effects.transition};

  &:hover {
    color: ${theme.colors.primary};
  }
`;

// Novos componentes para o menu mobile
export const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: ${theme.colors.text};
  font-size: 1.5rem;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: ${({ $isOpen }) => ($isOpen ? "0" : "-100%")};
  width: 80%;
  max-width: 300px;
  height: 100dvh;
  background: ${theme.colors.background};
  box-shadow: 2px 0 15px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  transition: left 0.3s ease-in-out;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const CloseButton = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  cursor: pointer;
  color: ${theme.colors.text};
  font-size: 1.5rem;
  padding: 0.5rem;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
`;
