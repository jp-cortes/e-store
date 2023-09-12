'use client'
import { BallTriangle } from "react-loader-spinner";

export function Loader() {
  return (
    <div className="w-full h-full grid content-center justify-center">
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
