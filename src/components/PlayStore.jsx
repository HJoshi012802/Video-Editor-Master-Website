
import play from "../../public/play.svg";

export default function PlayStore() {
  return (
     <a
    href="https://play.google.com/store/apps/details?id=com.videomaster.editor">
    <div className="flex justify-center items-center">
      <img src={play} alt="Google Play"  width={150} height={50}/>
    </div>
    </a>
  );
}