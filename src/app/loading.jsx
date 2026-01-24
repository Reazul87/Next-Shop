// import React from "react";

// const GlobalLoading = () => {
//   return (
//     <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/30 backdrop-blur-sm">
//       <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-blue-500" />
//     </div>
//   );
// };

// export default GlobalLoading;
export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-blue-600" />
    </div>
  );
}
