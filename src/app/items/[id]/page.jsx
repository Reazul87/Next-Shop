import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  ArrowLeft,
  Star,
  Package,
  Truck,
  Shield,
  RefreshCw,
} from "lucide-react";
import Link from "next/link";
import { getSingleItem } from "@/actions/server/items";
import Image from "next/image";
import ButtonClick from "@/components/buttons/ButtonClick";

export default async function ItemDetails({ params }) {
  const { id } = await params;
  // const item = await getSingleItem(id);
  const res = await fetch(`${process.env.YOUR_DOMAIN}/api/items/${id}`, {
    cache: "no-store",
  });
  const { item } = await res.json();

  if (!item) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            No item selected
          </h2>
          <Link href={"/items"}>
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Items
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Link
          href={"/items"}
          className="inline-flex items-center font-medium text-indigo-600 hover:text-indigo-800 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to all items
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.name}
                  height={180}
                  width={300}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Package className="h-32 w-32 text-gray-300" />
                </div>
              )}
            </div>
            {item.featured && (
              <Badge className="absolute top-4 left-4 bg-indigo-600 text-lg py-1 px-3">
                <Star className="h-4 w-4 mr-1 fill-current" />
                Featured
              </Badge>
            )}
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              {item.category && (
                <Badge variant="secondary" className="mb-3 capitalize">
                  {item.category.replace("_", " ")}
                </Badge>
              )}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {item.name}
              </h1>
              <p className="text-4xl font-bold text-indigo-600">
                ${item.price?.toFixed(2)}
              </p>
            </div>

            {item.stock !== undefined && (
              <div>
                {item.stock > 10 ? (
                  <p className="text-green-600 font-medium">
                    ✓ In Stock ({item.stock} available)
                  </p>
                ) : item.stock > 0 ? (
                  <p className="text-orange-600 font-medium">
                    ⚠ Only {item.stock} left in stock
                  </p>
                ) : (
                  <p className="text-red-600 font-medium">✗ Out of Stock</p>
                )}
              </div>
            )}

            <div className="border-t border-b py-6">
              <h2 className="font-semibold text-gray-900 mb-3">Description</h2>
              <p className="text-gray-600 leading-relaxed">
                {item.description ||
                  "No description available for this product."}
              </p>
            </div>

            <ButtonClick item={item}></ButtonClick>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div className="flex items-center gap-3 text-gray-600">
                <Truck className="h-5 w-5 text-indigo-600" />
                <span className="text-sm">Free Shipping</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Shield className="h-5 w-5 text-indigo-600" />
                <span className="text-sm">Secure Payment</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <RefreshCw className="h-5 w-5 text-indigo-600" />
                <span className="text-sm">Easy Returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
