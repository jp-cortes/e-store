
import Link from "next/link";
import { Footer } from "../../components";
import { Navbar } from "../../components";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";



export default function PaymentCanceled() {
  return (
    <>
      <Navbar />
      <div className="grid w-full justify-center text-center ">
        <div className="w-[310px] mt-14 p-5 h-[350px] lg:w-[700px] m-auto bg-gray-300 lg:mt-16 rounded-xl flex justify-center items-center flex-col">
        <h1 className="text-2xl font-semibold my-11">
        The Payment was cancelled
        </h1>
        <div className="grid justify-center px-5 lg:px-10 w-[300px] md:w-[600px] lg:w-full">
        <p className="self-center mx-auto mb-3">
        <ShoppingBagIcon className=" h-20 w-20" />
        </p>
        <Link href="/">
          <button type="button" className="flex justify-around w-52 p-4 rounded-xl bg-buttonGreen text-white hover:bg-hoverGreen font-medium">
            Back to Home Page
          </button>
        </Link>
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
