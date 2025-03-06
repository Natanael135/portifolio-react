import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const StyledHeader = styled.header`
  padding: 1rem;
  position: fixed;
  width: 100%;
  top: 0;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  z-index: 1000;
`;

export const Nav = styled.nav`
  max-width: 80rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;

export const NavLink = styled.a`
  color: ${theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  transition: ${theme.effects.transition};
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
  
  &:hover {
    color: ${theme.colors.primary};
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SocialLink = styled.a`
  color: ${theme.colors.text};
  transition: ${theme.effects.transition};
  
  &:hover {
    color: ${theme.colors.primary};
  }
`;