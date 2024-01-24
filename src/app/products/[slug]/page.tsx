"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Breadcrumb from "@/componenets/Breadcrumb";
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { TfiAngleRight } from "react-icons/tfi";
import MoreInfo from "@/componenets/MoreInfo";
import BestSeller from "@/componenets/RelatedProducts";
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

const availabelColors = [
  { color: "red", value: "#ff0000" },
  { color: "blue", value: "#0000ff" },
  { color: "green", value: "#00ff00" },
  { color: "yellow", value: "#ffff00" },
  { color: "black", value: "#000000" },
  { color: "white", value: "#ffffff" },
];

const page = () => {
  const slug = usePathname();
  const id = slug.split("/").pop();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>("");

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };
  const loadProduct = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data: Product = await response.json();
      console.log("Product:", data);
      setProduct(data);
      setSelectedImage(data.images[0]);
    } catch (error) {
      console.error("Error fetching product:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadProduct();
  }, []);

  const breadcrumb = [
    { label: "Home", link: "/" },
    { label: "Products", link: "/products" },
    { label: product?.title, link: `/products/${product?.id}` },
  ];

  const handleNextImage = (product: Product) => {
    const currentIndex = product?.images.indexOf(selectedImage);
    if (
      currentIndex !== undefined &&
      currentIndex < product?.images.length - 1
    ) {
      setSelectedImage(product?.images[currentIndex + 1]);
    }
  };

  const handlePrevImage = (product: Product) => {
    const currentIndex = product?.images.indexOf(selectedImage);
    if (currentIndex !== undefined && currentIndex > 0) {
      setSelectedImage(product?.images[currentIndex - 1]);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center ">
      {!loading && (
        <div className="w-4/5 h-full bg-[#Fafafa]">
          <div className="w-full h-[58px] flex items-center">
            <Breadcrumb items={breadcrumb.map((item) => item.label ?? "")} />
          </div>

          <div className=" flex flex-col md:flex-row justify-center items-start gap-8 mt-8 h-full">
            {/* Column 1: Images */}
            <div className="flex relative flex-col flex-1">
              {/* Big Image */}

              <div className="w-[500px] h-[450px] mb-4">
                <img
                  src={selectedImage ?? product?.thumbnail}
                  alt={product?.title}
                  className="w-full h-full"
                />
              </div>
              {/* Angle brackets to move forward and backward */}
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-[500px]">
                <button
                  className="text-3xl text-white p-2"
                  onClick={() => product && handlePrevImage(product)}
                >
                  <TfiAngleRight className="transform rotate-180" />
                </button>
                <button
                  className="text-3xl text-white p-2"
                  onClick={() => product && handleNextImage(product)}
                >
                  <TfiAngleRight />
                </button>
              </div>

              {/* Image Options */}
              <div className="flex  gap-2">
                {product?.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={product.title}
                    className="w-20 h-20 cursor-pointer border border-gray-300"
                    onClick={() => handleImageClick(image)}
                  />
                ))}
              </div>
            </div>

            {/* Column 2: Text */}
            <div className="flex flex-col flex-1 h-full gap-10">
              <div className="flex flex-col gap-2">
                <h2 className="text-xl mb-2">{product?.title}</h2>
                <div className="flex gap-2 items-center mb-5">
                  <BsStarFill className="text-[#F3CD03] w-5 h-5" />
                  <BsStarFill className="text-[#F3CD03] w-5 h-5" />
                  <BsStarFill className="text-[#F3CD03] w-5 h-5" />
                  <BsStarFill className="text-[#F3CD03] w-5 h-5" />
                  <BsStar className="text-[#F3CD03] w-5 h-5" />
                  <p className="text-sm text-gray-500">10 Reviews</p>
                </div>
                <p className="text-2xl font-bold mb-2">${product?.price}</p>

                <p className="text-sm text-gray-500 font-bold">
                  Availabilty:{" "}
                  <span className="text-sm font-bold text-secondary-blue">
                    In Stock
                  </span>
                </p>
                <p className="text-sm text-gray-500">Brand: {product?.brand}</p>
              </div>
              <div className="flex flex-col gap-4">
                <hr className="w-full text-gray-300" />
                <div className="flex gap-4">
                  {availabelColors.map((color, index) => (
                    <div
                      key={index}
                      className="w-[30px] h-[30px] rounded-full cursor-pointer"
                      style={{ backgroundColor: color.value }}
                    ></div>
                  ))}
                </div>
                <div className="flex gap-4 items-center">
                  {/*  button select options */}
                  <button className="w-2/5 h-12 bg-secondary-blue text-white font-bold text-sm rounded-md">
                    Buy Now
                  </button>
                  <IoHeartOutline className="w-8 h-8 text-tertiary-text" />
                  <IoCartOutline className="w-8 h-8 text-tertiary-text" />
                  <IoEyeOutline className="w-8 h-8 text-tertiary-text" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {!loading && (
        <div className="w-full h-full bg-white">
          <MoreInfo />
        </div>
      )}
      {loading && (
        <div className="w-full h-full flex justify-center items-center">
          <p className="text-2xl font-bold text-primary-text">Loading...</p>
        </div>
      )}
      {!loading && (
        <div className="w-full h-full flex justify-center  bg-[#fafafa]">
          <div className="flex flex-col  items-center w-4/5 gap-12 mt-8">
            <BestSeller />

            <div className="flex flex-col md:flex-row w-full justify-between items-center">
              <img src="../images/fa-brands-1.png" alt="brand 1" />
              <img src="../images/fa-brands-2.png" alt="brand 2" />
              <img src="../images/fa-brands-3.png" alt="brand 3" />
              <img src="../images/fa-brands-4.png" alt="brand 4" />
              <img src="../images/fa-brands-5.png" alt="brand 5" />
              <img src="../images/fa-brands-6.png" alt="brand 6" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
