"use client"
import Hero from "@/components/Hero";
import Sppiner from "@/components/Sppiner";
import DesignCard from "@/components/designSection/DesignCard";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true)
  const [category, setCategory] = useState("Web")
  useEffect(() => { 
    try {
      
      fetch(`/api/design/category/${category} `)
        .then((res) => res.json())
        .then(data => {
          setData(data?.data);
          setLoading(false)
      })
    } catch (error) {
      setLoading(false)
    }
  }, [category])
  
  if (isLoading) {
    return <div className="flex items-center justify-center w-full h-screen"><Sppiner/></div>
  }
  
  return (
    <main>
      <Hero></Hero>

      <section className="md:px-8 px-6 z-20 mt-10 h-full">
        <h1 className="capitalize text-4xl z-40 text-black text-center font-bold ">
        Trending Designs
        </h1>
        <p className="md:text-lg text-center mt-2">Explore Our Tranding Design And Download Free</p>
        <div className="flex items-center justify-center">
        <div className="w-48 mt-5 rounded-full grid grid-cols-2 items-center text-white font-semibold gap-3 bg-slate-200 h-12">
          <p onClick={(e) => setCategory("Web")} className={`${category === "Web" && "bg-gradient-to-r  to-blue-500 from-blue-800  text-white rounded-full"} text-black h-full flex items-center justify-center cursor-pointer rounded-full`}>Web</p>
          <p onClick={(e) => setCategory("Mobile")}  className={`${category === "Mobile" && "bg-gradient-to-r  to-blue-500 from-blue-800  text-white rounded-full"} text-black h-full flex items-center justify-center cursor-pointer rounded-full`}>Mobile</p>
        </div>
    </div>

        <div className="grid md:grid-cols-3 gap-3 mt-8">
          {
            data && data.map((design) => <DesignCard data={design}></DesignCard> )
          }
     
        </div>
      </section>
    </main>
  );
}
