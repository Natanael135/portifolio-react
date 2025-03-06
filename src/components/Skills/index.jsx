import React from 'react';
import { ExperienceSection } from '../Experience';
import {
  SkillsContainer,
  SectionTitle,
  SectionSubtitle,
  SkillsGrid,
  SkillCard,
  SkillIcon,
  SkillTitle,
  SkillDescription,
  SkillList,
  SkillItem,
} from './Skills.styles';

export const Skills = () => {
  return (
    <>
    <SkillsContainer id="skills">
      <SectionTitle>Skills & Experiência</SectionTitle>
      <SectionSubtitle>
        Combinando habilidades técnicas com soft skills para criar experiências web excepcionais
      </SectionSubtitle>

      <SkillsGrid>
        {/* Habilidades Técnicas */}
        <SkillCard>
          <SkillIcon>
            <i className='bx bx-code-alt'></i>
          </SkillIcon>
          <SkillTitle>Habilidades Técnicas</SkillTitle>
          <SkillList>
            <SkillItem>
              <i className='bx bxl-html5'></i>
              <div>
                <h4>HTML5</h4>
                <SkillDescription>Estruturação semântica</SkillDescription>
              </div>
            </SkillItem>
            <SkillItem>
              <i className='bx bxl-css3'></i>
              <div>
                <h4>CSS3</h4>
                <SkillDescription>Layouts responsivos</SkillDescription>
              </div>
            </SkillItem>
            <SkillItem>
              <i className='bx bxl-javascript'></i>
              <div>
                <h4>JavaScript</h4>
                <SkillDescription>Interatividade & DOM</SkillDescription>
              </div>
            </SkillItem>
            <SkillItem>
            <i class='bx bxl-react'></i>
              <div>
                <h4>React.js</h4>
                <SkillDescription>Interfaces Dinâmicas</SkillDescription>
              </div>
            </SkillItem>
          </SkillList>
        </SkillCard>

        {/* Ferramentas */}
        <SkillCard>
          <SkillIcon>
            <i className='bx bx-cog'></i>
          </SkillIcon>
          <SkillTitle>Ferramentas</SkillTitle>
          <SkillList>
            <SkillItem>
              <i className='bx bxl-git'></i>
              <div>
                <h4>Git</h4>
                <SkillDescription>Controle de versão</SkillDescription>
              </div>
            </SkillItem>
            <SkillItem>
              <i className='bx bxl-github'></i>
              <div>
                <h4>GitHub</h4>
                <SkillDescription>Colaboração & Deploy</SkillDescription>
              </div>
            </SkillItem>
            <SkillItem>
              <i className='bx bxl-figma'></i>
              <div>
                <h4>Figma</h4>
                <SkillDescription>Design & Prototipagem</SkillDescription>
              </div>
            </SkillItem>
            <SkillItem>
              <i className='bx bx-cloud'></i>
              <div>
                <h4>Vercel</h4>
                <SkillDescription>Deploy & Hosting</SkillDescription>
              </div>
            </SkillItem>
          </SkillList>
        </SkillCard>

        {/* Soft Skills */}
        <SkillCard>
          <SkillIcon>
            <i className='bx bx-brain'></i>
          </SkillIcon>
          <SkillTitle>Soft Skills</SkillTitle>
          <SkillList>
            <SkillItem>
              <i className='bx bx-bulb'></i>
              <div>
                <h4>Criatividade</h4>
                <SkillDescription>Soluções inovadoras</SkillDescription>
              </div>
            </SkillItem>
            <SkillItem>
              <i className='bx bx-conversation'></i>
              <div>
                <h4>Comunicação</h4>
                <SkillDescription>Clara e efetiva</SkillDescription>
              </div>
            </SkillItem>
            <SkillItem>
              <i className='bx bx-run'></i>
              <div>
                <h4>Proatividade</h4>
                <SkillDescription>Iniciativa constante</SkillDescription>
              </div>
            </SkillItem>
            <SkillItem>
              <i className='bx bx-timer'></i>
              <div>
                <h4>Organização</h4>
                <SkillDescription>Gestão eficiente</SkillDescription>
              </div>
            </SkillItem>
          </SkillList>
        </SkillCard>
      </SkillsGrid>
    </SkillsContainer>
    <ExperienceSection/>
    </>
  );
};