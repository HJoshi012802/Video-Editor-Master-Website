import PlayStore from "./PlayStore";

export default function HeroText() {
    return (
      <>
        <div className="w-[100vw] text-center mt-[3.2rem] md:mt-[2.6rem] mb-[1.7rem] md:mb-[3rem] px-[0.6rem]">
          <p className=" text-[2.4rem] md:text-[3.6rem] font-[600] text-[#715fcc]">Create videos</p>
          <p className=" text-[2rem] md:text-[3.6rem] font-[400] text-[#ffffff] leading-10">that captivate and astound</p>
        </div>
      <PlayStore/>
      </>
    );
  }