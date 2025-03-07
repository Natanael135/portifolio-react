import styled from "styled-components";
import { theme } from "../../styles/theme";

export const CardContainer = styled.div`
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: ${theme.effects.transition};

  &:hover {
    transform: translateY(-10px);
    box-shadow: ${theme.effects.hoverShadow};
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  cursor: pointer;
  padding: 2rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 500;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ImageContainer}:hover & {
    opacity: 1;
  }
`;

export const CardContent = styled.div`
  padding: 1.5rem;
`;

export const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${theme.colors.text};
  margin-bottom: 0.5rem;
`;

export const CardDescription = styled.p`
  font-size: 0.875rem;
  color: ${theme.colors.lightText};
  margin-bottom: 1rem;
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const Tag = styled.span`
  padding: 0.25rem 0.75rem;
  background: ${theme.colors.background};
  border-radius: 9999px;
  font-size: 0.75rem;
  color: ${theme.colors.text};
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const DemoButton = styled.a`
  flex: 1;
  padding: 0.5rem 1rem;
  background: ${theme.colors.primary};
  color: white;
  text-align: center;
  border-radius: 0.5rem;
  align-content: center;
  transition: ${theme.effects.transition};

  &:hover {
    background: ${theme.colors.secondary};
  }
`;

export const CodeButton = styled.a`
  padding: 0.5rem 1rem;
  border: 2px solid ${theme.colors.primary};
  color: ${theme.colors.primary};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${theme.effects.transition};

  &:hover {
    background: ${theme.colors.primary};
    color: white;
  }
`;
