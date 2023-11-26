import Popup from './Popup.jsx'
import React, {useState} from "react";
import './ReserveYourTable.css'
import img1 from "../../assets/RestaurantDetailsImage/imag1.jpg";

const RestaurantNameTabel = () => {
    const [buttonPopup, setButtonPopup]= useState(false)
    const [tinedPopup, setTimedButtonPopup]= useState(false)
    return (
        <div>
            <div className='grid grid-cols-2 '>
                <div className='pl-20 pb-10'>
                       <div className='grid grid-cols-2'>
                         <div className='max-w-50'>
                             <img className='rounded-xl ' src={img1} alt=''/>
                         </div>
                         <div className='restaurantName'>
                             <h2 className='text-[25px]'>790 on the Gulf Restaurant</h2>
                             <p className='text-[13px]'>14073 Emerald Coast Pkwy, , Destin Florida
                                 Seafood • Casual Dining • $$ </p>
                         </div>

                       </div>

                    <h1 className='mt-10 text-[25px]' > Description : </h1>
                    <p className=' text-[13px]'>
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar
                    </p>
                </div>
                <div className='pl-20 pb-20'>
                    <h1> Reserved Table</h1>

                    <table className="table-auto border border-amber-800 text-center w-96">
                        <thead className='border border-amber-800'>
                        <tr>
                            <th>Table</th>
                            <th>Time</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Table 1</td>
                            <td>10:30 AM </td>
                        </tr>
                        <tr>
                            <td>Table 2</td>
                            <td>10:00 AM </td>
                        </tr>
                        <tr>
                            <td>Table 1</td>
                            <td>11:30 AM </td>

                        </tr>
                        </tbody>
                    </table>
                    <div className='grid grid-cols-3'>
                        <div><button className=''>Show All Schedule</button></div>
                        <div><button className=''>Show Table Setup</button></div>
                    </div>

                </div>
            </div>
            <div className='text-center pb-20'>

              <button onClick={()=>setButtonPopup(true)}>Reserve your Table</button>
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <div className='reserveYourTable'>
                      <form>
                          <div className='popupTable'>
                              <div className='grid grid-cols-2 '>
                                 <div>
                                     <div className= 'pr-6 text-black '>

                                        <label>Name :</label><input type='text'/><br/><br/>
                                         <div className='grid grid-cols-2'>
                                             <div><label>Reservation Date :</label></div>
                                             <div><input type='date'/></div>
                                         </div>

                                        <div className='grid grid-cols-3'>
                                            <div></div>
                                            <div>Start</div>
                                            <div>End</div>
                                        </div>
                                         <div className='grid grid-cols-3'>
                                             <div>Time:</div>
                                             <div><input type='time' className='with'/></div>
                                             <div><input type='time' className='with'/></div>
                                         </div><br/>
                                         <div className='grid grid-cols-3'>
                                             <div>Guests:</div>
                                             <div><input type='type' className='with'/></div>
                                             <div></div>

                                         </div>
                                         <button className='text-center'>Reserve</button>

                                     </div>
                                 </div>

                                 <div>
                                     <div >
                                         <table className="table-auto border border-amber-800 text-center w-80 pt-6">
                                             <thead className='border border-amber-800 '>
                                             <tr >
                                                 <th>Available Tables</th>

                                             </tr>
                                             </thead>
                                             <tbody>
                                             <tr>
                                                 <td>Table 1 - Round - 3 Chairs</td>
                                             </tr>
                                             <tr>
                                                 <td>Table 1 - Round - 3 Chairs</td>
                                             </tr>
                                             <tr>
                                                 <td>Table 1 - Round - 3 Chairs</td>
                                             </tr>
                                             <tr>
                                                 <td>Table 1 - Round - 3 Chairs</td>
                                             </tr>
                                             <tr>
                                                 <td>Table 1 - Round - 3 Chairs</td>
                                             </tr>
                                             <tr>
                                                 <td>Table 1 - Round - 3 Chairs</td>
                                             </tr>
                                             <tr>
                                                 <td>Table 1 - Round - 3 Chairs</td>
                                             </tr>
                                          </tbody>
                                       </table>

                                     </div>
                                 </div>
                              </div>
                          </div>


                      </form>
                    </div>


                </Popup>


            </div>
            <div className='pl-20 pb-20'>
                <div>
                    <form action="/action_page.php">
                    <h4>Comments and Reviews</h4>
                <textarea className='w-[100vh] h-[30vh] border border-teal-700 pl-3'>Good Service</textarea><br/>
                        <input type="submit" value="Submit"/>
                    </form>
                 </div>

            </div>
        </div>
    );
};

export default RestaurantNameTabel;