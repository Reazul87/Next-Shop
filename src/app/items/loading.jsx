import { ItemSkeleton } from "@/components/Skeletons/ItemSkeleton";
import React from "react";

const loading = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-5 md:p-8">
      {Array(8)
        .fill(null)
        .map((_, index) => (
          <ItemSkeleton key={index}></ItemSkeleton>
        ))}
    </div>
  );
};

export default loading;
