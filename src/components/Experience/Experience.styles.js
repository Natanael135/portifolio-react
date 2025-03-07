import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const ExperienceContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 2rem;
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

`;

export const ExperienceCard = styled.div`
  background: ${theme.colors.background};
  border-radius: ${theme.effects.borderRadius.large};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  padding: 1.5rem;
  transition: ${theme.effects.transition};

  @media (min-width: 640px) {
    padding: 2rem;
  }
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${theme.effects.hoverShadow};
  }
`;

export const CardHeader = styled.div`

  align-items: center;
  gap: 1rem;
  margin-bottom: 2.5rem;

`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  background: ${theme.colors.primary}15;
  border-radius: ${theme.effects.borderRadius.large};


    width: 4rem;
    height: 4rem;
  

  i {
    font-size: 2rem;
    color: ${theme.colors.primary};

  }
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${theme.colors.text};


`;

export const Timeline = styled.div`
  position: relative;
  padding-left: 1.5rem;

  &::before {
    content: '';
    position: absolute;
    left: 0.25rem;
    top: 0.5rem;
    bottom: 0.5rem;
    width: 2px;
    background: ${theme.colors.surface};
  }

  @media (min-width: 640px) {
    padding-left: 2rem;
  }
`;

export const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 2rem;
  padding-left: 2rem;

  &::before {
    content: '';
    position: absolute;
    left: -0.5rem;
    top: 0.5rem;
    width: 0.75rem;
    height: 0.75rem;
    background: ${theme.colors.primary};
    border-radius: 50%;
    box-shadow: ${theme.effects.hoverShadow};
  }

  @media (min-width: 640px) {
    padding-left: 2.5rem;
    margin-bottom: 2.5rem;

    &::before {
      left: -0.75rem;
      width: 1rem;
      height: 1rem;
    }
  }
`;

export const ExperienceTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${theme.colors.text};
  margin-bottom: 0.5rem;

  @media (min-width: 640px) {
    font-size: 1.25rem;
  }
`;
export const ExperienceCompanyName = styled.h4`
  font-size: 0.875rem;
  color: ${theme.colors.secondary};
  margin-bottom: 0.5rem;
`;

export const ExperienceDate = styled.p`
  font-size: 0.875rem;
  color: ${theme.colors.primary};
  margin-bottom: 0.75rem;

  @media (min-width: 640px) {
    font-size: 0.9375rem;
  }
`;

export const ExperienceDescription = styled.div`
  font-size: 0.9375rem;
  color: ${theme.colors.lightText};
  line-height: 1.6;

  @media (min-width: 640px) {
    font-size: 1rem;
  }
  ul{
    padding-left: 0.75rem;
    
    @media (min-width: 640px) {
      padding-left: 1rem;
  }
  }
`;