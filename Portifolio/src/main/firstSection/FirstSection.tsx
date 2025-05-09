import './FirstSection.css'

function FirstSection() {

  function gerarIntroducao() {
    const agora = new Date();
    const hora = agora.getHours();
  
    if (hora >= 1 && hora < 12) {
      return "Bom dia";
    } else if (hora >= 12 && hora < 18) {
      return "Boa tarde";
    } else {
      return "Boa noite";
    }
  }
  
  const introducao = gerarIntroducao();

  return (
    <>
      <div className='FirstSection' id='FirstSection'>
        <p className='FirstSectionName'>Henrique Mairesse</p>
        <div className='FirstSectionMain'>
          <div className='FirstSectionMainOne'>
            <p className='FirstSectionMainOneDescription'>
               {introducao}, eu sou um estudante de Ciência da Computação que gosta principalmente do BackEnd. Sou fascinado por lógica e achar solução para problemas,
               estou sempre disposto a encarar um bom desafio. No momento, estou procurando apreender e aprimorar minhas habilidades de programação e desenvolvimento
               de software.  
            </p>
            <div className='DivFirstSectionMainOneImage'>
              <img className='FirstSectionMainOneImage' src='/portfolio/images/avatar.png' alt='Foto de Perfil'></img>
              <p className='FirstSectionMainOneSubImage'>Cursando Ciência da<br/>Computação - PUCRS</p>
            </div>
          </div>
          <a href="#Footer" className='FirstSectionMainButton'>Contatos</a>
        </div>
      </div>
    </>
  )
}

export default FirstSection
