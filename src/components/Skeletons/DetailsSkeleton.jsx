"use client";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const ItemDetailsSkeleton = () => {
  return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb Skeleton */}
        <div className="inline-flex items-center font-medium text-indigo-600 mb-8">
          <Skeleton className="h-4 w-40" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Image Skeleton */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
              <Skeleton className="w-full h-full" />
            </div>
            <Skeleton className="absolute top-4 left-4 h-6 w-24" />
          </div>

          {/* Details Skeleton */}
          <div className="space-y-6">
            {/* Category & Name Skeleton */}
            <div>
              <Skeleton className="h-6 w-32 mb-3" />
              <Skeleton className="h-10 w-3/4 mb-4" />
              <Skeleton className="h-10 w-24" />
            </div>

            {/* Stock Skeleton */}
            <div>
              <Skeleton className="h-5 w-40" />
            </div>

            {/* Description Skeleton */}
            <div className="border-t border-b py-6 space-y-2">
              <Skeleton className="h-6 w-40 mb-2" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-2/3" />
            </div>

            {/* Add to Cart Button Skeleton */}
            <Skeleton className="h-12 w-full md:w-48 rounded-md" />

            {/* Features Skeleton */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-5 w-28" />
              <Skeleton className="h-5 w-28" />
            </div>
          </div>
        </div>
      </div>
  );
};

export default ItemDetailsSkeleton;
