import './SecondSection.css'

function SecondSection() {
  return (
    <>
      <div className='SecondSection' id='SecondSection'>
        <div className='SecondSectionTechs'>
          <div className='SecondSectionMainTechs'>
            <p className='SecondSectionMainTechsTitle'>Main Techs</p>
            <div className='SecondSectionMainTechsIcons'>
              
            </div>
          </div>
          <div className='SecondSectionOtherTechs'>
            <p className='SecondSectionOtherTechsTitle'>Other Techs</p>
            <div className='SecondSectionOtherTechsIcons'>
              
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
