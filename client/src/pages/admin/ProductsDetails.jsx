import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const API_URL = "http://localhost:3000/api/products";


const ProductsDetails = () => {

    const navigate = useNavigate();

    const [product, setProduct] = useState({
        name: '',
        price: '',
        salePrice: '',
        quality: '',
        description: '',
        category:''
    });
   
    

    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
        try {
            const response = await axios.get("http://localhost:3000/api/Category");
            setCategories(response.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    // const fetchProducts = async () => {
    //     const response = await axios.get(API_URL);
    //     setProduct(response.data);
    // };

    const handleChange = (e) => {

        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(API_URL, product);
            alert('Product added successfully!');
            setProduct({name:'',price:'',salePrice:'',quality:'',description:'',category:'' });
            navigate('/adminproducts');
        } catch (error) {
            console.error('Error saving product:', error);
            alert('Error saving product. Please try again.');
        }
    }



    // useEffect(() => {
    //     fetchProducts();
    // }, []);


    return (
        <div className='container-fluid p-4'>
            <div className='row mb-4'>
                <div className='col-12'>
                    <h2 className="mb-4">Product Details</h2>
                </div>
            </div>

            <div className='card shadow-md carf'>
                <div className='card-by'>
                    <form onSubmit={handleSubmit}>

                        <div className='row mb-3'>
                            <div className='col-md-6'>
                                <label htmlFor='productName' className='form-label'>Product Name</label>
                                <input
                                    type='text'
                                    name="name"
                                    className='form-control'
                                    value={product.name}
                                    onChange={handleChange}

                                    placeholder='Enter product name'
                                />
                            </div>
                            <div className='col-md-6'>
                                <label htmlFor='productTitle' className='form-label'>Product Price</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    name='price'
                                    value={product.price}
                                    onChange={handleChange}

                                    placeholder='Enter product title'
                                />
                            </div>
                        </div>


                        <div className='row mb-3'>
                            <div className='col-md-6'>
                                <label htmlFor='salePrice' className='form-label'>Sale Price</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    name='salePrice'
                                    value={product.salePrice}
                                    onChange={handleChange}

                                    placeholder='Enter sale price'
                                />
                            </div>
                            <div className='col-md-6'>
                                <label htmlFor='productQuality' className='form-label'>Product Quality</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    name="quality"
                                    value={product.quality}
                                    onChange={handleChange}
                                    placeholder='Enter product quality'

                                />
                            </div>
                        </div>


                        <div className='row mb-3'>
                            <div className='col-md-6'>
                            <label htmlFor='category' className='form-label'>Category</label>
                            <select className='form-select'
                            name="category"
                            value={product.category}
                            onChange={handleChange}
                            >
                                <option value=''>Select options</option>
                                {categories.map((cat) => (
                                    <option key={cat._id} value={cat._id}>
                                        {cat.name}
                                    </option>
                                ))}
                            </select>
                        </div>    <div className='col-md-6'>
                                <label htmlFor='offer' className='form-label'>Offer</label>
                                <select className='form-select' id='offer'>
                                    <option value=''>Select offer</option>

                                </select>
                            </div>
                        </div>


                        <div className='row mb-3'>
                            <div className='col-12'>
                                <label htmlFor='productDescription' className='form-label'>Product Description</label>
                                <textarea
                                    className='form-control'

                                    name="description"
                                    value={product.description}
                                    onChange={handleChange}
                                    rows='4'
                                    placeholder='Enter product description'
                                ></textarea>
                            </div>
                        </div>


                        <div className='row mb-4'>
                            <div className='col-12'>
                                <label htmlFor='productImage' className='form-label'>Product Image</label>
                                <input
                                    type='file'

                                    className='form-control'
                                    onChange={(e) => setImage(e.target.files[0])}

                                    accept='image/*'
                                />
                            </div>
                        </div>







                        <div className='row'>
                            <div className='col-4 d-flex justify-content-center gap-2'>
                                <button type='submit' className='btn btn-sm btn-primary px-1 py-1'>
                                    Submit
                                </button>
                            </div>
                        </div>


                    </form>
                </div>
            </div>

        </div>

    );
};

export default ProductsDetails;