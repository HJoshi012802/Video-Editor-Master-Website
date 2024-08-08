import Ellipse from "/public/Ellipse.svg";
import twophone from "/public/twophone.png";

export default function Section2() {
  return (
<div className="border relative w-full h-[78vh]">
  <div className="absolute right-0 top-0 -z-20">
    <img src={Ellipse} alt="Ellipse" className="h-full w-[25vw] object-cover" />
  </div>
  <div className="absolute right-[10%] mt-[50px]">
    <img
      src={twophone}
      alt="video editor master rareprob"
      className=" h-full w-[20vw] object-cover"
    />
  </div>
  <div className="  w-[60vw] mt-[80px] pl-[10rem] pr-[5rem] border border-red-900">
    <p className="text-6xl font-bold border border-red-900">
      <span
        className="text-transparent bg-clip-text"
        style={{
          backgroundImage:
            "linear-gradient(89deg, #0099F1 0%, #FFE000 32.29%, #ACFCD9 65.63%, #0FE2CD 100%)",
        }}
      >
        Professionals
      </span><br/>
      have picked.
    </p>
    <div className="w-[80%]">
    <p className="border border-red-900"
  style={{
    color: '#B4C1CB',
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '28px',
    marginTop:'10px'
  }}
>
  Experience the prowess of a master video editor right at your fingertips.
  When top content creators and influencers want their videos to shine on
  social media, they trust Video Editor Master.
</p>
    <p className="border border-red-900" 
     style={{
    color: '#B4C1CB',
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '28px',
    marginTop:'10px'
  }}>Create and share videos anytime, anywhere, with just a few taps.</p>
    </div>
  
  </div>
</div>

  );
}

