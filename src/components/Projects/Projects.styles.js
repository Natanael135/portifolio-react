import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const ProjectsContainer = styled.section`
  padding: ${theme.spacing.section} 0;
  background: ${theme.colors.background};
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${theme.colors.text};
  text-align: center;
  margin-bottom: 2rem;
  
  span {
    color: ${theme.colors.primary};
  }
`;

export const ProjectsItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 0 1.5rem;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;