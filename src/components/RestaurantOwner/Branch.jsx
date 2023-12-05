import React from 'react';
import Owner from "../../pages/owner.jsx";
import img1 from '../../assets/RestaurantDetailsImage/imag1.jpg'

const Branch = () => {
    return (
        <div className='bg-[#0D0B2A]'>
            <Owner>

                <form className='bg-blue-200 bg-[#161B3B] text-white mb-3 rounded-lg'>
                    <div className="grid gap-6 mb-6 md:grid-cols-2 p-10">
                        <div>
                            <label  className="block mb-2 text-sm font-medium text-gray-900 text-white">Branch Name</label>
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Branch Name" required />
                        </div>
                        <div>
                            <label>Image Upload</label>
                            <img src={img1} className='rounded rounded-xl w-[200px] h-[200px] mb-3 mt-3'/>
                            <input type='file'/>
                        </div>
                        <div>
                            <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900 text-white">Mobile No:</label>
                            <input type="number" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="number:" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                        </div>
                        <div>
                            <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900 text-white">Type:</label>
                            <input type="type" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type"  required />
                        </div>
                        <div>
                            <label htmlFor="Detail Address:" className="block mb-2 text-sm font-medium text-gray-900 text-white">Detail Address:</label>
                            <input type="type" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Detail Address "  required />
                        </div>
                        <div>
                            <label htmlFor="Area:" className="block mb-2 text-sm font-medium text-gray-900 text-white">Area:</label>
                            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Choose Your Area</option>
                                <option selected>Branch One</option>
                                <option value="Area">Dhaka</option>
                                <option value="Area">Rangpur</option>
                                <option value="Area">Dinajpur</option>
                                <option value="Area">Rajshari </option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="Longitude" className="block mb-2 text-sm font-medium text-gray-900 text-white">Longitude:</label>
                            <input type='text' id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Longitude: "  required />
                        </div>
                        <div>
                            <label htmlFor="Latitude:" className="block mb-2 text-sm font-medium text-gray-900 text-white">Latitude::</label>
                            <input type='text' id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Latitude:: "  required />
                        </div>
                        <div>
                            <label htmlFor="Description::" className="block  text-sm font-medium text-gray-900 text-white">Description:</label>
                            <textarea  id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description: "  required />
                        </div>

                    </div>
                    <button className='Buttom-senter'>Add</button>

                </form>

                <div className="relative overflow-x-auto shadow-md mb-10">
                    <table className="w-full text-sm  text-gray-500 ">
                        <thead className="text-xs text-white uppercase  bg-amber-600 ">
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
                                Branch 1
                            </th>
                            <td className="text-center">
                                14073 Emerald Coast Pkwy, , Destin Florida Seafood • Casual Dining • $$
                            </td>

                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 ">
                                    <label className='hover:underline'>Edit</label>
                                    <label className='remove hover:underline pl-3'>Remove</label>
                                </a>
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Branch 2
                            </th>
                            <td className=" text-center">
                                14073 Emerald Coast Pkwy, , Destin Florida Seafood • Casual Dining • $$
                            </td>


                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 ">
                                    <label className='hover:underline'>Edit</label>
                                    <label className='remove hover:underline pl-3'>Remove</label>
                                </a>
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Branch 3
                            </th>
                            <td className="text-center">
                                14073 Emerald Coast Pkwy, , Destin Florida Seafood • Casual Dining • $$
                            </td>

                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 ">
                                    <label className='hover:underline'>Edit</label>
                                    <label className='remove hover:underline pl-3'>Remove</label>
                                </a>
                            </td>
                        </tr>

                        </tbody>
                    </table>
                </div>


            </Owner>

        </div>
    );
};

export default Branch;