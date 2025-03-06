import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const SkillsContainer = styled.section`
  padding: ${theme.spacing.section} 0;
  background: ${theme.colors.background};
  padding: 1rem;
  margin-bottom: 2rem;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${theme.colors.text};
  text-align: center;
  margin-bottom: 1rem;
`;

export const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  color: ${theme.colors.lightText};
  text-align: center;
  max-width: 48rem;
  margin: 1rem auto;
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 2rem;
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const SkillCard = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  user-select: none;
  transition: ${theme.effects.transition};

  &:hover {
    transform: translateY(-10px);
    box-shadow: ${theme.effects.hoverShadow};
  }
`;

export const SkillIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  background: ${theme.colors.primary}10;
  border-radius: 1rem;
  margin-bottom: 1.5rem;

  i {
    font-size: 2rem;
    color: ${theme.colors.primary};
  }
`;

export const SkillTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${theme.colors.text};
  margin-bottom: 1.5rem;
`;

export const SkillList = styled.ul`
  list-style: none;
  display: grid;
  gap: 1rem;
  
`;

export const SkillItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: ${theme.colors.background};
  border-radius: 0.75rem;
  transition: ${theme.effects.transition};
  

  &:hover {
    background: ${theme.colors.primary}50;
  }

  i {
    font-size: 3rem;
    color: ${theme.colors.primary};
  }

  h4 {
    font-size: 1rem;
    font-weight: 600;
    color: ${theme.colors.text};
    margin-bottom: 0.25rem;
  }
`;

export const SkillDescription = styled.p`
  font-size: 0.875rem;
  color: ${theme.colors.lightText};
`;