"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
const BestSeller = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?skip=0&limit=8`
      );
      const data: ProductsResponse = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen w-full flex justify-center">
      <div className="w-4/5 h-full flex flex-col justify-center items-center gap-4 ">
        {/* Head text */}
        <div className="flex flex-col items-center gap-2 ">
          <h2 className="text-[1.5rem] text-primary-text font-bold uppercase">
            BestSeller Products
          </h2>
        </div>
        {/* cards */}
        {!loading && (
          <div className="flex flex-col items-center gap-6 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full ">
              {products.map((product) => (
                <Link href={`/products/${product.id}`}>
                  <div
                    key={product.id}
                    className="flex flex-col gap-2 justify-center items-center transition-all cursor-pointer"
                  >
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="w-full h-[238px] mb-4 object-fill"
                    />
                    <h3 className="text-base font-bold text-primary-text text-center">
                      {product.title}
                    </h3>
                    <p className="text-sm text-tertiary-text">
                      {product.category}
                    </p>
                    <p className="flex gap-2">
                      <span className="text-base text-[#bdbdbd] font-bold">
                        ${product.price}
                      </span>
                      <span className="text-base text-[#23856d] font-bold">
                        ${product.discountPercentage}
                      </span>
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BestSeller;
