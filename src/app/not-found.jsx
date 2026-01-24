// import { MdOutlineReportGmailerrorred } from "react-icons/md";
// import Link from "next/link";
// import React from "react";

// const ErrorPage = () => {
//   return (
//     <div className="min-h-[calc(100vh-291px)] flex flex-col justify-center items-center gap-5">
//       <MdOutlineReportGmailerrorred size={56} />
//       <h2 className="text-4xl font-medium">Page Not Found</h2>
//       <Link href={"/"} className="btn btn-primary btn-outline">
//         Go Back
//       </Link>
//     </div>
//   );
// };

// export default ErrorPage;

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="mb-6 text-gray-600">Page not found</p>
      <Link href="/" className="px-4 py-2 bg-blue-600 text-white rounded">
        Go Home
      </Link>
    </div>
  );
}
