import Morph from "/public/3DMorph.png" 

export default function Glass3D() {
  return (
    <div className="relative w-full h-[50vh] md:h-[80vh] border ">
    <div className="absolute bottom-0 left-0">
      <img src={Morph} alt="Morph 3d" className="w-[100vw] h-[20vh] md:h-[30vh]"/>
    </div>
    </div>
  )
}
