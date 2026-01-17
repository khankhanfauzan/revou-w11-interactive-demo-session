'use client'

import Image from "next/image";
import ProductCard from "./components/ProductCard";

import { useState, useEffect } from 'react';

export default function Home() {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(res => res.json())
      .then(data => {


        setProducts(data);
        setLoading(false);
        console.log("data:", data)




      })
      .catch(err => {
        console.error("Gagal ambil foto:", err)
      })
  }, [])


  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">




        {
          loading ? <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
            :
            <div>
              {products.map((product) => (<div key={product.id}>
                <ProductCard product={product} />
              </div>))}
            </div>}
        {/* <ProductCard products={products} /> */}
      </main>
    </div>
  );
}
