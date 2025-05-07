interface Itens {
    url: string;
    image: string;
    alt: string;
    cor: string;
    text: string;
}

const DivIcon: React.FC<Itens> = ({ url, image, alt, cor, text }) => {
    return (
        <>
            <div className='divIcon'>
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <img className='divImage' src={image} alt={alt} />
                </a>
                <p style={{color: cor}} className='divText'>{text}</p>
            </div>
        </>
    );
  };

export default DivIcon
