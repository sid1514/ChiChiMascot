import './Custom.css'
const Personality=()=>{
    return(<>
    <section className="mt-6 ">
        <h1 className="font-bold ml-10 text-2xl ">Personality <b className="text-amber-600">Traits:</b> </h1>
        <p className="ml-10">Packed with personality, Chi Chi's a bounce-aholic with springs in his feet and sunshine in his smile, out-jumping kangaroos and flipping like a champ.</p>
        <div className="grid-flex flex mr-2 pl-10 bg-img space-x-10 pt-3 pb-6" >
            <img src="hyperactive.jpg" className='w-1/4 m-2 border'/>
            <img src="friendly.jpg" className='w-1/4 m-2 border'/>
            <img src="energetic.jpg" className='w-1/4 m-2 border'/>
        </div>
    </section>
    </>)
}

export default Personality;