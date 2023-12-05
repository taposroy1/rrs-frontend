import React from 'react';
import Owner from "../../pages/owner.jsx";
import OwnerNavbar from "../Navbar/OwnerNavbar.jsx";

const Reservation = () => {
    return (
      <div  className='bg-[#0D0B2A]'>

          <Owner>

              <form>
                  <div className="grid gap-6 mb-6 md:grid-cols-2 p-10 text-white bg-[#161B3B] rounded-lg">
                      <div>
                          <label  className="block mb-2 text-sm font-medium text-gray-900 text-white">Branch Name</label>
                          <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Branch Name" required />
                      </div>
                      <div>
                          <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 text-white">Request Date</label>
                          <input type="date" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
                      </div>
                      <div>
                          <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900text-white">Status:</label>
                          <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Status:" required />
                      </div>
                      <div>
                          <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 text-white">Reserve Date</label>
                          <input type="date" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                      </div>

                  </div>

              </form>

              <div className="relative overflow-x-auto shadow-md  ">
                  <table className="w-full text-sm  text-gray-500 ">
                      <thead className="text-xs text-white uppercase  bg-amber-600 ">
                      <tr>
                          <th scope="col" className="px-6 py-3">
                              Date
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Request No
                          </th>
                          <th scope="col" className="px-6 py-3">
                              User ID
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Reserved Date
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Time
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Guests
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Table
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Status
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Action
                          </th>
                      </tr>
                      </thead>
                      <tbody className='bg-[#161B3B]'>
                      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              25-11-2023
                          </th>
                          <td className="px-6 py-4">
                              1342-78
                          </td>
                          <td className="px-6 py-4">
                              1342
                          </td>
                          <td className="px-6 py-4">
                              25-11-2023
                          </td>
                          <td className=" py-4">
                              8:30 PM
                          </td>
                          <td className="px-6 py-4">
                             3
                          </td>
                          <td className=" py-6">
                             T2-R-3C
                           </td>
                          <td className="px-6 py-4">
                               Pending
                           </td>
                          <td className="px-6 py-4">
                              <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Response</a>
                          </td>
                      </tr>
                      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              25-11-2023
                          </th>
                          <td className="px-6 py-4">
                              1342-78
                          </td>
                          <td className="px-6 py-4">
                              1342
                          </td>
                          <td className="px-6 py-4">
                              25-11-2023
                          </td>
                          <td className=" py-4">
                              8:30 PM
                          </td>
                          <td className="px-6 py-4">
                             3
                          </td>
                          <td className=" py-6">
                             T2-R-3C
                           </td>
                          <td className="px-6 py-4">
                               Pending
                           </td>
                          <td className="px-6 py-4">
                              <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Response</a>
                          </td>
                      </tr>
                      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              25-11-2023
                          </th>
                          <td className="px-6 py-4">
                              1342-78
                          </td>
                          <td className="px-6 py-4">
                              1342
                          </td>
                          <td className="px-6 py-4">
                              25-11-2023
                          </td>
                          <td className=" py-4">
                              8:30 PM
                          </td>
                          <td className="px-6 py-4">
                             3
                          </td>
                          <td className=" py-6">
                             T2-R-3C
                           </td>
                          <td className="px-6 py-4">
                              Accepted
                           </td>
                          <td className="px-6 py-4">
                              <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Response</a>
                          </td>
                      </tr>
                      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              25-11-2023
                          </th>
                          <td className="px-6 py-4">
                              1342-78
                          </td>
                          <td className="px-6 py-4">
                              1342
                          </td>
                          <td className="px-6 py-4">
                              25-11-2023
                          </td>
                          <td className=" py-4">
                              8:30 PM
                          </td>
                          <td className="px-6 py-4">
                             3
                          </td>
                          <td className=" py-6">
                             T2-R-3C
                           </td>
                          <td className="px-6 py-4">
                              Rejected
                           </td>
                          <td className="px-6 py-4">
                              <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Response</a>
                          </td>
                      </tr>
                      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              25-11-2023
                          </th>
                          <td className="px-6 py-4">
                              1342-78
                          </td>
                          <td className="px-6 py-4">
                              1342
                          </td>
                          <td className="px-6 py-4">
                              25-11-2023
                          </td>
                          <td className=" py-4">
                              8:30 PM
                          </td>
                          <td className="px-6 py-4">
                             3
                          </td>
                          <td className=" py-6">
                             T2-R-3C
                           </td>
                          <td className="px-6 py-4">
                              Accepted
                           </td>
                          <td className="px-6 py-4">
                              <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Responded</a>
                          </td>
                      </tr>
                      </tbody>
                  </table>
              </div>


          </Owner>


      </div>
    );
};

export default Reservation;