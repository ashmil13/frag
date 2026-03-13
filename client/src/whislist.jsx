import React, { useContext } from 'react';
import { WhislistContext } from './Context/WhislistContext';
import { CartContext } from './Context/Cartcontext';

function Whislist() {
    const { whislist, removeFromWhislist } = useContext(WhislistContext);
    const { addToCart } = useContext(CartContext);

    return (
        <div className="container mt-5 mb-5" style={{ minHeight: "60vh" }}>
            {whislist && whislist.length > 0 ? (
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center">
                    {whislist.map(item => (
                        <div className="col" key={item.id}>
                            <div className="card h-100 shadow-sm border" style={{ borderRadius: "5px", overflow: "hidden" }}>
                                <div className="text-center p-3">
                                    <img
                                        src={item.image}
                                        className="img-fluid"
                                        alt={item.title}
                                        style={{ height: "150px", objectFit: "contain" }}
                                    />
                                </div>
                                <div className="card-body text-center d-flex flex-column">
                                    <h6 className="card-title mb-2">
                                        {item.title.length > 30 ? item.title.substring(0, 30) + "..." : item.title}
                                    </h6>
                                    <h6 className="mb-3 text-muted">
                                        Rs {Math.round(item.price * 80)}
                                    </h6>
                                    
                                    <div className="mt-auto">
                                        <button 
                                            className="btn btn-outline-danger btn-sm w-100" 
                                            onClick={() => removeFromWhislist(item.id)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-5 mt-4">
                </div>
            )}
        </div>
    );
}

export default Whislist;
