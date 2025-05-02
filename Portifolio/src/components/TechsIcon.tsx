import techsDataImport from '../assets/techs.json';

interface Itens {
    src: string;
    tech: string;
}

interface TechDetails {
    title: string;
    description: string;
}

interface TechCategory {
    [key: string]: TechDetails;
}

interface AllTechs {
    Techs: TechCategory; // Ajuste aqui para corresponder à estrutura do seu JSON
}

// Se você estiver importando diretamente no .ts file:
const techsData = techsDataImport as AllTechs;

const DivIcon: React.FC<Itens> = ({ src, tech }) => {
    const handleClick = () => {
        const title = document.getElementById('SecondSectionDescTitle');
        const description = document.getElementById('SecondSectionDescDesc');
        if (title && description) {
            const techInfo = techsData.Techs[tech];

            if (techInfo) {
                title.textContent = techInfo.title;
                description.textContent = techInfo.description;
            } 
        }
    };

    return (
        <>
            <img className="TechsIcon" src={src} onClick={handleClick} />
        </>
    );
};

export default DivIcon;