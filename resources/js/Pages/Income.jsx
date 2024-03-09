import React, {useState} from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import IncomeHistory from '@/Components/IncomeHistory';
import { QuoteIcon } from 'lucide-react';
import { useForm } from '@inertiajs/react';
function Income({auth, income}) {
    const [showModal, setShowModal] = useState(false);
  const { data, setData, post, processing, errors } = useForm({
    title: '',
    income: '',
    schedule: '',
  });

  const totalIncome = income.reduce((acc, income) => {
    return acc + income.income;
  }, 0);
  localStorage.setItem('totalIncome', totalIncome.toLocaleString())

  const handleFormChange = (e) => {
    setData(e.target.name, e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(data)
    post(route('income.store'), data);

    setShowModal(false);
  };
    return (
    <AuthenticatedLayout
    user={auth.user}
>
<div className='flex flex-col sm:flex-row gap-10'>
<div className='w-full sm:w-[65%] p-4'>
    <div className="bg-white h-auto w-full rounded-md flex">
        <div className='w-[5%] p-2'>
            <QuoteIcon size={30} fill='black'/>
        </div>
        <div className='p-5 h-auto'>
            <p>It's not how much money you make, but how much money you keep, how hard it works for you, and how many generations you keep it for.</p>
        </div>
    </div>

    <div className='mt-10 mx-10'>
        <p className='text-2xl font-bold pl-2'>Income Today</p>
        <span className='text-8xl font-bold '>P{totalIncome.toLocaleString()}</span>
        <p className='px-1 text-xl mt-4'>Potential Income This Month <span className='font-bold'>P200,500</span></p>
    </div>


    <div className='bg-blue-800 w-full flex flex-wrap p-3 mt-8 mx-2 gap-2 rounded-lg'>
        <div className='w-44 h-24 bg-white rounded-md'>
            <p className='text-2xl pt-2 px-2 font-bold'>Job</p>
            <p className='p-2'>P15,000/Monthly</p>
        </div>

        <div className='w-44 h-24 bg-white rounded-md'>
            <p className='text-2xl pt-2 px-2 font-bold'>Part Time</p>
            <p className='p-2'>Depends</p>
        </div>

        <div className='w-44 h-24 bg-white rounded-md'>
            <p className='text-2xl pt-2 px-2 font-bold'>Business</p>
            <p className='p-2'>P2,000 Today</p>
        </div>

        <div className='w-44 h-24 bg-white rounded-md'>
            <p className='text-2xl pt-2 px-2 font-bold'>Part Time</p>
            <p className='p-2'>Depends</p>
        </div>

        <div className='w-44 h-24 bg-white rounded-md'>
            <p className='text-2xl pt-2 px-2 font-bold'>Part Time</p>
            <p className='p-2'>Depends</p>
        </div>

    </div>

</div>

    <div className='mt-4 mx-3 sm:w-[32%] rounded-md bg-white h-[100vh]'>
    <div className='mx-3 mt-10 mb-5 flex justify-end'>
    <span className='bg-blue-800 p-2 rounded-md text-white cursor-pointer'  onClick={() => setShowModal(true)}>+ Income</span>

    </div>
    <div className='px-2 flex flex-col gap-3'>
{
    income.map(distribute => {

        return <IncomeHistory title={distribute.title} income={distribute.income} time={distribute.created_at}/>
    })

}

    </div>

    </div>
</div>



{showModal ? (
        <>
          <form className="w-full max-w-lg" onSubmit={submitForm}>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    New Goal
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>

                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">


  <div className="flex flex-wrap -mx-3 mb-2">
  <div className='w-full md:w-[50%] px-3 mb-6 md:mb-0'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='grid-city'
              >
                Title
              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='grid-city'
                type='text'
                placeholder='Part-Time'
                name='title'  // Add name attribute for correct form data binding
                value={data.title}
                onChange={handleFormChange}
                required
              />
            </div>

            <div className='w-full md:w-[50%] px-3 mb-6 md:mb-0'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='grid-zip'
              >
                Income
              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='grid-zip'
                type='number'
                required
                placeholder='12400'
                name='income'  // Add name attribute for correct form data binding
                value={data.income}
                onChange={handleFormChange}
              />
            </div>

            <div className='relative mt-5 ml-3'>
              <select
                name='schedule'
                value={data.schedule}
                onChange={handleFormChange}
                className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              >
                <option value=''>Select</option>
                <option value='Just Now'>Just Now</option>
                <option value='daily'>Daily</option>
                <option value='monthly'>Monthly</option>
              </select>
            </div>
  </div>

                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                    >
                    Close
                  </button>
                  <button
  type="submit"
  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
>
  Save Changes
</button>



                </div>

              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                      </form>
        </>
      ) : null}
    </AuthenticatedLayout>
  )
}

export default Income
