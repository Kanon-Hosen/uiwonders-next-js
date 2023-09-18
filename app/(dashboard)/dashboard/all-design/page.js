"use client";
import Sppiner from "@/components/Sppiner";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function page() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [category, setCategory] = useState("Web");
  const [refetch, setRefetch] = useState(true);

  //Fetch all design items
  useEffect(() => {
    try {
      fetch(`/api/design/category/${category} `)
        .then((res) => res.json())
        .then((data) => {
          setData(data?.data);
          setLoading(false);
        });
    } catch (error) {
      setLoading(false);
    }
  }, [category, refetch]);

  // Delelte design
  const handleDelete = (id) => {
    const isDelete = window.confirm('Are you sure you want to delete');
    if (isDelete) {
      try {
        fetch(`/api/design?id=${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            return setRefetch(!refetch)
          });
      } catch (error) {
        return alert(error.message);
      }
    }
    return
 }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <Sppiner />
      </div>
    );
  }
  return (
    <div className="p-4 w-full">
      <h1 className="font-bold text-black">All Design</h1>
      <div className="flex items-center justify-center">
        <div className="w-48 mt-5 rounded-full grid grid-cols-2 items-center text-white font-semibold gap-3 bg-slate-200 h-10">
          <p
            onClick={(e) => setCategory("Web")}
            className={`${
              category === "Web" &&
              "bg-gradient-to-r  to-blue-500 from-blue-800  text-white rounded-full"
            } text-black h-full flex items-center justify-center cursor-pointer rounded-full`}
          >
            Web
          </p>
          <p
            onClick={(e) => setCategory("Mobile")}
            className={`${
              category === "Mobile" &&
              "bg-gradient-to-r  to-blue-500 from-blue-800  text-white rounded-full"
            } text-black h-full flex items-center justify-center cursor-pointer rounded-full`}
          >
            Mobile
          </p>
        </div>
      </div>

      {data && (
        <div className="mt-6 ">
          {data?.map((design) => {
            return (
              <div className="w-full mt-3 flex gap-5">
                <Image
                  src={design?.images[0]}
                  alt={design?.name}
                  width={100}
                  height={100}
                  className="rounded-md"
                />
                <div className="flex flex-col gap-2 text-black">
                  <h1 className="font-semibold text-lg">{design?.name}</h1>
                  <p className="italic text-sm text-neutral-700">
                    Design by - {design?.authorName}
                  </p>
                </div>
                <div className="flex flex-col gap-2 ml-4 ">
                  <Link
                    className="bg-green-500 rounded px-3 py-1 text-white text-sm"
                    href="/"
                  >
                    Edit
                  </Link>
                  <button onClick={()=>handleDelete(design?._id)} className="bg-red-500 rounded px-3 py-1 text-white text-sm">
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default page;
