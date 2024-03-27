import './About.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const JumpingChiChi=()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
         
      };
    return(<>
    <section className=" m-10 mt-10">

    <h1 className="font-bold text-3xl textSizeHeading">Chi Chi's Trampoline Jumping </h1>
    <h1 className="font-bold text-amber-600 text-3xl mb-7 textSizeHeading">Tips and Tricks:</h1>
    <div className=" ml-36">
        <p className=" text-2xl textSize"><b>Ready to unleash your inner chimp and bounce to the moon?</b> <br></br> </p>
       
         <p className="w-2/3 text-center textSize "> Hold onto your bananas jumpaholics, because Chi Chi, the master of mid-air mayhem at SkyJumper, is here to share some secret tips and tricks for the ultimate bouncing experience!</p>
    </div>
<div>

    <Slider {...settings} >

    <div>
        <img src="Tip1.png" className=" my-6 w-3/4  m-2" alt='tip1'/>
    </div>
    <div>
        <img src="Tip2.png" className=" my-6 my-6 w-3/4 m-2 " alt='tip2'/>
    </div>
    <div>
        <img src="Tip3.png" className="  my-6 my-6 w-3/4 m-2" alt='tip3'/>
    </div>
 
    </Slider>
   <div className='mt-10'>
    <p className='text-centre w-1/2 text-stone-500 textSize'><b className='text-amber-600'>Bonus Tip:</b> Want to impress everyone with your epic bouncing skills? Practice, practice,practice! The more you bounce, the better you'll become, and soon you'll be soaring through the air like Chi Chi himself!</p>
    <p className='text-centre  w-1/2 text-stone-500 textSize'>
    Remember, bouncing should be a blast, so follow these tips, bounce responsibly, and most importantly, have fun! Now go out there and show the world your inner chimp!
    </p>
    </div>     
</div>
<div className='mt-10'>
    <h1 className='text-2xl textSizeHeading font-bold'>Jumping <b className='text-amber-600 font-bold'>Techniques</b>:</h1>
    <div className='flex justify-center'>
       <span className='flex flex-col items-center'>
        <img src="jump1.png" className=" my-6 w-3/4  m-2" alt='jump1' />
        <h2 className=' font-bold textSize'>Roll-over</h2>
       </span> 
        <span className='flex flex-col items-center'>
            <img src="jump2.png" className=" my-6 w-3/4  m-2" alt='jump2'/>
            <h2 className=' font-bold textSize'>Bounce</h2>
        </span>
        <span className='flex flex-col items-center'>
            <img src="jump3.png" className=" my-6 w-3/4  m-2" alt='jump3'/>
            <h2 className='font-bold textSize'>360 flip</h2>
        </span>
    </div>
</div>
</section>
    </>)
}

export default JumpingChiChi;