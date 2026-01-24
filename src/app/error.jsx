// "use client";
// import Link from "next/link";
// import React from "react";
// import { MdOutlineReportGmailerrorred } from "react-icons/md";

// const GlobalError = () => {
//   return (
//     <div className="min-h-[calc(100vh-291px)] flex flex-col justify-center items-center gap-5">
//       <MdOutlineReportGmailerrorred size={56} />
//       <h2 className="text-md sm:text-lg md:text-4xl font-medium">Something When Wrong</h2>
//       <Link href={"/"} className="btn btn-md md:btn-lg btn-primary btn-outline">
//         Go Back
//       </Link>
//     </div>
//   );
// };

// export default GlobalError;

"use client";

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <h2 className="text-2xl font-bold text-red-600 mb-2">
        Something went wrong!
      </h2>

      <p className="text-gray-600 mb-4">
        {error?.message || "Unexpected error occurred"}
      </p>

      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Try Again
      </button>
    </div>
  );
}
