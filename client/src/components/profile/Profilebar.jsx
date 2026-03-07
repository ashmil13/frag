import React from 'react'
import { Link } from "react-router-dom";

const Profilebar = () => {
  return (
    <div className='d-flex justify-content-start align-items-center h-100'>
             <div className='col-lg-4' style={{width: "100%", marginTop: "150px"}}>
                <div className='card shadow-md mt-3 '>
                    <div className='card-body  mt-5 d-flex flex-column justify-content-center align-items-center' style={{height:"450px", margin:"20px"}} >

                        <Link to="/profile" className='btn btn-outline-primary mb-3 w-100 h-full '>Profile</Link>
                        <Link to="/address" className='btn btn-outline-primary mb-3 w-100 h-full mt-5'>Address</Link>
                        <Link to="/order" className='btn btn-outline-primary w-100 h-h-full mt-5'>Order</Link>
                     
 
                    </div>
                </div>
            </div>
      
    </div>
  );
};

export default Profilebar;