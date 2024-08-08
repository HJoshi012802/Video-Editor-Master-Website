import Polygon from "/public/GhantaPolygon.png";
import twophone from "/public/onephone.png";

export default function Section3() {
  return (
    <div className="border relative w-full h-[75vh]">
  <div className="absolute left-0 top-0 -z-20">
    <img src={Polygon} alt="Ellipse" className="h-full w-[25vw] object-cover" />
  </div>
  <div className="absolute left-[9%] mt-[40px]">
    <img
      src={twophone}
      alt="video editor master rareprob"
      className=" h-full w-[25vw] object-cover"
    />
  </div>
  <div className="  w-[55vw] mt-[80px] pl-[10rem] pr-[5rem] float-right border border-red-900">
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
    {/* <p
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
</p> */}
    <p  style={{
    color: '#B4C1CB',
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '28px',
    marginTop:'10px'
  }}>The Video Editor Master’s remarkably intuitive design makes video editing easy for everyone. With powerful tools that go beyond professional use, even beginners can quickly create and share stunning videos.</p>
    </div>
  
  </div>
</div>
  )
}
