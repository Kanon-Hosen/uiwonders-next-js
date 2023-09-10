"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CldUploadWidget } from "next-cloudinary";

function AddDesign() {
  const [results, setResult] = useState([]);

  const handlePost = (e) => {
    e.preventDefault();
    const name = e.target.title.value;
    const authorName = e.target.authorName.value;
    const category = e.target.category.value;
    const downloadLink = e.target.downloadLink.value;
    const data = { name, authorName, downloadLink, category, images: results };
    try {
      fetch("/api/design", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then(() => {
          alert("post success");
          e.target.reset();
        });
    } catch (error) {
      e.target.reset();
      alert(error.message);
    }
  };
  console.log(results);
  return (
    <div className="p-4">
      <h1 className="font-bold text-black">Add Design</h1>

      <form onSubmit={handlePost} className="mt-5 flex flex-col gap-4">
        <div className="grid md:grid-cols-3 gap-3">
          {results?.map((r, i) => {
            return (
              <div className="w-[200px] h-[200px]" key={i}>
                <Image
                  className="w-full h-full object-cover border rounded-lg"
                  width={200}
                  height={200}
                  src={r}
                  alt="image"
                />
              </div>
            );
          })}
        </div>

        <div className="w-full">
          <CldUploadWidget
            onUpload={(result, widget) => {
              widget.close();
              setResult([...results, result?.info.secure_url]);
            }}
            uploadPreset="uiwonders"
          >
            {({ open }) => {
              function handleOnClick(e) {
                e.preventDefault();
                open();
              }
              return (
                <button
                  className="button bg-blue-500 px-6 py-3 rounded-lg text-white"
                  onClick={handleOnClick}
                >
                  Upload an Image
                </button>
              );
            }}
          </CldUploadWidget>
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="font-semibold text-lg">
            Design name
          </label>
          <input
            required
            type="text"
            name="title"
            placeholder="Enter your design name..."
            className="p-2 border-2 border-black placeholder-black mt-1"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="font-semibold text-lg">
            Design Category
          </label>
          <select
            name="category"
            id=""
            required
            className="p-2 border-2 border-black placeholder-black mt-1"
          >
            <option value="Web">Web</option>
            <option value="Mobile">Mobile</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="font-semibold text-lg" htmlFor="">
            Author name
          </label>
          <input
            required
            name="authorName"
            className="p-2 border-2 border-black placeholder-black mt-1"
            type="text"
            placeholder="Enter your author name..."
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold text-lg" htmlFor="">
            Download link
          </label>
          <input
            required
            name="downloadLink"
            className="p-2 border-2 border-black placeholder-black mt-1"
            type="text"
            placeholder="Dowload link..."
          />
        </div>
        <button className="w-40 bg-blue-500 py-3 rounded-md text-white font-semibold mt-2">
          Post Design
        </button>
      </form>
    </div>
  );
}

export default AddDesign;
