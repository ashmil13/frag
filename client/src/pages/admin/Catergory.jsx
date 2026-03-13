import React, { useState, useEffect } from 'react'
import axios from 'axios';

const API_URL = "http://localhost:3000/api/Category";

const Catergory = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: ''
  });

  const [categories, setCategories] = useState([]);


  const fetchCategories = async () => {
    
      const response = await axios.get(API_URL);
      setCategories(response.data);
    
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
      const response = await axios.post(API_URL, formData);
      setFormData({ name: '', description: '' });
      fetchCategories(); 
 
  };

  const handleDelete = async (categoryId) => {
   

        await axios.delete(`${API_URL}/${categoryId}`);
        alert('Category deleted successfully!');
        fetchCategories(); 
      
    
  };

 

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
      <div className='container-fluid p-4'>
        <div className='row mb-4'>
            <div className='col-12'>
                <h2 className="mb-4">Admin Products</h2>
            </div>
        </div>
        
        <div className='d-flex justify-content-between align-items-center mb-4'>
         <div>
          <button className='exp-button '>export</button>
          <button className='exp-button '>import</button>
         </div>
           
        </div>
        
        <div className='card shadow-md'>
            <div className='card-body'>
                <form onSubmit={handleSubmit}>
                    <div className='row mb-3'>
                        <div className='col-12'>
                            <label htmlFor='categoryName' className='form-label'>Category Name</label>
                            <input 
                                type='text' 
                                className='form-control' 
                                id='categoryName' 
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                placeholder='Enter category name'
                            />
                        </div>
                    </div>

                    <div className='row mb-3'>
                        <div className='col-12'>
                            <label htmlFor='categoryDescription' className='form-label'>Description</label>
                            <textarea 
                                className='form-control' 
                                id='categoryDescription' 
                                name='description'
                                value={formData.description}
                                onChange={handleChange}
                                rows='4' 
                                placeholder='Enter category description'
                            ></textarea>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-12 d-flex justify-content-center gap-2'>
                            <button type='submit' className='btn btn-primary '>
                             Add
                            </button>
                           
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <div className='card shadow-md mt-4'>
            <div className='tb-body'>
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead>
                            <tr className='tred'>
                                <th> Name</th>
                                <th> Description</th>
                                <th>Parent Category</th>
                                <th>Child Category</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.length === 0 ? (
                                <tr>
                                    <td colSpan="5" className="text-center">
                                        <p className="text-muted">No categories found</p>
                                    </td>
                                </tr>
                            ) : (
                                categories.map((category, index) => (
                                    <tr key={category._id || index}>
                                        <td>{category.name}</td>
                                        <td>{category.description || 'No description'}</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>
                                            <div className="d-flex gap-2">
                                                <button 
                                                    className="btn btn-sm btn-outline-danger" 
                                                    onClick={() => handleDelete(category._id)}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

      </div>
  )
}

export default Catergory