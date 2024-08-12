import Ellipse from "../assets/Ellipse.svg";
import twophone from "../assets/twophone.png";

export default function Section2() {
  return (
<div className="relative w-full md:h-[78vh] md:mb-[30px]">
  <div className="hidden md:block md:absolute md:right-0 md:top-0 md:-z-20 ">
    <img src={Ellipse} alt="Ellipse" className="h-full w-[25vw] object-cover" />
  </div>
  <div className="flex justify-center md:block md:absolute right-[10%] mt-[50px]">
    <img
      src={twophone}
      alt="video editor master rareprob"
      className=" h-full w-[70vw] md:w-[20vw] object-cover"
    />
  </div>
  <div className="md:w-[60vw] mt-[80px] pl-[1rem]  pr-[1rem] md:pl-[5rem] lg:pl-[10rem] md:pr-[2.5rem] lg:pr-[5rem] text-center md:text-left">
    <p className=" text-[1.8rem]  md:text-4xl lg:text-6xl font-bold ">
      <span
        className="text-transparent bg-clip-text pr-[0.3rem]"
        style={{
          backgroundImage:
            "linear-gradient(89deg, #0099F1 0%, #FFE000 32.29%, #ACFCD9 65.63%, #0FE2CD 100%)",
        }}
      >
        Professionals
      </span><br className="hidden md:block"/>
      have picked.
    </p>
    <div className="md:w-[80%]">
    <p className="text-[1.2rem] "
  style={{
    color: '#B4C1CB',
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontStyle: 'normal',
    fontWeight: '400',
    
    marginTop:'10px'
  }}
>
  Experience the prowess of a master video editor right at your fingertips.
  When top content creators and influencers want their videos to shine on
  social media, they trust Video Editor Master.
</p>
    <p className="text-[1.2rem]" 
     style={{
    color: '#B4C1CB',
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontStyle: 'normal',
    fontWeight: '400',
    marginTop:'10px'
  }}>Create and share videos anytime, anywhere, with just a few taps.</p>
    </div>
  
  </div>
</div>

  );
}

