import './Footer.css'

function Footer() {
  return (
    <>
      <div className='Footer'>
        <div className='gitHub'>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                <img className='gitHubImage' src="./images/gitHubImage.png" alt='Icon GitHub' />
            </a>
            <p className='textGitHub'>GitHub</p>
        </div>
        <div className='whatsApp'>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                <img className='whatsAppImage' src="./images/whatsAppImage.png" alt='Icon WhatsApp' />
            </a>
            <p className='textWhatsApp'>WhatsApp</p>
        </div>
        <div className='linkedIn'>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                <img className='linkedInImage' src="./images/linkedInImage.png" alt='Icon LinkedIn' />
            </a>
            <p className='textLinkedIn'>LinkedIn</p>
        </div><div className='eMail'>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                <img className='eMailImage' src="./images/eMailImage.png" alt='Icon E-mail' />
            </a>
            <p className='textEMail'>E-Mail</p>
        </div>
        <div className='curriculo'>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                <img className='curriculoIcon' src="./images/curriculoIcon.png" alt='Icon Curriculo' />
            </a>
            <p className='textCurriculo'>Currículo</p>
        </div>
      </div>
    </>
  )
}

export default Footer
