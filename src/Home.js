import './App.css'
const Home=()=>{
    return(<>
<section className="relative " >

<img src="chichi.ico" className="absolute left-5 h-42 w-42 left-0 drop-shadow-lg responsive-image" alt="Chi Chi"/>
<div className='grid-flex flex p-4  '>
<img src='https://skyjumpertrampolinepark.com/wp-content/uploads/2023/11/group-of-5.webp'  className='w-1/3 m-2'  alt="bg "/>
<img src='hm_2.png'  className='w-1/3 m-2' alt="bg "/>
<img src='hm-2.png'  className='w-1/3 m-2 '  alt="bg "/>
</div>

<button className="absolute top-0 right-0 m-10 bg-yellow-300 px-6 rounded-3xl py-2 font-bold shadow bt-size">Book a party</button>
<div className=" rounded-2xl absolute bottom-10 w-full flex flex-col justify-center items-center ml-8">
      <span className="text-outline text-centre">
        <h1 className="text-4xl md:text-6xl textSizeHeading font-extrabold text-amber-600 italic ml-6 md:ml-0">Meet Chi Chi</h1>
        <h3 className="text-xl md:text-4xl font-bold text-amber-600 ml-6 md:ml-0">Our SkyJumper Mascot</h3>
       
      </span>
      <div className=''>
      <h3 className="textSize font-bold text-white md:text-xl mb-1 md:ml-10 md:text-left text-white font-bold">Introducing Chi Chi,</h3>
      <h3 className="textSize font-bold text-white md:text-xl md:text-white font-bold">Your SkyJumper Trampoline Buddy</h3>
      </div>
      
    </div>
</section>

    </>)

}
export default Home;
