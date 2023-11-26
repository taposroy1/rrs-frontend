import React, {useState} from 'react';

const AdultsBooking = () => {
    const [count, setCount]= useState(0)
    const handleIncrement=()=>{
        setCount(count - 1)
    }
    const handleDecrement=()=>{
        setCount(count + 1)
    }

    return (
        <div>
            <div>

                <div className='d-flex'>
                  <span className='pr-4'> Adults </span>  <button onClick={handleIncrement} className=' '>-</button> <span className='pl-5 pr-6'>{count}</span>
                    <button onClick={handleDecrement} className=''>+</button>
                </div>
            </div>

        </div>
    );
};

export default AdultsBooking;

