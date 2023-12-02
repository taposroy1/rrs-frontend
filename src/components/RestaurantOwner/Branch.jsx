
import Owner from "../../pages/owner.jsx";
import img4 from "../../assets/img/Untitled.jpeg";
import React from "react";




const Branch = () => {
    return (
        <div>
            <Owner>
                <form className='w-[1050px]  bg-green-300 pb-20 pt-20 pl-60 '>
                    <label >Branch Name: </label>
                    <input/><br/><br/>
                    <div className='grid grid-cols-4 gap-4'>
                        <div>
                            <label>Imag:
                                <img src={img4} alt=''/>
                            </label>
                        </div>
                        <div>
                            <input className="block  text-sm text-gray-900
                 border border-gray-300 rounded-lg
                 cursor-pointer bg-gray-50 dark:text-gray-400
                 focus:outline-none dark:bg-gray-700 mt-56
                  dark:border-gray-600 dark:placeholder-gray-400"
                                   id="file_input" type="file"/><br/><br/>
                        </div>

                    </div>
                    <label > Type: </label>
                    <input/><br/><br/>

                    <label  > Detail Address: </label>
                    <input/><br/><br/>

                    <label > Mobile No: </label>
                    <input/><br/><br/>

                    <label className='mb-10'> Description: </label>
                    <textarea></textarea><br/>

                    <button className='mx-auto' >Save Change</button>


                <div>

                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="pr-6 mt-6 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-white uppercase bg-amber-600 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Branch
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Address
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>

                            </tr>
                            </thead>
                            <tbody>
                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Apple MacBook Pro 17"
                                </th>
                                <td className="px-6 py-4">
                                    Silver
                                </td>

                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Microsoft Surface Pro
                                </th>
                                <td className="px-6 py-4">
                                    White
                                </td>

                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>

                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                                    Magic Mouse 2
                                </th>
                                <td className="px-6 py-4">
                                    Black
                                </td>

                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>

                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Google Pixel Phone
                                </th>
                                <td className="px-6 py-4">
                                    Gray
                                </td>

                                <td className="px-6 py-4">
                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>

                            <tr className='bg-amber-600'>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-white">
                                    Apple Watch 5
                                </th>
                                <td className="px-6 py-4">
                                    Red
                                </td>

                                <td className="px-6 py-4">
                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
              </form>
            </Owner>
        </div>
    );
};

export default Branch;