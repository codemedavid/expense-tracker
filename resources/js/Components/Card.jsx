import React, {useState} from 'react'
import { EyeIcon } from 'lucide-react';
function Card() {
    const [card, setCard] = useState(true)
    const changeCard = () => {

        setCard((prevShow) => !prevShow);
    }
  return (
    <div className='w-[20%] py-11 pr-3 rounded-sm'>
    <div className={`max-w-[100%]  bg-blue-800 rounded-md h-44 p-4 ${card && 'blur-sm'}`}>
        <h2 className='text-white text-3xl font-bold'>Card</h2>
        <div className='flex justify-between mt-10 px-2'>
        <p className='text-white'>28614-2716-72165-272</p>
        <p className='text-white'>332</p>
        <p className='text-white'>10/24</p>

        </div>
        <h2 className='px-2 text-white mt-3 font-bold'>John Angelo David</h2>
    </div>

    <div>
        <div className='bg-[#ebd5bf] w-40 h-12 mx-auto mt-10 flex items-center p-2 px-3 gap-3 rounded-full cursor-pointer' onClick={() => changeCard()}>
            <EyeIcon color='black' size={35}></EyeIcon>
            <span className='font-bold'>Show Card</span>
        </div>
    </div>
</div>
  )
}

export default Card
