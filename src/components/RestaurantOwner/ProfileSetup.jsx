
import Owner from "../../pages/owner.jsx";
import img4 from "../../assets/img/Untitled.jpeg";
import React from "react";
import '../../Css/Owner Css/owner.css'



const ProfileSetup = () => {
    return (
        <div>
            <Owner>
             <form className='w-[1050px]  bg-green-300 pb-20 pt-20 pl-60 '>
                 <label >Restaurant Name: </label>
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






             </form>
            </Owner>
        </div>
    );
};

export default ProfileSetup;