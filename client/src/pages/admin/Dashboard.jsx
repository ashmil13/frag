import React from 'react'

const Dashboard = () => {
  return (
    <div className='container-fluid p-4'>
        <div className='row mb-4'>
            <div className='col-12'>
                <h2 className="mb-4">Admin Dashboard</h2>
            </div>
        </div>
 
        <div className='d-flex gap-4 mb-4'>
            <div className='d-flex' >
                <div className='card shadow-md h-100'>
                    <div className='card-bdy'>
                        <h5 className="card-title">Weekly Sales</h5>
                        <div className="d-flex justify-content-center align-items-center" style={{height: "400px", backgroundColor: "#f8f9fa", borderRadius: "8px"}}>
                
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='d-flex' >
                <div className='card shadow-md h-100'>
                    <div className='card-bdy'>
                        <h5 className="card-title">Best Selling Products</h5>
                        <div className="table-responsive">
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard