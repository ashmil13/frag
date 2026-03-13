import React, { useState, useEffect } from 'react'
import axios from 'axios'



const API_URL = 'http://localhost:3000/api/address';


const Address = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        streetAddress: '',
        city: '',
        state: '',
        pincode: ''

    });
 const fetchAddresses = async () => {
    const response = await axios.get(API_URL);
    setFormData(response.data);
    
}

const handleChange = (e) => {
const {name, value} = e.target;
setFormData({
    ...formData,
    [name]: value
})


}

const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(API_URL, formData);
    setFormData(response.data);
}


   







useEffect(() => {
        fetchAddresses();
    }, [])


    return (
        <div className='container-fluid p-4'>
            <div className='row mb-4'>
                <div className='col-12 d-flex justify-content-between align-items-center'>
                    <h2 className="mb-0">Address Management</h2>
                </div>
            </div>

            <div className='row'>
                <div className='col-lg-12 mb-4'>
                    <div className='card shadow-md' style={{ minHeight: "80vh", minWidth: "80vw" }}>
                        <div className='card-body'>
                            <h5 className='card-title mb-4'>Add New Address</h5>

                            <form onSubmit={handleSubmit}>
                                <div className='mb-4'>
                                    <h6 className='text-muted mb-3'>Profile Information</h6>
                                    <div className='row'>
                                        <div className='col-md-6 mb-3'>
                                            <label className='form-label'>Full Name</label>
                                            <input
                                                type='text'
                                                className='form-control'
                                                name='fullName'
                                                value={formData.fullName}
                                                onChange={handleChange}
                                               
                                            />
                                        </div>
                                        <div className='col-md-6 mb-3'>
                                            <label className='form-label'>Phone Number</label>
                                            <input
                                                type='tel'
                                                className='form-control'
                                                name='phoneNumber'
                                                value={formData.phoneNumber}
                                                onChange={handleChange}
                                                
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className='mb-4'>
                                    <h6 className='text-muted mb-3'>Address Details</h6>
                                    <div className='border rounded p-3 bg-light'>
                                        <div className='row'>
                                            <div className='col-12 mb-3'>
                                                <label className='form-label'>Street Address</label>
                                                <textarea
                                                    className='form-control'
                                                    name='streetAddress'
                                                    rows='3'
                                                    value={formData.streetAddress}
                                                    onChange={handleChange}
                                                    placeholder='e.g. 123 Main Street, Apartment 4B'
                                                    required
                                                ></textarea>
                                            </div>
                                            <div className='col-md-4 mb-3'>
                                                <label className='form-label'>City</label>
                                                <input
                                                    type='text'
                                                    className='form-control'
                                                    name='city'
                                                    value={formData.city}
                                                    onChange={handleChange}
                                                    placeholder='e.g. Mumbai'
                                                    required
                                                />
                                            </div>
                                            <div className='col-md-4 mb-3'>
                                                <label className='form-label'>State</label>
                                                <input
                                                    type='text'
                                                    className='form-control'
                                                    name='state'
                                                    value={formData.state}
                                                    onChange={handleChange}
                                                    
                                                />
                                            </div>
                                            <div className='col-md-4 mb-3'>
                                                <label className='form-label'>Pincode</label>
                                                <input
                                                    type='text'
                                                    className='form-control'
                                                    name='pincode'
                                                    value={formData.pincode}
                                                    onChange={handleChange}
                                                   
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='d-flex gap-2 mt-4'>
                                    <button type='submit' className='btn btn-primary'>Save Address</button>

                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Address;