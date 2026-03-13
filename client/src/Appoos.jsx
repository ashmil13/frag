import { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("image", image);

    await axios.post("http://localhost:5000/api/products/create", formData);

    alert("Product Uploaded");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Upload Product</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <br /><br />
        <input type="number" placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
        <br /><br />
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <br /><br />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default App;