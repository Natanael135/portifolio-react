import React from 'react';
import {
  FooterContainer,
  FooterContent,
  FooterSection,
  FooterTitle,
  FooterText,
  FooterLinks,
  FooterLink,
  CopyText,
} from './Footer.styles';

export const Footer = () => {
  return (
    <FooterContainer id="contact">
      <FooterContent>
        <FooterSection>
          <FooterTitle>Natanael Melo</FooterTitle>
          <FooterText>
            Desenvolvedor Front-end focado em criar experiências web incríveis e intuitivas.
          </FooterText>
          <FooterLinks>
            <FooterLink href="https://github.com/Natanael135" target="_blank">
              <i className='bx bxl-github'></i>
            </FooterLink>
            <FooterLink href="https://linkedin.com/in/natanaelsmelo" target="_blank">
              <i className='bx bxl-linkedin'></i>
            </FooterLink>
          </FooterLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Links Rápidos</FooterTitle>
          <FooterLinks column>
            <FooterLink href="#hero">Home</FooterLink>
            <FooterLink href="#skills">Habilidades</FooterLink>
            <FooterLink href="#projects">Projetos</FooterLink>
          </FooterLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Contato</FooterTitle>
          <FooterText>
            Vamos trabalhar juntos? Entre em contato!
          </FooterText>
          <FooterLink href="mailto:natanaelmelo.dev@gmail.com">
            <i className='bx bx-send mr-2'></i>
            Enviar mensagem
          </FooterLink>
        </FooterSection>
      </FooterContent>
      
      <CopyText>
        © 2025 - by Natanael Melo. Made with React.js
      </CopyText>
    </FooterContainer>
  );
};