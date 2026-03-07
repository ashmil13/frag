import React from 'react';

const Address = () => {
  return (
    <div className='container-fluid p-4'>
        <div className='row mb-4'>
            <div className='col-12'>
                <h2 className="mb-4">Address Management</h2>
            </div>
        </div>
          <div className='row mb-4 '>
            <div className='col-12 d-flex justify-content-between align-items-center'>
                <h2 className="mb-0">Add Address</h2>
                <button className='btn btn-primary btn-sm'>
                    <i className='fas fa-user-plus me-2'></i>Add Address
                </button>
            </div>
        </div>
        
        <div className='row'>
          

            <div className='col-lg-12 mb-4'>
                <div className='card shadow-md' style={{minHeight: "80vh", minWidth: "80vw"}}>
                    <div className='card-body'>
                        <h5 className='card-title mb-4'>Address Details</h5>
                        
                        <div className='mb-4'>
                            <h6 className='text-muted mb-3'>Profile Information</h6>
                            <div className='row'>
                                <div className='col-md-6 mb-3'>
                                    <label className='form-label'>Full Name</label>
                                    <input type='text' className='form-control' defaultValue='John Doe' readOnly />
                                </div>
                                <div className='col-md-6 mb-3'>
                                    <label className='form-label'>Phone Number</label>
                                    <input type='tel' className='form-control' defaultValue='+91 98765 43210' readOnly />
                                </div>
                            </div>
                        </div>

                        <div className='mb-4'>
                            <h6 className='text-muted mb-3'>Current Address</h6>
                            <div className='border rounded p-3 bg-light'>
                                <div className='row'>
                                    <div className='col-12 mb-2'>
                                        <label className='form-label'>Street Address</label>
                                        <textarea className='form-control' rows='2' defaultValue='123 Main Street, Apartment 4B' readOnly />
                                    </div>
                                    <div className='col-md-6 mb-3'>
                                        <label className='form-label'>City</label>
                                        <input type='text' className='form-control' defaultValue='Mumbai' readOnly />
                                    </div>
                                    <div className='col-md-6 mb-3'>
                                        <label className='form-label'>State</label>
                                        <input type='text' className='form-control' defaultValue='Maharashtra' readOnly />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='d-flex gap-2'>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Address;