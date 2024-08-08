import home_image from "../../public/home_image.png";

export default function HomeImage() {
  return (
   
      <div className="w-[700px] object-cover absolute bottom-0 left-[50%] transform -translate-x-1/2 ">
        <img src={home_image} className="w-full h-auto" />
      </div>
   
  );
}

