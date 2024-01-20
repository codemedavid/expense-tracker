import React, { useState } from 'react';
import CategoryItems from './CategoryItems';
import { Inertia } from '@inertiajs/inertia';
function Category() {
    const [form, setForm] = useState({
        name: '',
        money: '',
        target_date: '',
      });
    const [showModal, setShowModal] = useState(false);
    const submitForm = async (e) => {
        e.preventDefault();  // Prevent the default form submission behavior

        // Use Inertia.post method to send form data to the Laravel backend
        await Inertia.post(route('goals.store'), form);

        // Reset form fields
        setForm({
          name: '',
          money: '',
          target_date: '',
        });

        // Close the modal
        setShowModal(false);
      };


  return (
    <div className='w-full mx-auto bg-white h-22  py-2 sm:rounded-md'>
        <div className='border-b-2 px-2 border-[#fafafa] mb-3'>
            <p className='text-xl'>Goals</p>
        </div>
        <div className='w-full px-2 pb-4 flex gap-2 overflow-x-auto'>
            <div className='flex'>

            <div className='w-14 h-14 rounded-full flex items-center justify-center cursor-pointer bg-orange-200'>
                <span className='text-4xl w-14 h-14 flex justify-center cursor-pointer items-center' onClick={() => setShowModal(true)}>+</span>
            </div>
            <div className='w-20 py-2 px-2'>
                <p className='text-xs font-bold'>Add New Goal</p>
            </div>
            </div>



        </div>

        {showModal ? (
        <>
          <form className="w-full max-w-lg">
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
    <div className="w-full md:w-[50%] px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
        Title
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required />
    </div>

    <div className="w-full md:w-[50%] px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
        Price
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="number"
          value={form.money}
          onChange={(e) => setForm({ ...form, money: e.target.value })}
          required placeholder="90210"  />
    </div>
    <input
    className="mx-3 mt-2 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="date"
          value={form.target_date}
          onChange={(e) => setForm({ ...form, target_date: e.target.value })}
          required
        />
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
  onClick={submitForm}  // Add this line to call submitForm when the button is clicked
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
    </div>
  );
}

export default Category;
