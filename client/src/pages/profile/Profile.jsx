import React from 'react'

const Profile = () => {
  return (
    <div className='container-fluid p-4'>
        <div className='row mb-4 '>
            <div className='col-12 d-flex justify-content-between align-items-center'>
                <h2 className="mb-0"> Profile</h2>
                <button className='btn btn-primary btn-sm'>
                    <i className='fas fa-user-plus me-2'></i>Add Profile
                </button>
            </div>
        </div>
        <div className='row  '>          
            <div className='col-lg-12 mb-4'>
                <div className='card shadow-md' style={{minHeight: "80vh", minWidth: "80vw"}}>
                    <div className='card-body'>
                        <div className='d-flex justify-content-between align-items-center mb-4'>
                             <div className='card-body text-center'>
                        <div className='mb-3'>
                            <div className='rounded-circle bg-primary d-inline-flex align-items-center justify-content-center' 
                                 style={{width: '120px', height: '120px'}}>
                                <i className='fas fa-user text-white' style={{fontSize: '48px'}}></i>
                            </div>
                        </div>
                        <h4 className='card-title'>AShmil</h4>
                        <p className='text-muted'>Ashmil13@gmail.com</p>                                        
                    </div>                      
                        </div>
                        
                        <form>
                            <div className='row mb-3'>
                                <div className='col-md-6'>
                                    <label className='form-label'>First Name</label>
                                    <input type='text' className='form-control' />
                                </div>
                                <div className='col-md-6'>
                                    <label className='form-label'>Last Name</label>
                                    <input type='text' className='form-control'  />
                                </div>
                            </div>
                            
                            <div className='row mb-3'>
                                <div className='col-md-6'>
                                    <label className='form-label'>Email</label>
                                    <input type='email' className='form-control' />
                                </div>
                                <div className='col-md-6'>
                                    <label className='form-label'>Phone</label>
                                    <input type='tel' className='form-control'  />
                                </div>
                            </div>
                            
                            <div className='row mb-3'>
                                <div className='col-md-6'>
                                    <label className='form-label'>Date of Birth</label>
                                    <input type='date' className='form-control'  />
                                </div>
                                <div className='col-md-6'>
                                    <label className='form-label'>Gender</label>
                                    <select className='form-select'>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className='mb-3'>
                                <label className='form-label'>Address</label>
                                <textarea className='form-control'>
                                    
                                </textarea>
                            </div>
                            <div className='d-flex justify-content-center gap-2 mt-5'>
                   
                    <button className='btn btn-outline-danger '>
                        <i className='fas fa-trash me-2'></i>Delete Account
                    </button>
                </div>
                        </form>
                    </div>
                </div>

        

             
            </div>
        </div>
    </div>
  )
}

export default Profile