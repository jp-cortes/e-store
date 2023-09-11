'use client'
import { BallTriangle } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="w-full h-full grid place-content-center">
      <div>
        <BallTriangle
          height={100}
          width={100}
          radius={9}
          color="#00677F"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </div>
  );
}
