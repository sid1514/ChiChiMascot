import './Custom.css'
import { useState } from 'react';
const SMeet=()=>{
    const [selectedSlot, setSelectedSlot] = useState('');

  
  const handleSelectChange = (event) => {
    setSelectedSlot(event.target.value);
  };
    return(<>
    <section >
        <div className='m-4'>
            <h1 className="text-2xl textSizeHeading font-bold">Schedule Meet and Greet with <b className="text-amber-600">Chi Chi</b>:</h1>
            <p className='textSize'>Want some unforgettable memories with Chi Chi? Book your SkyJumper tickets now and don't miss this chance to get up close with the one and only Chi Chi!</p>
        </div>
     <section className='bg-img2 '>

        <div className="relative flex flex-col bg-purple-600/50 md:flex-row w-auto">
            <div className="mr-6 h-10/12 md:w-1/2 ">
                <img src="inst1.png" alt="Image" className="m-10 p-10 w-full h-3/4" />
            </div>
        <div className="md:w-1/3 h-1/2 bg-white m-10 mr-6 md:mr-0 mb-6 md:mb-0 pt-8 ">
            <label htmlFor="dropdown" className="textSize m-2">
            Select Slot*
            </label>
            <br />
        <select
          id="dropdown"
          value={selectedSlot}
          onChange={handleSelectChange}
          className="border p-2 m-2 w-1/2 md: w-1/2 h-auto"
          >
          <option value="" className="textSize">
            Select Slot
          </option>
          <option value="option1" className="textSize">
            Option 1
          </option>
          <option value="option2" className="textSize">
            Option 2
          </option>
          <option value="option3" className="textSize">
            Option 3
          </option>
        </select>
        <img src="chichi_2.png" alt="Image" className="w-full h-3/4 md:w-2/3 " />
      </div>
      <p className='absolute bottom-20 left-50 ml-20 textSize text-white font-bold md:absolute bottom-0'>*P.S. Tickets include entry to SkyJumper AND the Meet & Greet. Don't delay, book your fun today!</p>
    </div>
            </section>
    </section>
    </>)
}

export default SMeet;