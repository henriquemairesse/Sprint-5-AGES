import { Link } from 'react-scroll';

interface Itens {
  sectionId: string;
  text: string;
}

const Section: React.FC<Itens> = ({ sectionId, text }) => {
  const isInitialMobile = window.innerWidth < 700;

  return (
    <li>
      <Link activeClass="active" to={sectionId} smooth={true} duration={500} offset={(isInitialMobile ? -10 : -5) * (window.innerWidth / 100)} className="Section">{text}</Link>
    </li>
  );
};

export default Section;
