'use client'
import { useFetch } from "../../hooks/infiniteQuery";
import { getAllProducts } from "../../services";
import { CardDashboard, DeleteProduct } from "./";
import Link from "next/link";


async function fetchProducts(page: number) {
  const products = await getAllProducts();
  return products.slice((page - 1) * 9, page * 9)
}

export function ModifyProductsMobile() {

  const { data, isLoading, ref, refetch } = useFetch({ query: ['modify_products'], queryFunction: fetchProducts })
  const  products = data?.pages.flatMap((product: Products) => product);


  return (
    
    <div className="md:hidden lg:hidden flex flex-col justify-center">
            {products?.map((product, i) => (
              <div key={product.id}>
                <CardDashboard  product={product} />
                <div className="w-[280px] flex justify-between content-center">
                  <Link
                    href={`/dashboard/edit/${product.id}`}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    Edit
                  </Link>

                  <p className=" relative text-sm font-medium">
                    <DeleteProduct product={product} refetch={refetch}/>
                  </p>
                </div>
                {i === products.length - 1 && <div ref={ref} />}
              </div>
            ))}
          </div>
  )
}
