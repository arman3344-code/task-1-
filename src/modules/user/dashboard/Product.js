import React, { useEffect, useState } from "react";
import axios from "axios";

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
    } catch (error) {
      console.log("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Product List</h2>

     
        <div className="row">
  {products.map((product) => (
    <div className="col-md-4 col-lg-3 mb-4" key={product.id}>
      <div className="card h-100 shadow-sm">
        <img
          src={product.thumbnail}
          className="card-img-top"
          alt={product.title}
          style={{ height: "200px", objectFit: "cover" }}
        />

        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>

          <p className="text-muted">{product.category}</p>

          <p className="card-text">
            {product.description.slice(0, 60)}...
          </p>

          <h5 className="text-success">${product.price}</h5>

          <button className="btn btn-primary w-100">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  ))}
</div>
      
    </div>
  );
}

export default Product;