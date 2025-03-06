import React from 'react';
import {
  CardContainer,
  ImageContainer,
  Image,
  Overlay,
  CardContent,
  CardTitle,
  CardDescription,
  TagsWrapper,
  Tag,
  ButtonsWrapper,
  DemoButton,
  CodeButton,
} from './ProjectCard.styles';

export const ProjectCard = ({ project, onClick }) => {
  return (
    <CardContainer>
      <ImageContainer onClick={onClick}>
        <Image src={project.image} alt={project.title} />
        <Overlay>Ver Preview</Overlay>
      </ImageContainer>
      <CardContent>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
        <TagsWrapper>
          {project.tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </TagsWrapper>
        <ButtonsWrapper>
          <DemoButton href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            Live Demo
          </DemoButton>
          <CodeButton href={project.codeUrl} target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-github'></i>
          </CodeButton>
        </ButtonsWrapper>
      </CardContent>
    </CardContainer>
  );
};