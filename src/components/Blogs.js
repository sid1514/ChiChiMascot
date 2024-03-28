import './Custom.css'
const ChiChiBlogs=()=>{
    return(<>

<section className="mt-4 ml-10 mr-10">
    <h1 className="text-2xl textSizeHeading font-bold mb-5">Chi-Chi <b className="text-amber-600">Blogs</b>:</h1>
    <div className="flex  ">

        <div className="flex flex-col items-center">
            <img src="blog1.png" alt="blog" className="w-5/2 h-1/2 mr-4"/>
            <h2 className=" textSize font-bold mb-5">Chi-Chi playing with kids</h2>
            <p className="textSize">Chi-chi is hyper active and playful with kids,Chi-chi make sure that kids are..</p>
            <h4 className="underline">read more</h4>
        </div>
        <div className="flex flex-col items-center">
        <img src="inst1.png" alt="blog" className="w-5/2 h-1/2"/>
            <h2 className=" textSize font-bold mb-5">Chi-Chi vs Chichi</h2>
            <p className="textSize">Chi-chi is energetic and also he shows amazing tricks with different tips..</p>
            <h4 className="underline">read more</h4>
        </div>
    </div>
</section>
    </>)
}

export default ChiChiBlogs;