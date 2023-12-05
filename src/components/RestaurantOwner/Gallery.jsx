import React from 'react';
import Owner from "../../pages/owner.jsx";
import img5 from '../../assets/img/placeholder-600x400.webp'

const Gallery = () => {
    return (
        <div className='bg-[#0D0B2A]'>
            <Owner>
                <div className="grid grid-cols-2 gap-4 bg-[#161B3B] text-white pb-5 pl-3 pt-5 rounded-lg mb-10">
                    <div>
                        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-white">Your Branch Name</label>
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose Your Branch </option>
                            <option selected>Branch One</option>
                            <option value="Branch">Branch Two</option>
                            <option value="Branch">Branch Three</option>
                            <option value="Branch">Branch Four</option>
                            <option value="Branch">Branch Five </option>
                        </select>

                    </div>

                    <div>
                        <h2 className=''> Imag Upload</h2>
                          <input type='file' className='mt-2'/>
                    </div>
                </div>
               <div className='bg-[#161B3B] p-5 rounded-lg'>
                   <div className="grid grid-cols-5 gap-4">
                       <div>
                           <img className="h-auto max-w-full" src={img5} alt="image description"/>
                       </div>
                       <div>
                           <img className="h-auto max-w-full" src={img5} alt="image description"/>
                       </div>
                       <div>
                           <img className="h-auto max-w-full" src={img5} alt="image description"/>
                       </div>
                       <div>
                           <img className="h-auto max-w-full" src={img5} alt="image description"/>
                       </div>
                       <div>
                           <img className="h-auto max-w-full" src={img5} alt="image description"/>
                       </div>

                   </div>

                   <div className="grid grid-cols-5 gap-4 mt-10">
                       <div>
                           <img className="h-auto max-w-full" src={img5} alt="image description"/>
                       </div>
                       <div>
                           <img className="h-auto max-w-full" src={img5} alt="image description"/>
                       </div>
                       <div>
                           <img className="h-auto max-w-full" src={img5} alt="image description"/>
                       </div>
                       <div>
                           <img className="h-auto max-w-full" src={img5} alt="image description"/>
                       </div>
                       <div>
                           <img className="h-auto max-w-full" src={img5} alt="image description"/>
                       </div>

                   </div>

                   <div className="grid grid-cols-5 gap-4 mt-10 text-center">
                       <div>
                           <img className="h-auto max-w-full" src={img5} alt="image description"/>
                       </div>
                       <div>
                           <img className="h-auto max-w-full" src={img5} alt="image description"/>
                       </div>
                       <div>
                           <img className="h-auto max-w-full" src={img5} alt="image description"/>
                       </div>
                       <div>
                           <img className="h-auto max-w-full" src={img5} alt="image description"/>
                       </div>
                       <div>
                           <img className="h-auto max-w-full" src={img5} alt="image description"/>
                       </div>

                   </div>
               </div>

            </Owner>
        </div>
    );
};

export default Gallery;