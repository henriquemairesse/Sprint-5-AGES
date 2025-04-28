import './App.css'
import Footer from './footer/Footer.tsx'
import FirstSection from './main/firstSection/FirstSection.tsx'
import SecondSection from './main/secondSection/SecondSection.tsx'
import ThirdSection from './main/thirdSection/ThirdSection.tsx'

function App() {
  return (
    <>
      <header>    

      </header>
      <main>
        <div>
          <FirstSection />
          <div className='emptyOne' />
          <SecondSection />
          <div className='emptyTwo' />
          <ThirdSection />
        </div>
      </main>
      <footer>  
        <Footer />
        <div className='emptyThree'/> 
     </footer>
    </>
  )
}

export default App
