'use client'
import { ThreeDots } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="w-full h-full grid place-content-center">
      <div>
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#4fa94d"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </div>
  );
}
