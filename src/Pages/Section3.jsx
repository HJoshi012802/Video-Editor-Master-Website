import Polygon from "../assets/GhantaPolygon.svg";
import twophone from "../assets/onephone.png";
import star from "../assets/star.svg"

export default function Section3() {
  return (
  <div className=" relative w-full md:h-[78vh]  mt-[50px] mb-[30px]">
  <div className="hidden md:block md:absolute md:left-0 md:top-0 md:-z-20">
    <img src={Polygon} alt="Ellipse" className="h-full w-[25vw] object-cover" />
  </div>
  <div className="flex justify-center md:block md:absolute md:left-[9%] mt-[40px]">
    <img
      src={twophone}
      alt="video editor master rareprob"
      className=" h-full w-[70vw] md:w-[25vw] object-cover"
    />
  </div>
  <div className=" md:w-[55vw] mt-[80px] pl-[1rem] pr-[1rem] md:pl-[5rem] lg:pl-[10rem] md:pr-[2.5rem] lg:pr-[5rem] md:float-right text-center md:text-left">
    <p className=" text-[1.8rem]  md:text-4xl lg:text-6xl font-bold">
    <span className="pr-[0.6rem]">Accessible to</span><br className="hidden md:block"/>
    <span
  className="text-transparent bg-clip-text "
  style={{
    backgroundImage:
      "linear-gradient(89deg, #E9428A 0%, #E28BC1 32.29%, #9463DF 65.63%, #0FE2CD 100%)",
  }}
>
  Available
</span>

    </p>
    <div className="flex justify-center md:justify-start my-4">
    <div className="w-[80%] flex gap-10 ">
    <div className=" flex items-center">
     <img src={star} />
    </div>
    <p>4.0 Rating on the Google
    Play Store</p>
    </div>
    </div>
   
    <p className="md:w-[80%]" style={{
    color: '#B4C1CB',
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '28px',
    marginTop:'10px'
  }}>The Video Editor Master’s remarkably intuitive design makes video editing easy for everyone. With powerful tools that go beyond professional use, even beginners can quickly create and share stunning videos.</p>
    
  
  </div>
</div>
  )
}
