import video_master from "../../public/video_master.jpg";
import tiktok from "../../public/tiktok.png";
import facebook from "../../public/facebook.png";
import instagram from "../../public/instagram.png";
import youtube from "../../public/youtube.png";

export default function Footer() {
  return (
    <div className="bg-[#121315] w-[100vw] h-[15rem] border border-red-800 flex justify-center ">
  <div className="flex  items-center gap-10 flex-col">
    <div className="flex gap-[0.5rem] items-center border border-red-800 mt-5">
      <div className="h-[40px] w-[40px] rounded-xl overflow-hidden">
        <img src={video_master} alt="video master editor" />
      </div>
      <p className="font-bold text-white">Video Master Editor</p>
    </div>
 <div>
 <div className="flex gap-[0.5rem] justify-around border border-red-800 ">
      <div className="h-[30px] w-[30px] rounded-xl overflow-hidden">
        <img src={tiktok} alt="TikTok" />
      </div>
      <div className="h-[30px] w-[30px] rounded-xl overflow-hidden">
        <img src={facebook} alt="Facebook" />
      </div>
      <div className="h-[30px] w-[30px] rounded-xl overflow-hidden">
        <img src={instagram} alt="Instagram" />
      </div>
      <div className="h-[30px] w-[30px] rounded-xl overflow-hidden">
        <img src={youtube} alt="YouTube" />
      </div>
    </div>

    <p className=" text-center text-white mt-2">Follow Us</p>
 </div>
   
    <p className=" text-center text-white mb-5">© 2024 Appspace All rights reserved.</p>
  </div>
</div>

  )
}
