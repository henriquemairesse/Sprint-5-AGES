import './App.css'
import Footer from './footer/Footer.tsx'
import Header from './header/Header.tsx'
import FirstSection from './main/firstSection/FirstSection.tsx'
import SecondSection from './main/secondSection/SecondSection.tsx'
import ThirdSection from './main/thirdSection/ThirdSection.tsx'

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <div>
          <FirstSection />
          <SecondSection />
          <ThirdSection />
        </div>
      </main>
      <footer>  
      <Footer />
        <div className='emptyOne' id='Footer'>
          <p className='copyRight'>© {new Date().getFullYear()} Henrique Mairesse. Todos os direitos reservados.</p>
        </div>
     </footer>
    </>
  )
}

export default App
