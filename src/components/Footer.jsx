import video_master from "../../public/video_master.jpg";
import tiktok from "../../public/tiktok.png";
import facebook from "../../public/facebook.png";
import instagram from "../../public/instagram.png";
import youtube from "../../public/youtube.png";
import help from "../../public/Help.svg";

export default function Footer() {
  return (
    <div className="bg-[#121315] w-[100vw] h-[15rem] flex justify-center relative ">
  <div className="flex  items-center gap-10 flex-col">
  <a href="/">
    <div className="flex gap-[0.5rem] items-center mt-5">
      <div className="h-[40px] w-[40px] rounded-xl overflow-hidden">
        <img src={video_master} alt="video master editor" />
      </div>
      <p className="font-bold text-white">Video Master Editor</p>
    </div>
  </a>
 <div>
 <div className="flex gap-[0.5rem] justify-around ">
      <div className="h-[30px] w-[30px] rounded-xl overflow-hidden">
        <img src={tiktok} alt="TikTok" />
      </div>
      <div className="h-[30px] w-[30px] rounded-xl overflow-hidden">
        <img src={facebook} alt="Facebook" />
      </div>      <a href="https://www.instagram.com/appspaceoffical/">

      <div className="h-[30px] w-[30px] rounded-xl overflow-hidden">
        <img src={instagram} alt="Instagram" />
      </div>
      </a>
      <div className="h-[30px] w-[30px] rounded-xl overflow-hidden">
        <img src={youtube} alt="YouTube" />
      </div>
    </div>

    <p className=" text-center text-white mt-2">Follow Us</p>
 </div>
   
    <p className=" text-center text-white mb-5">© 2024 Appspace All rights reserved.</p>
  </div>
  <a href="mailto:feedback@appspacesolutions.in">

  <div className="hidden md:block absolute bottom-4 right-4 border px-[1rem] py-[0.5rem] rounded-full bg-[#43C7FF]">
  <div className="flex gap-2 ">
  <img src={help} alt="Help"/>
  Help
  </div>
  </div>
  </a>
</div>

  )
}
