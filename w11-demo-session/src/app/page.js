'use client'

import Loadings from "./components/Loadings";
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
        console.error("Gagal ambil products:", err)
      })
  }, [])

  if (loading) {
    return <Loadings />
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-7xl flex-col items-center justify-between py-32 px-4 sm:px-8 md:px-16 bg-white dark:bg-black sm:items-start">
        {
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
            {products.map((product) => (<div key={product.id}>
              <ProductCard product={product} />
            </div>))}
          </div>}
      </main>
    </div>
  );
}
