import home_image from "../assets/home_image.png";

export default function HomeImage() {
  return (

 <div className=" max-w-[700px] h-[250px] w-[97vw] md:w-full md:h-[50vh] object-cover absolute bottom-0 left-1/2 transform -translate-x-1/2  flex justify-center">
  <img src={home_image} alt="Hero" />
  </div>
 
  );
}


