import {
  ExperienceContainer,
  ExperienceCard,
  CardHeader,
  ExperienceTitle,
  ExperienceDate,
  ExperienceDescription,
  IconContainer,
  Timeline,
  CardTitle,
  ExperienceCompanyName,
  TimelineItem,
} from "./Experience.styles";

export const ExperienceSection = () => {
  return (
    <ExperienceContainer id="experience">
      <ExperienceCard>
        <CardHeader>
          <IconContainer>
            <i className="bx bx-briefcase"></i>
          </IconContainer>
          <CardTitle>Experiência</CardTitle>
        </CardHeader>

        <Timeline>
          <TimelineItem>
            <ExperienceTitle>Desenvolvedor Front-end Júnior</ExperienceTitle>
            <ExperienceCompanyName>Forja</ExperienceCompanyName>
            <ExperienceDate>Fev/2024 - Presente</ExperienceDate>
            <ExperienceDescription><p>Em Breve...</p></ExperienceDescription>
          </TimelineItem>

          <TimelineItem>
            <ExperienceTitle>Desenvolvedor Front-end Voluntário</ExperienceTitle>
            <ExperienceCompanyName>ONG Recomeçando</ExperienceCompanyName>
            <ExperienceDate>Jan/2024 - Presente</ExperienceDate>
            <ExperienceDescription>
              <p>Em Breve...</p>
             
            </ExperienceDescription>
          </TimelineItem>

          <TimelineItem>
            <ExperienceTitle>
              Desenvolvedor Front-end Freelancer
            </ExperienceTitle>
            <ExperienceCompanyName>iFestify</ExperienceCompanyName>
            <ExperienceDate>Nov/2024 - Dez/2024</ExperienceDate>
            <ExperienceDescription>
              <ul>
                <li>Construção de uma Landing Page responsiva e otimizada.</li>
                <li>
                  Organização de rotas para navegação fluida entre páginas, com
                  foco no futuro escalonamento.
                </li>
                <li>
                  Implementação de estratégias de SEO para melhor ranqueamento.
                </li>
                <li>
                  Utilização de tecnologias como HTML, CSS, JavaScript e
                  React.js.
                </li>
              </ul>
            </ExperienceDescription>
          </TimelineItem>


        </Timeline>
      </ExperienceCard>
    </ExperienceContainer>
  );
};
