import React from "react";
import {
  HeroContainer,
  ContentWrapper,
  ProfileImage,
  Image,
  Heading,
  Subtitle,
  SkillsWrapper,
  SkillTag,
  ButtonsWrapper,
  Button,
} from "./Hero.styles";

export const Hero = () => {
  return (
    <HeroContainer id="hero">
      <ContentWrapper>
        <ProfileImage>
          <Image src="/images/natanael.jpeg" alt="Natanael Melo" />
        </ProfileImage>
        <Heading>Fullstack Developer</Heading>
        <Subtitle>
          Desenvolvedor apaixonado por criar experiências web incríveis e
          intuitivas
        </Subtitle>

        <SkillsWrapper>
          <SkillTag>
            <i class="bx bxl-react"></i>
            React.js
          </SkillTag>
          <SkillTag>
            <i class="bx bxl-nodejs"></i>
            Node.js
          </SkillTag>
          <SkillTag>
            <i class="bx bxl-javascript"></i>
            JavaScript
          </SkillTag>
        </SkillsWrapper>

        <ButtonsWrapper>
          <Button primary href="/NatanaelMelo-CV.pdf" download>
            <i className="bx bx-download mr-2"></i>
            Download CV
          </Button>
          <Button href="#projects">
            <i className="bx bx-code-alt mr-2"></i>
            Ver Projetos
          </Button>
        </ButtonsWrapper>
      </ContentWrapper>
    </HeroContainer>
  );
};
