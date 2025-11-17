import React, { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

import {
  ProjectsContainer,
  SectionTitle,
  ProjectsItemContainer,
} from "./Projects.styles";

const projectsData = [
  {
    id: 1,
    title: "Horario das Topiques",
    description:
      "projeto voltado para a população da região de Sobral-CE, permitindo a consulta fácil e rápida dos horários dos transportes alternativos.",
    image: "/images/topiqueProject.png",
    tags: [
      "JavaScript",
      "react.js",
      "node.js",
      "express.js",
      "MongoDB",
      "Styled Components",
    ],
    demoUrl: "https://topicmorrinhos.netlify.app/",
    codeUrl: null,
  },
  {
    id: 2,
    title: "iFestify",
    description:
      "Plataforma inovadora para organização e venda de ingressos para festivais, facilitando a experiência dos usuários em eventos culturais e musicais. Oferece uma interface intuitiva para compradores e organizadores, com funcionalidades de reserva, pagamento e gerenciamento de eventos.",
    image: "/images/ifestify.png",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Pagamento Online",
      "Eventos",
    ],
    demoUrl: "https://ifestify.com.br/",
    codeUrl: null,
  },
  {
    id: 3,
    title: "Cash.AI",
    description:
      "Ferramenta de finanças pessoais que simplifica o controle de gastos e metas através de conversas no WhatsApp. Utiliza IA para categorização automática de despesas e receitas, geração de relatórios claros e planejamento financeiro inteligente, tornando a gestão do dinheiro tão fácil quanto conversar com um amigo.",
    image: "/images/cashai.png",
    tags: [
      "Finanças Pessoais",
      "IA",
      "WhatsApp",
      "Análise de Dados",
      "Planejamento Financeiro",
    ],
    demoUrl: "https://usecashai.com/",
    codeUrl: null,
  },
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <>
      <ProjectsContainer id="projects">
        <SectionTitle>
          Meus <span>Projetos</span>
        </SectionTitle>
        <ProjectsItemContainer>
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => openModal(project)}
            />
          ))}
        </ProjectsItemContainer>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={closeModal} />
        )}
      </ProjectsContainer>
    </>
  );
};
