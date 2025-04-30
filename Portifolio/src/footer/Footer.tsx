import DivIcon from '../components/DivIcon';
import './Footer.css'

interface ItensData {
    url: string;
    image: string;
    alt: string;
    cor: string;
    text: string;
}

function Footer() {
    const itens: ItensData[] = [
        { url: "https://google.com", image: "./images/gitHubImage.png", alt: "Icon GitHub", cor: "#FFFFFF", text: "GitHub"  },
        { url: "https://google.com", image: "./images/whatsAppImage.png", alt: "Icon WhatsApp", cor: "#00FF00", text: "WhatsApp"  },
        { url: "https://google.com", image: "./images/linkedInImage.png", alt: "Icon LinkedIn", cor: "#56A3FB", text: "LinkedIn"  },
        { url: "https://google.com", image: "./images/eMailImage.png", alt: "Icon E-Mail", cor: "#FF0004", text: "E-Mail"  },
        { url: "https://google.com", image: "./images/curriculoIcon.png", alt: "Icon Curriculo", cor: "#FF8800", text: "Currículo"  },
    ];

    return (
        <>
            <div className='Footer'>
                {itens.map((item) => (
                    <DivIcon url={item.url} image={item.image} alt={item.alt} cor={item.cor} text={item.text}/>
                ))}
            </div>
        </>
  )
}

export default Footer
