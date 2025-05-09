import Section from '../components/Section'
import './Header.css'

interface ItensData {
  section: string;
  text: string;
}

function Header() {

  const itens: ItensData[] = [
    { section: "FirstSection", text: "Sobre Mim"  },
    { section: "SecondSection", text: "Techs"  },
    { section: "ThirdSection", text: "Projetos"  },
    { section: "Footer", text: "Contato"  },
  ];

  return (
    <>
      <div className='Header'>
        <div className='HeaderMe'>
          <img className='HeaderImage' src='/portfolio/images/avatar.png' alt='Foto de Perfil'/>
          <p className='HeaderText'>Henrique Mairesse</p>
        </div>
        <nav>
          <ul>
            {itens.map((item) => (
              <Section sectionId={item.section} text={item.text}/>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Header
