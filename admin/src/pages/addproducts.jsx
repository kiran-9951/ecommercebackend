import React, { useState } from 'react';
import upload from "../assets/upload_area.svg";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Addproducts = () => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "women",
  });

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("category", data.category);

    try {
      const response = await axios.post("http://localhost:2020/api/products/addproducts", formData);
      console.log(response);

      if (response.status === 201) {
          toast.success(response.data.message || "Product added successfully!");
          setData({
          name: "",
          description: "",
          price: "",
          category: "women", 
        });
        setImage(null); 

      } else {
        toast.error(response.data.message || "Failed to add product.");
      }
    } catch (error) {
      console.error("There was an error uploading the product:", error);
      toast.error("An error occurred while adding the product.");
    }
  };

  return (
    <>
      <ToastContainer />

      <section className='p-4 sm:p-10 w-full bg-primary/20'>
        <form onSubmit={submitHandler} className='flex flex-col gap-y-5 max-w-[555px]'>
          <h4 className='bold-22 pb-2 uppercase'>Products Upload</h4>
          <div className='flex flex-col gap-y-2 max-w-24 h-24'>
            <p>Upload Image</p>
            <label htmlFor='image'>
              <img src={image ? URL.createObjectURL(image) : upload} alt="upload" className='h-20' />
            </label>
            <input
              type='file'
              onChange={(event) => setImage(event.target.files[0])}
              id='image'
              hidden
              required
            />
          </div>
          <div className='flex flex-col gap-y-2'>
            <p>Product Name</p>
            <input
              type='text'
              name='name'
              value={data.name}
              onChange={inputHandler}
              id='name'
              required
              placeholder='Type here...'
              className='ring-1 ring-slate-900/10 py-1 px-3 outline-none'
            />
          </div>
          <div className='flex flex-col gap-y-2'>
            <p>Product Description</p>
            <textarea
              name='description'
              value={data.description}
              onChange={inputHandler}
              rows={"6"}
              placeholder='Write content here...'
              className='ring-1 ring-slate-900/10 py-1 px-3 outline-none resize-none'
              required
            ></textarea>
          </div>
          <div className='flex items-center gap-x-6 text-gray-900/70 medium-15'>
            <p>Product Category</p>
            <select
              name='category'
              value={data.category}
              onChange={inputHandler}
              className='outline-none ring-1 ring-slate-900/10 pl-2'
            >
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="kids">Kids</option>
              <option value="unisex">Unisex</option>
            </select>
          </div>
          <div className='flex flex-col gap-y-2'>
            <p>Product Price</p>
            <input
              type='number'
              name='price'
              value={data.price}
              onChange={inputHandler}
              className='ring-1 ring-slate-900/10 pl-2 w-24 outline-none'
              placeholder='$20'
              required
            />
          </div>
          <button type='submit' className='btn-dark sm:w-5/12 flexcenter gap-x-2 ~py-2 rounded'>
            Submit
          </button>
        </form>
      </section>
    </>
  );
};

export default Addproducts;
