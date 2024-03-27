import './About.css'
const About=()=>{
    return(<>
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
  <div className="m-10 text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl">
    <h1 className="text-black font-bold text-4xl md:text-6xl mb-7">About <span className="text-amber-600">Chi-Chi</span></h1>
    <p>
      Ever wonder why Chi Chi, the coolest chimp this side of the jungle, flips for SkyJumper? It's not just the endless trampoline fun (though, monkey see, monkey bounce, right?).
      <br /><br />
      It's the feeling of soaring high like a superhero, giggling with newfound friends, and making memories that do a triple backflip in your heart!
    </p>
    <br />
    <p>
      Chi Chi sees SkyJumper as his ultimate playground, and he can't wait to swing, jump, and high-five every bouncing buddy who joins the fun!
      <br /><br />
      So come on down and meet the monkey who'll make your day brighter than a banana split!
    </p>
    <button className="bg-yellow-300 font-semibold rounded-3xl px-8 py-2 mt-8 md:mt-10 lg:mt-10 xl:mt-10 2xl:mt-10">Schedule Meet and Greet</button>
  </div>
  <div className="flex justify-center items-center">
    <img src="mascot.png" alt="mascot" className="h-auto md:h-5/6 w-full md:w-4/5 lg:w-3/4 xl:w-3/4 2xl:w-3/4" />
  </div>
</section>

    </>)
}

export default About;