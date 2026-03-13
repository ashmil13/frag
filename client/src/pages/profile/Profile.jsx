import React, { useState, useEffect } from 'react'
import axios from 'axios'

const API_URL = "http://localhost:3000/api/profile"



const Profile = () => {

    const [profile, setProfile] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dob: '',
        gender: '',
        address: ''
    })
    const [loading, setLoading] = useState(false)
    const fetchProfile = async () => {
        try {
            // First try fetching the user list to get the user's basic info
            const userResponse = await axios.get("http://localhost:3000/api/user")
            
            // For now, let's grab the first user as a fallback if auth is not implemented
            if(userResponse.data && userResponse.data.data && userResponse.data.data.length > 0) {
                const userData = userResponse.data.data[userResponse.data.data.length - 1]; // get latest signup
                
                // Get the old profile data using the email from userData
                let profileResponse = { data: {} };
                try {
                    profileResponse = await axios.get(`${API_URL}?email=${userData.email}`)
                } catch(error) {
                    console.log("No existing profile found for this user, will create empty.");
                }
                const existingProfile = profileResponse.data || {};
                
                let fName = '';
                let lName = '';
                if (userData.name) {
                    const nameParts = userData.name.split(' ');
                    fName = nameParts[0] || '';
                    lName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';
                }
                
                // Set form state to the existing profile data from db, OR fallback to basic signup info
                setProfile({
                    ...existingProfile,
                    firstName: existingProfile.firstName || fName,
                    lastName: existingProfile.lastName || lName,
                    email: existingProfile.email || userData.email || '',
                    phone: existingProfile.phone || '',
                    dob: existingProfile.dob ? new Date(existingProfile.dob).toISOString().split('T')[0] : '', // ensure date is formatted correctly for date input
                    gender: existingProfile.gender || '',
                    address: existingProfile.address || ''
                })
            } else {
                const response = await axios.get(API_URL)
                setProfile(response.data)
            }
        } catch (error) {
            console.error("Error fetching data", error);
        }
    }

    const hadleChange = (e) => {
        const { name, value } = e.target
        setProfile({ ...profile, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            await axios.post(API_URL, profile)
            await fetchProfile()
        } catch (error) {
            console.error("Error updating profile", error)
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchProfile();
    }, [])

    return (
        <div className='container-fluid p-4'>
            <div className='row mb-4 '>
                <div className='col-12 d-flex justify-content-between align-items-center'>
                    <h2 className="mb-0"> Profile</h2>
                </div>
            </div>
            <div className='row  '>
                <div className='col-lg-12 mb-4'>
                    <div className='card shadow-md' style={{ minHeight: "80vh", minWidth: "80vw" }}>
                        <div className='card-body'>
                            <div className='d-flex justify-content-between align-items-center mb-4'>
                                <div className='card-body text-center'>
                                    <div className='mb-3'>
                                        <div className='rounded-circle bg-primary d-inline-flex align-items-center justify-content-center'
                                            style={{ width: '120px', height: '120px' }}>
                                            <i className='fas fa-user text-white' style={{ fontSize: '48px' }}></i>
                                        </div>
                                    </div>
                                    <h4 className='card-title'>{`${profile.firstName} ${profile.lastName}`.trim() || 'User'}</h4>
                                    <p className='text-muted'>{profile.email || 'Email not provided'}</p>
                                </div>
                            </div>


                            <form onSubmit={handleSubmit}>
                                <div className='row mb-3'>
                                    <div className='col-md-6'>
                                        <label className='form-label'>First Name</label>
                                        <input type='text' className='form-control' name="firstName" value={profile.firstName} onChange={hadleChange} required />
                                    </div>
                                    <div className='col-md-6'>
                                        <label className='form-label'>Last Name</label>
                                        <input type='text' className='form-control' name="lastName" value={profile.lastName} onChange={hadleChange} required />
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div className='col-md-6'>
                                        <label className='form-label'>Email</label>
                                        <input type='email' className='form-control' name="email" value={profile.email} onChange={hadleChange} required />
                                    </div>
                                    <div className='col-md-6'>
                                        <label className='form-label'>Phone</label>
                                        <input type='tel' className='form-control' name="phone" value={profile.phone} onChange={hadleChange} />
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div className='col-md-6'>
                                        <label className='form-label'>Date of Birth</label>
                                        <input type='date' className='form-control' name="dob" value={profile.dob} onChange={hadleChange} />
                                    </div>
                                    <div className='col-md-6'>
                                        <label className='form-label'>Gender</label>
                                        <select className='form-select' name="gender" value={profile.gender} onChange={hadleChange}>
                                            <option value="">Select Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div className='mb-3'>
                                    <label className='form-label'>Address</label>
                                    <textarea className='form-control' name="address" value={profile.address} onChange={hadleChange}></textarea>
                                </div>
                                <div className='d-flex justify-content-center gap-2 mt-5'>
                                    <button type='submit' className='btn btn-primary px-4 py-2' disabled={loading}>
                                        <i className='fas fa-edit me-2'></i>{loading ? 'Editing...' : 'Edit Profile'}
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