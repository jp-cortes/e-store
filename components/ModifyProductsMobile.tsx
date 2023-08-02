import { CardDashboard, DeleteProduct } from "./";
import Link from "next/link";


type Props = {
    products: Products;
}

export function ModifyProductsMobile({ products }: Props) {
  return (
    
    <div className="md:hidden lg:hidden flex flex-wrap justify-around">
            {products.map((product) => (
              <>
                <CardDashboard key={product.id} product={product} />
                <div className="w-[280px] flex justify-between content-center">
                  <Link
                    href={`/dashboard/edit/${product.id}`}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    Edit
                  </Link>

                  <p className=" relative text-sm font-medium">
                    <DeleteProduct product={product} />
                  </p>
                </div>
              </>
            ))}
          </div>
  )
}
