import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

import { ProjectsContainer, SectionTitle, ProjectsItemContainer } from './Projects.styles';

const projectsData = [
  {
    id: 1,
    title: 'Horario das Topiques',
    description: 'projeto voltado para a população da região de Sobral-CE, permitindo a consulta fácil e rápida dos horários dos transportes alternativos.',
    image: '/images/topiqueProject.png',
    tags: ['JavaScript', 'react.js', 
    'node.js', 'express.js', 'MongoDB', 'Styled Components',],
    demoUrl: 'https://topicmorrinhos.netlify.app/',
    codeUrl: '',
  },
  {
    id: 2,
    title: 'To-Do List',
    description: 'Um projeto para gerenciamento de tarefas, permitindo que os usuários organizem, priorizem e acompanhem suas atividades de forma simples e eficiente.',
    image: '/images/todolistProjet.png',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 
     'Styled Components', 'Vercel'],
    demoUrl: 'https://to-do-list-tau-pied-66.vercel.app/',
    codeUrl: 'https://github.com/Natanael135/To-Do-List',
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