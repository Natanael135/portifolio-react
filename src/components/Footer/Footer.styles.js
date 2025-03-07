import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const FooterContainer = styled.footer`
  background: ${theme.colors.background};
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 4rem 0 2rem;
`;

export const FooterContent = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 4rem;
  }
`;

export const FooterSection = styled.div`
  margin-bottom: 2rem;
`;

export const FooterTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${theme.colors.text};
  margin-bottom: 1rem;
`;

export const FooterText = styled.p`
  color: ${theme.colors.lightText};
  line-height: 1.6;
  margin-bottom: 1rem;
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  gap: ${({ column }) => (column ? '0.5rem' : '1rem')};
  align-items: ${({ column }) => (column ? 'flex-start' : 'center')};
`;

export const FooterLink = styled.a`
  color: ${theme.colors.lightText};
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: ${theme.effects.transition};
  padding: 0.25rem 0;
  gap: 0.5rem;


  &:hover {
    color: ${theme.colors.primary};
    
    transform: translateX(4px);
  }

  i {
    font-size: 1.5rem;
    margin-right: ${({ hasIcon }) => (hasIcon ? '0.5rem' : '0')};
  }
`;

export const CopyText = styled.div`
  text-align: center;
  color: ${theme.colors.lightText};
  font-size: 0.875rem;

  span {
    color: ${theme.colors.primary};
    
  }
`;

// Estilo adicional para o botão de email
export const EmailButton = styled(FooterLink)`
  color: ${theme.colors.primary};
  font-weight: 500;
  
  &:hover {
    color: ${theme.colors.secondary};
  }
`;