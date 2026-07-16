import React from "react";
import { Link } from "react-router-dom";

export default function Features() {
  return (
    <div className="container px-4 py-5">
      <h2 className="pb-2 border-bottom text-center">
        Shop by Category
      </h2>

      <div className="row g-4 py-5 row-cols-1 row-cols-md-2 row-cols-lg-3">
        <div className="col">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h3 className="card-title">📱 Electronics</h3>
              <p className="card-text">
                Discover smartphones, laptops, headphones, smartwatches,
                cameras, and the latest electronic gadgets.
              </p>
              <Link to="/landing/products" className="btn btn-primary">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h3 className="card-title">👕 Fashion</h3>
              <p className="card-text">
                Explore trendy clothing, shoes, handbags, watches, and
                accessories for every occasion.
              </p>
              <Link to="/landing/products" className="btn btn-primary">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h3 className="card-title">💄 Beauty</h3>
              <p className="card-text">
                Shop skincare, makeup, perfumes, and beauty essentials from
                top brands.
              </p>
              <Link to="/landing/products" className="btn btn-primary">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h3 className="card-title">🛋️ Furniture</h3>
              <p className="card-text">
                Upgrade your home with premium furniture, décor, and storage
                solutions.
              </p>
              <Link to="/landing/products" className="btn btn-primary">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h3 className="card-title">🛒 Groceries</h3>
              <p className="card-text">
                Buy fresh groceries, snacks, beverages, and daily essentials
                at affordable prices.
              </p>
              <Link to="/landing/products" className="btn btn-primary">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h3 className="card-title">⌚ Accessories</h3>
              <p className="card-text">
                Find premium watches, sunglasses, jewelry, wallets, and
                lifestyle accessories.
              </p>
              <Link to="/landing/products" className="btn btn-primary">
                Shop Now
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

