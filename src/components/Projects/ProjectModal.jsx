import React from 'react';
import { ModalOverlay, ModalContent, CloseButton, ModalImage } from './ProjectModal.styles';

export const ProjectModal = ({ project, onClose }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <i className='bx bx-x'></i>
        </CloseButton>
        <ModalImage src={project.image} alt={project.title} />
      </ModalContent>
    </ModalOverlay>
  );
};