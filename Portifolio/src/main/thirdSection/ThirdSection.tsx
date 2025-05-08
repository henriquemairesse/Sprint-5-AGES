import ProjectCard from '../../components/ProjectCard'
import './ThirdSection.css'

interface ItensData {
  nomeProjeto: string;
}


function ThirdSection() {

  const itens: ItensData[] = [
    { nomeProjeto: "VisualizadorArquivosHTML"},
    { nomeProjeto: "ConversorMoedas"},
    { nomeProjeto: "CRUDExpress"},
    { nomeProjeto: "BackendUsersNestJs"},
    { nomeProjeto: "MIDev"},
  ];

  return (
    <>
      <div className='ThirdSection' id='ThirdSection'>
        <p className='ThirdSectionTitle'>Projetos</p>
        <div className='ProjectDiv'>
          {itens.map((item) => (
                <ProjectCard nomeProjeto={item.nomeProjeto} />
          ))}
        </div>
      </div>
    </>
  )
}

export default ThirdSection
