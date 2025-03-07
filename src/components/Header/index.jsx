import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import {
  StyledHeader,
  Nav,
  Title,
  NavLinks,
  NavLink,
  SocialLinks,
  SocialLink,
  MenuButton,
  MobileMenu,
  CloseButton,
  Overlay
} from './Header.styles';


export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

    const animationSequence = [
      '</>', 
      1000, 
      '<', // Apaga tudo (substitui a função de apagar caracteres)
      '<Natanael Melo/>', 
      3000, 
      '</>', 
      1000
    ];
  
  return (
    <StyledHeader>
      <Nav>
        <Title>
          <TypeAnimation
            sequence={animationSequence}
            speed={40}
            repeat={Infinity}
            style={{ display: 'inline-block' }}
          />
      </Title>

        {/* Menu para desktop */}
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

        {/* Botão do menu mobile */}
        <MenuButton onClick={toggleMenu} aria-label="Abrir menu">
          <i className='bx bx-menu'></i>
        </MenuButton>

        {/* Overlay e menu mobile */}
        <Overlay $isOpen={isMenuOpen} onClick={closeMenu} />
        <MobileMenu $isOpen={isMenuOpen}>
          <CloseButton onClick={closeMenu} aria-label="Fechar menu">
            <i className='bx bx-x'></i>
          </CloseButton>
          
          <NavLink href="#hero" onClick={closeMenu}><i class='bx bx-home'></i>Home</NavLink>
          <NavLink href="#skills" onClick={closeMenu}> <i className='bx bx-code-alt'></i>Habilidades</NavLink>
          <NavLink href="#experience" onClick={closeMenu}> <i className="bx bx-briefcase"></i>Experiencia</NavLink>
          <NavLink href="#projects" onClick={closeMenu}><i class="bx bx-folder"></i>Projetos</NavLink>
          <NavLink href="#contact" onClick={closeMenu}><i class="bx bx-phone"></i>
          Contato</NavLink>
          
          <SocialLinks>
            <SocialLink href="https://github.com/Natanael135" target="_blank">
              <i className='bx bxl-github text-3xl'></i>
            </SocialLink>
            <SocialLink href="https://linkedin.com/in/natanaelsmelo/" target="_blank">
              <i className='bx bxl-linkedin text-3xl'></i>
            </SocialLink>
          </SocialLinks>
        </MobileMenu>
      </Nav>
    </StyledHeader>
  );
};