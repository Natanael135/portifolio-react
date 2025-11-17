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
    <>
      <ExperienceContainer id="experience">
        <ExperienceCard>
          <CardHeader>
            <IconContainer>
              <i className="bx bx-briefcase"></i>
            </IconContainer>
            <CardTitle>Experiências</CardTitle>
          </CardHeader>

          <Timeline>
            <TimelineItem>
              <ExperienceTitle>Desenvolvedor Fullstack</ExperienceTitle>
              <ExperienceCompanyName>Cash.AI</ExperienceCompanyName>
              <ExperienceDate>Ago/2025 - Presente</ExperienceDate>
              <ExperienceDescription>
                <p>
                  Desenvolvi o Cash.AI, uma ferramenta inovadora de finanças
                  pessoais que utiliza IA para controlar gastos e metas através
                  de conversas no WhatsApp. Implementei funcionalidades de
                  categorização automática de despesas, geração de relatórios
                  claros e planejamento financeiro inteligente, utilizando
                  tecnologias como Nest, PostgreSQL e React.
                </p>
              </ExperienceDescription>
            </TimelineItem>

            <TimelineItem>
              <ExperienceTitle>Desenvolvedor Fullstack Júnior</ExperienceTitle>
              <ExperienceCompanyName>Forja</ExperienceCompanyName>
              <ExperienceDate>Fev/2025 - Jul/2025</ExperienceDate>
              <ExperienceDescription>
                <p>
                  Atuei como Desenvolvedor Fullstack Júnior, desenvolvendo
                  aplicações web completas utilizando tecnologias front-end e
                  back-end para entregar soluções eficientes e escaláveis.
                </p>
              </ExperienceDescription>
            </TimelineItem>

            <TimelineItem>
              <ExperienceTitle>
                Desenvolvedor Fullstack Freelancer
              </ExperienceTitle>
              <ExperienceCompanyName>iFestify</ExperienceCompanyName>
              <ExperienceDate>Nov/2024 - Mar/2025</ExperienceDate>
              <ExperienceDescription>
                <ul>
                  <li>
                    Construção de uma Landing Page responsiva e otimizada.
                  </li>
                  <li>
                    Organização de rotas para navegação fluida entre páginas,
                    com foco no futuro escalonamento.
                  </li>
                  <li>
                    Implementação de estratégias de SEO para melhor
                    ranqueamento.
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

        <ExperienceCard>
          <CardHeader>
            <IconContainer>
              <i class="bx bxs-graduation"></i>
            </IconContainer>
            <CardTitle>Educação</CardTitle>
          </CardHeader>
          <Timeline>
            <TimelineItem>
              <ExperienceTitle>Engenharia da Computação</ExperienceTitle>
              <ExperienceCompanyName>
                Universidade Federal Do Ceará
              </ExperienceCompanyName>
              <ExperienceDate>Ago/2021 - Presente</ExperienceDate>
              <ExperienceDescription>
                <p>Em Breve...</p>
              </ExperienceDescription>
            </TimelineItem>
            <TimelineItem>
              <ExperienceTitle>Sistemas de Informação</ExperienceTitle>
              <ExperienceCompanyName>Uniter</ExperienceCompanyName>
              <ExperienceDate>Jun/2025 - Presente</ExperienceDate>
              <ExperienceDescription>
                <p>Em Breve...</p>
              </ExperienceDescription>
            </TimelineItem>
            <TimelineItem>
              <ExperienceTitle>Desenvolvimento Full Stack</ExperienceTitle>
              <ExperienceCompanyName>
                Capacita Brasil | UECE | Instituto Atlântico
              </ExperienceCompanyName>
              <ExperienceDate>Jul/2024 - Ago/2025</ExperienceDate>
              <ExperienceDescription>
                <p>Tecnologias Ultilizadas:</p>

                <p>
                  {" "}
                  HTML, CSS, Git, JavaScript, React.js, SQL, Node.js, bancos de
                  dados, e testes em APIs.
                </p>
              </ExperienceDescription>
            </TimelineItem>

            <TimelineItem>
              <ExperienceTitle>Desenvolvimento Full Stack</ExperienceTitle>
              <ExperienceCompanyName>
                Geração Tech | Digital College | ADECE
              </ExperienceCompanyName>
              <ExperienceDate>Out/2024 - Jan/2025</ExperienceDate>
              <ExperienceDescription>
                <p>Tecnologias Ultilizadas:</p>

                <p>
                  {" "}
                  HTML, CSS, Git, GitHub, JavaScript, React, Node.JS,
                  Express.JS, bancos de dados, e testes automatizados com
                  Cypress.
                </p>
              </ExperienceDescription>
            </TimelineItem>
          </Timeline>
        </ExperienceCard>
      </ExperienceContainer>
    </>
  );
};
