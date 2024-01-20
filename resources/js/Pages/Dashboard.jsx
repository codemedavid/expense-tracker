import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import  Sidebar from '@/Components/Sidebar';
import BalanceCard from '@/Components/BalanceCard';
import Category from '@/Components/Category/Category';
import { useState } from 'react';
import Graphs from '@/Components/Category/Graphs';
import Card from '@/Components/Card';
import Transaction from '@/Components/Transaction/Transaction';
import { Wallet, MoreVertical, Receipt, PiggyBank, Banknote, EyeIcon, ChevronRight } from 'lucide-react';
export default function Dashboard({ auth }) {
    const [show, setShow] = useState(false)

    const data = [
        { year: 2010, count: 10 },
        { year: 2011, count: 20 },
        { year: 2012, count: 15 },
        { year: 2013, count: 25 },
        { year: 2014, count: 22 },
        { year: 2015, count: 30 },
        { year: 2016, count: 28 },
      ];


    const changeShow = () => {

        setShow((prevShow) => !prevShow);
    }


    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Dashboard" />
    <div className='flex flex-col sm:flex-row w-full gap-2 p-2'>

        <div className='sm:w-[80%] max-w-full  rounded-sm '>
            <div className='flex flex-col sm:flex-row sm:px-10 py-7 gap-5'>
                <div className='bg-blue-800 sm:w-[24%] mt-3 relative rounded-md p-4 hover:bg-blue-900 transition ease-in-out shadow-2xl'>
                    <div className='flex justify-between'>
                        <Wallet color='white' size={60}></Wallet>
                        <ChevronRight  color='white' size={20} className='cursor-pointer' onClick={() => changeShow()}/>
                    </div>

                    <p className='text-white px-2 text-xl mt-3 font-bold'>Wallet</p>
                    <h5 className='text-white font-bold text-2xl px-2'>₱300,000</h5>
                   { show && <div className='w-20 h-12 bg-white absolute top-10 left-32'>
                    <h3>Manage</h3>
                    <h3>Edit</h3>
                    </div>

}


                </div>
                <div className='bg-[#eaddcf] sm:w-[24%] mt-3 rounded-md p-4 hover:bg-[#ebd5bf] transition ease-in-out '>
                    <div className='flex justify-between'>
                        <Banknote color='#020826' size={60}></Banknote>
                        <ChevronRight  color='#020826' size={20} className='cursor-pointer transition ' onClick={() => alert('click')}/>
                    </div>

                    <p className='text-[#020826] px-2 text-xl mt-3 font-bold'>Income</p>
                    <h5 className='text-[#020826] font-bold text-2xl px-2'>₱300,000</h5>

                </div>
                <div className='bg-[#eaddcf] sm:w-[24%] mt-3 rounded-md p-4 hover:bg-[#ebd5bf] transition ease-in-out '>
                    <div className='flex justify-between'>
                        <PiggyBank color='#020826' size={60}></PiggyBank>
                        <ChevronRight  color='#020826' size={20} className='cursor-pointer transition ' onClick={() => alert('click')}/>
                    </div>

                    <p className='text-[#020826] px-2 text-xl mt-3 font-bold'>Savings</p>
                    <h5 className='text-[#020826] font-bold text-2xl px-2'>₱300,000</h5>
                </div>
                <div className='bg-[#eaddcf] sm:w-[24%] mt-3 rounded-md p-4 hover:bg-[#ebd5bf] transition ease-in-out '>
                    <div className='flex justify-between'>
                        <Receipt color='#020826' size={60}></Receipt>
                        <ChevronRight  color='#020826' size={20} className='cursor-pointer transition ' onClick={() => alert('click')}/>
                    </div>

                    <p className='text-[#020826] px-2 text-xl mt-3 font-bold'>Expenses</p>
                    <h5 className='text-[#020826] font-bold text-2xl px-2'>₱300,000</h5>

                </div>

            </div>
<Graphs></Graphs>


<div className=' bg-white sm:mx-10'>
<p className='p-5'>Transactions</p>
<Transaction />
</div>
        </div>
        <div className='flex flex-col items-center w-[90%] sm:w-[20%]'>


            <Card  />

            <Category />
        </div>


    </div>







        </AuthenticatedLayout>
    );
}
