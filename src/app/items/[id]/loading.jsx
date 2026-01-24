import ItemDetailsSkeleton from "@/components/Skeletons/DetailsSkeleton";
import React from "react";

const loading = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <ItemDetailsSkeleton></ItemDetailsSkeleton>
    </div>
  );
};

export default loading;
