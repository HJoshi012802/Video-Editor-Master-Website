import Morph from "/public/3DMorph.png";
import PlayStore from "../components/PlayStore";

export default function Glass3D() {
  return (
    <div className="relative w-full h-[50vh] md:h-[70vh] flex justify-center items-center">
      <div
        className="w-[80vw] md:w-[60vw] h-[40vh] md:h-[50vh] rounded-2xl bg-white bg-opacity-20 border border-solid border-white/20 flex justify-center items-center"
        style={{ backdropFilter: "blur(3px)" }}
      >
        <div className=" mx-2 my-[1.5rem] h-full w-full text-center">
        <p className="text-white font-helvetica md:text-4xl mt-[1.3rem] md:mt-[1rem] font-bold leading-7">Your masterpiece awaits — let&apos;s edit!</p>
        <div className="px-[5vw] md:mb-[0.5rem] lg:mb-[3rem] mb-[2.5vh]">
        <p className="text-gray-300 text-center font-helvetica text-sm md:text-xl md:mt-[1rem]  font-normal md:leading-7">Join the perfect presentation journey now! Whether it&apos;s a quick montage or an epic narrative, we&apos;re here to help you craft something unforgettable. Start editing and bring your story to life, one frame at a time!</p>
        </div>
        <PlayStore />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 -z-20">
        <img src={Morph} alt="Morph 3D" className="w-[100vw] h-[15vh] md:h-[30vh]" />
      </div>
    </div>
  );
}
