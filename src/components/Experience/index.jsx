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
            <ExperienceDescription>Em Breve</ExperienceDescription>
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

          <TimelineItem>
            <ExperienceTitle>Projetos Pessoais</ExperienceTitle>
            {/*<ExperienceCompanyName>Pessoal</ExperienceCompanyName>*/}
            <ExperienceDate>2023 - Presente</ExperienceDate>
            <ExperienceDescription>
              Desenvolvimento de projetos próprios, buscando aprimorar
              habilidades técnicas e construir um portfólio diversificado.
              Através desses projetos, explorando novas tecnologias, práticas de
              desenvolvimento e design, com o objetivo de expandir a experiência
              profissional e atuação no mercado.
            </ExperienceDescription>
          </TimelineItem>
        </Timeline>
      </ExperienceCard>
    </ExperienceContainer>
  );
};
