import './Custom.css'
const Role=()=>{
    return(<>
   <section className="flex flex-col items-center md:flex-none ">
   <section className="grid-flex flex flex-col md:flex-row m-10 md:flex-none">
      <div className="w-full md:w-1/2 md:pr-6">
        <h1 className="text-4xl font-bold mb-8 textSizeHeading">
          Role at <span className="text-amber-600">SkyJumper</span>?
        </h1>
        <p className="text-xl textSize">
          <b>Chi Chi's official SkyJumper roles?</b>
          <br />
          Buckle up, chimp fans! First, he's the <b>Chief Giggle Officer</b>, spreading laughter faster than a monkey flinging bananas (minus the mess, of course).
          <br /><br />
          Second, he's the <b>Ultimate Bounce Master</b>, leading epic jumping adventures and showing off moves that would make even Tarzan jealous.
          <br /><br />
          And lastly, he's the <b>High-Five Hero</b>, showering park pals with fist bumps and making every visit feel extra special.
          <br /><br />
          <b>Plus</b>, catch Chi Chi at special events, like birthday bashes and foam pit parties, where he's guaranteed to turn up the fun factor to eleven!
        </p>
      </div>
      <div className="w-full md:w-1/2 md:pl-6">
        <img src="CGO.png" alt="Chi Chi" className="w-full h-auto mt-10 md:mt-0 md:ml-auto md:mr-0" />
      </div>
    </section>
  <button className="flex-none bg-yellow-300 font-semibold rounded-3xl px-8 py-2 my-6 shadow-lg ">Schedule Meet and Greet</button>
</section>

    </>)
}

export default Role;