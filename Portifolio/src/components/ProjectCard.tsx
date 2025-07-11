import React, { useState, useEffect } from 'react';
import data from '../assets/data.json'; 

interface ProjetoData {
  titulo: string;
  descricao: string;
  imagemSrc: string;
  alt: string;
  linkGithub?: string;
  linkProjeto?: string;
}

interface ProjetoProps {
  nomeProjeto: string;
}

const ProjectCard: React.FC<ProjetoProps> = ({ nomeProjeto }) => {
  const [expanded, setExpanded] = useState(false);
  const [projeto, setProjeto] = useState<ProjetoData | undefined>(undefined);
  const [isHovering, setIsHovering] = useState(false);

  const expandIfIsMobile = () => {
    if (window.innerWidth < 700) {
      toggleExpand();
    }
  }

  useEffect(() => {
    const projetoEncontrado = (data.Projects as Record<string, ProjetoData>)[
      nomeProjeto
    ];
    setProjeto(projetoEncontrado);
  }, [nomeProjeto]);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  if (!projeto) {
    return <div>Projeto não encontrado.</div>;
  }

  return (
    <div className='projectCard' onClick={expandIfIsMobile}>
      <div className='projectCardHeader'>
        <img src={projeto.imagemSrc} alt={projeto.alt} className="projectCardImage" ></img>
        <p className='projectCardTitle'>{projeto.titulo}</p>
      </div>
      <div className={`projectCardExpanded ${expanded ? 'expanded' : ''}`}>
        <p className="projectCardDescription">{projeto.descricao}</p>
        <div className="projectCardLinks">
          {projeto.linkGithub && (
            <a
              href={projeto.linkGithub}
              target="_blank"
              rel="noopener noreferrer"
              className="linkGithub"
            >
              Repositório
            </a>
          )}
          {projeto.linkProjeto && (
            <a
              href={projeto.linkProjeto}
              target="_blank"
              rel="noopener noreferrer"
              className="linkProjeto"
            >
              Ver Projeto
            </a>
          )}
        </div>
      </div>
      <img
        className="projectCardButton"
        src="/portfolio/images/arrowButtonImage.png"
        style={{
          transform: `rotate(${expanded ? 180 : 0}deg) scale(${isHovering ? 1.2 : 1})`,
          transition: 'transform 0.3s ease-in-out',
        }}
        onClick={toggleExpand}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      />
    </div>
  );
};

export default ProjectCard;
