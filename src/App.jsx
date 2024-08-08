import HeroText from './components/HeroText';
import Header from './components/Header';
import HomeImage from './components/HomeImage';
import Section1 from './Pages/Section1';
import Section2 from './Pages/Section2';
import Section3 from './Pages/Section3';
import Footer from './components/Footer';


function App() {
  return (
    <div className=''>
    <div className="relative w-[100vw] h-[100vh] ">
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover top-0 left-0 -z-10  bg-gradient-to-t from-black via-transparent to-black opacity-40">
        <source src="/hero_video.webm" type="video/webm" />

      </video>
     <Header />
     <HeroText />
     <HomeImage/>
    </div>
     <Section1/>
     <Section2/>
     <Section3/>
     <Footer/>
    </div>

  )
}

export default App

