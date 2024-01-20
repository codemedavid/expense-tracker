import React, {useState} from 'react'
import { EyeIcon, EyeOffIcon } from 'lucide-react';
function Card() {
    const [card, setCard] = useState(true)
    const changeCard = () => {

        setCard((prevShow) => !prevShow);
    }
  return (
    <div className='w-full py-11 rounded-sm'>
    <div className={`max-w-[100%]  bg-blue-800 rounded-md lg:w-full h-40 p-4 ${card && 'blur-sm'}`}>
        <h2 className='text-white text-3xl font-bold'>Card</h2>
        <div className='flex justify-between gap-2 mt-4 px-2'>
        <p className='text-white text-xs'>28614-2716-72165-272</p>
        <div className='flex flex-col justify-center items-start'>

        <p className='text-white text-xs'>332</p>
        <p className='text-white text-xs'>10/24</p>
        </div>

        </div>
        <h2 className='px-2 text-white mt-3 font-bold'>John Angelo David</h2>
    </div>

    <div>
        <div className='bg-[#ebd5bf] w-32 h-12 mx-auto mt-3 flex items-center p-2 px-3 gap-3 rounded-full cursor-pointer' onClick={() => changeCard()}>
            {card ? <EyeOffIcon color='black' size={20}></EyeOffIcon> : <EyeIcon color='black' size={20}></EyeIcon>  }
            <span className='font-bold text-sm'>Show Card</span>
        </div>
    </div>
</div>
  )
}

export default Card
