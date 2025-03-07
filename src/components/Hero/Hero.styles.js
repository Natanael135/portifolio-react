import styled from "styled-components";
import { theme } from "../../styles/theme";

export const HeroContainer = styled.section`
  padding: ${theme.spacing.section} 0;
  text-align: center;
`;

export const ContentWrapper = styled.div`
  max-width: 48rem;
  margin: 0 auto;
  padding: 1rem;
`;

export const ProfileImage = styled.div`
  width: 12rem;
  height: 12rem;
  margin: 0 auto 2rem;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid ${theme.colors.primary};
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Heading = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${theme.colors.text};
  margin-bottom: 1rem;
`;

export const Subtitle = styled.p`
  font-size: 1.125rem;
  color: ${theme.colors.lightText};
  margin-bottom: 2rem;
`;

export const SkillsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

export const SkillTag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background: ${theme.colors.background};
  border-radius: 9999px;
  font-size: 0.875rem;
  color: ${theme.colors.text};
  i {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const Button = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: ${theme.effects.transition};
  gap: 0.5rem;
  font-size: 0.875rem;

  ${({ primary }) =>
    primary
      ? `
    background: ${theme.colors.primary};
    color: white;
    &:hover {
      background: ${theme.colors.secondary};
    }
  `
      : `
    background: white;
    color: ${theme.colors.primary};
    border: 2px solid ${theme.colors.primary};
    &:hover {
      background: ${theme.colors.primary};
      color: white;
    }
  `}
`;
