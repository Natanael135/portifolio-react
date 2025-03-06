import {StyledHeader, Nav, Title, NavLinks, NavLink, SocialLinks, SocialLink} from './Header.styles';
export const Header = () => (
  <StyledHeader>
    <Nav>
      <Title>Natanael Melo</Title>
      <NavLinks>
        <NavLink href="#hero">Home</NavLink>
        <NavLink href="#skills">Habilidades</NavLink>
        <NavLink href="#experience">Experiencia</NavLink>
        <NavLink href="#projects">Projetos</NavLink>
        <NavLink href="#contact">Contato</NavLink>
        <SocialLinks>
          <SocialLink href="https://github.com/Natanael135" target="_blank">
            <i className='bx bxl-github text-3xl'></i>
          </SocialLink>
          <SocialLink href="https://linkedin.com/in/natanaelsmelo/" target="_blank">
            <i className='bx bxl-linkedin text-3xl'></i>
          </SocialLink>
        </SocialLinks>
      </NavLinks>
    </Nav>
  </StyledHeader>
);