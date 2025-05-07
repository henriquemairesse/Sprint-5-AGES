import React from 'react';
import { Link } from 'react-scroll';

interface Itens {
  sectionId: string; // Renomeei para sectionId para clareza
  text: string;
}

const Section: React.FC<Itens> = ({ sectionId, text }) => {
  return (
    <li>
      <Link activeClass="active" to={sectionId} smooth={true} duration={500} offset={-5 * (window.innerWidth / 100)} className="Section">{text}</Link>
    </li>
  );
};

export default Section;
