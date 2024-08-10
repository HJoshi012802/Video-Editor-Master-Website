import Morph from "/public/3DMorph.png";
import PlayStore from "../components/PlayStore";

export default function Glass3D() {
  return (
    <div className="relative w-full h-[50vh] md:h-[70vh] flex justify-center items-center">
      <div
        className="w-[80vw] md:w-[65vw] h-[40vh] md:h-[60vh] rounded-2xl bg-white bg-opacity-20 border border-solid border-white/20 flex justify-center items-center"
        style={{ backdropFilter: "blur(10px)" }}
      >
        <div className="border border-red-900 mx-2 my-4 h-full w-full">
        <p>Your masterpiece awaits — let&apos;s edit!</p>
        <p>Join the perfect presentation journey now! Whether its&apos; a quick montage or an epic narrative, we’re here to help you craft something unforgettable. Start editing and bring your story to life, one frame at a time!</p>
        <PlayStore/>

        </div>
      </div>
      <div className="absolute bottom-0 left-0">
        <img src={Morph} alt="Morph 3D" className="w-[100vw] h-[20vh] md:h-[30vh]" />
      </div>
    </div>
  );
}
