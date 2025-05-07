import techsDataImport from '../assets/data.json';

interface Itens {
    tech: string;
}

interface TechDetails {
    title: string;
    description: string;
    src: string;
    alt: string;
}

interface TechCategory {
    [key: string]: TechDetails;
}

interface AllTechs {
    Techs: TechCategory; 
}

const techsData = techsDataImport as AllTechs;

const TechsIcon: React.FC<Itens> = ({ tech }) => {
    const handleClick = () => {
        const title = document.getElementById('SecondSectionTitle');
        const description = document.getElementById('SecondSectionDesc');
        if (title && description) {
            const techInfo = techsData.Techs[tech];

            if (techInfo) {
                title.textContent = techInfo.title;
                description.textContent = techInfo.description;
            } 
        }
    };
    const techInfo = techsData.Techs[tech];

    return (
        <>
            {techInfo ? (
                <img className="TechsIcon" src={techInfo.src} alt={techInfo.alt} onClick={() => handleClick()} />
            ) : (
                <p>Ícone não disponível para {tech}</p>
            )}
        </>

    );
};

export default TechsIcon;