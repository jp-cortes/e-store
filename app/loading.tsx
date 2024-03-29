'use client'
import { BallTriangle } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="w-auto h-auto overflow-visible grid justify-center">
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#00677F"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
    </div>
  );
}
