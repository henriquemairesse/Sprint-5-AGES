import TechsIcon from '../../components/TechsIcon'
import './SecondSection.css'

interface ItensData {
  tech: string;
}

function SecondSection() {

  const itensMain: ItensData[] = [
    { tech: "JavaScript" },
    { tech: "Java" },
    { tech: "NodeJs" },
    { tech: "DiscordJs" },
    { tech: "MongoDb" },

  ];

  const itensOther: ItensData[] = [
    { tech: "TypeScript" },
    { tech: "Html" },
    { tech: "ReactJs" },
    { tech: "NestJs" },
  ];

  return (
    <>
      <div className='SecondSection' id='SecondSection'>
        <div className='SecondSectionTechs'>
          <div className='SecondSectionMainTechs'>
            <p className='SecondSectionMainTechsTitle'>Main Techs</p>
            <div className='SecondSectionMainTechsIcons'>
              {itensMain.map((item) => (
                <TechsIcon tech={item.tech} />
              ))}
            </div>
          </div>
          <div className='SecondSectionOtherTechs'>
            <p className='SecondSectionOtherTechsTitle'>Other Techs</p>
            <div className='SecondSectionOtherTechsIcons'>
              {itensOther.map((item) => (
                <TechsIcon tech={item.tech} />
              ))}
            </div>
          </div>
        </div>
        <div className='SecondSectionDesc'>
          <p className='SecondSectionDescTitle' id='SecondSectionTitle'>Selecione um Ícone</p>
          <p className='SecondSectionDescDesc' id='SecondSectionDesc'>Clique em uma tecnologia para obter uma descrição sobre ela.</p>
        </div>
      </div>
    </>
  )
}

export default SecondSection
