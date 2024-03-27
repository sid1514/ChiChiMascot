import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Adventure=()=>{
   
        
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
     
  };
 
    
  return (
    <>
    <section >

    <Slider {...settings} >
    
      <div >
        <img src="slimg1.png" className="m-10  my-6 w-10/12 h-10/12 "/>
       
      </div>
      <div>
        <h3>Slide 2</h3>
      </div>
      <div>
        <h3>Slide 3</h3>
      </div>
     
    </Slider>
    </section>
    <section className="flex m-10 space-x-10 ml-30 ">
       
   
    <img src="vid1.png" className="w-1/5"/>
    <img src="vid2.png"className="w-1/5"/>
    <img src="vid3.png" className="w-1/5 "/>
    <img src="vid4.png" className="w-1/5 "/>
   
    </section>
    </>
  );
   
}

export default Adventure;