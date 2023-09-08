"use client"
import Hero from "@/components/Hero";
import Sppiner from "@/components/Sppiner";
import DesignCard from "@/components/designSection/DesignCard";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [isLoading , setLoading] = useState(true)
  useEffect(() => { 
    try {
      
      fetch('/api/design')
        .then((res) => res.json())
        .then(data => {
          setData(data?.data);
          setLoading(false)
      })
    } catch (error) {
      alert(error.message)
      setLoading(false)
    }
  }, [])
  
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
        <p className="text-lg text-center mt-2">Explore Our Tranding Design And Download Free</p>

        <div className="grid md:grid-cols-3 gap-3 mt-8">


          {/* */}

          {
            data && data.map((design) => <DesignCard data={design}></DesignCard> )
          }
     
        </div>
      </section>
    </main>
  );
}
