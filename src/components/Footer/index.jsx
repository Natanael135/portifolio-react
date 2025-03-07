import React from "react";
import {
  FooterContainer,
  FooterContent,
  FooterSection,
  FooterTitle,
  FooterText,
  FooterLinks,
  FooterLink,
  CopyText,
} from "./Footer.styles";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <FooterContainer id="contact">
      <FooterContent>
        <FooterSection>
          <FooterTitle>Natanael Melo</FooterTitle>
          <FooterText>
            Desenvolvedor Front-end focado em criar experiências web incríveis e
            intuitivas.
          </FooterText>
          <FooterLinks>
            <FooterLink
              href="https://github.com/Natanael135"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-github"></i>
            </FooterLink>
            <FooterLink
              href="https://linkedin.com/in/natanaelsmelo"
              target="_blank "
              rel="noopener noreferrer"
            >
              <i className="bx bxl-linkedin"></i>
            </FooterLink>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Links Rápidos</FooterTitle>
          <FooterLinks column>
            <FooterLink href="#hero">Home</FooterLink>
            <FooterLink href="#skills">Habilidades</FooterLink>
            <FooterLink href="#experience">Experiencia</FooterLink>
            <FooterLink href="#projects">Projetos</FooterLink>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Contato</FooterTitle>
          <FooterText>Vamos trabalhar juntos? Entre em contato!</FooterText>
          <FooterLink
            href="https://wa.me/5588996559305"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="bx bxl-whatsapp"></i>
            WhatsApp
          </FooterLink>
          <FooterLink
            href="mailto:natanaelmelo.dev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="bx bx-envelope"></i>
            Email
          </FooterLink>
        </FooterSection>
      </FooterContent>

      <CopyText>&copy; {year} - by Natanael Melo. Made with React.js</CopyText>
    </FooterContainer>
  );
};
