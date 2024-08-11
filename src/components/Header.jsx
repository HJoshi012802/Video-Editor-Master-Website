import video_master from "../../public/video_master.jpg";

export default function Header() {
  return (
    <div className='bg-[#121315] w-[100vw] h-[4.3rem] px-[1rem] lg:px-[6rem] sticky top-0 left-0 z-10 border-b border-[#2f353f]'>
        <div className='x-[2rem] h-[100%]  flex justify-between items-center'>
            <div className="flex gap-[0.5rem] items-center ">
            <div className="h-[2.5rem] w-[2.5rem] rounded-xl overflow-hidden">
            <img src={video_master} alt="video master editor" />
            </div>
            <p className="font-bold ">Video Master Editor</p>
            </div>
            <button className=" font-[600] px-[1rem] py-[0.35rem] rounded-full flex justify-center items-center text-[#dad3d3]" style={{ background: 'linear-gradient(180deg, #6751FF 0%, #E74F94 100%)' }}>
              Get the App
            </button>
        </div>
    </div>
  )
}
