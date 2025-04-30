interface Itens {
    section: string;
    text: string;
}

const Section: React.FC<Itens> = ({ section, text }) => {
    return (
        <>
            <li><a className="Section" href={section}>{text}</a></li>
        </>
    );
  };

export default Section
