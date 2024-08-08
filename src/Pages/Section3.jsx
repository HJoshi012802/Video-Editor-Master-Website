import Polygon from "/public/GhantaPolygon.png";
import twophone from "/public/onephone.png";
import star from "/public/star.svg"

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
    Accessible to<br/>
    <span
  className="text-transparent bg-clip-text"
  style={{
    backgroundImage:
      "linear-gradient(89deg, #E9428A 0%, #E28BC1 32.29%, #9463DF 65.63%, #0FE2CD 100%)",
  }}
>
  Available
</span>

    </p>
    <div className="w-[80%] border border-red-900 flex">
    <div className=" w-[50%]">
     <img src={star} />
    </div>
    <p>4.0 Rating on the Google
    Play Store</p>
    </div>
   
    
    <p className="w-[80%] border border-red-900" style={{
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
  )
}
