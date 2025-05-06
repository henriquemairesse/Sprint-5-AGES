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
    <div className='projectCard'>
        <div className='projectCardHeader'>
            <img src={projeto.imagemSrc} alt={projeto.alt} className="projectCardImage" ></img>
            <p className='projectCardTitle'>{projeto.titulo}</p>
        </div>
        {expanded && (
            <div className="projectCardExpanded">
                <p className="projectCardDescription">{projeto.descricao}</p>
                <div className="projectCardLinks">
                    {projeto.linkGithub && (
                    <a
                        href={projeto.linkGithub}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="linkGithub"
                    >
                        Link do Projeto
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
        )}
        <button className="projectCardButton" onClick={toggleExpand}>
          {expanded ? '▲' : '▼'}
        </button>
    </div>
  )
}

export default ProjectCard