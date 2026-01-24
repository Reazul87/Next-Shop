import Image from "next/image";
import { Star, Package, ShieldCheck, Truck, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const ItemDetailsCard = ({ item }) => {
  // console.log(item);
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
      {/* Back Button */}
      <Link
        href="/items"
        className="inline-flex items-center gap-2 text-gray-500 hover:text-indigo-600 mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Collection
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left: Image Gallery */}
        <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gray-100">
          <Image
            src={item.image}
            alt={item.name}
            fill
            priority
            className="object-cover"
          />
          {item.stock <= 5 && (
            <div className="absolute top-6 left-6 bg-red-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-bounce">
              Only {item.stock} left in stock!
            </div>
          )}
        </div>

        {/* Right: Content */}
        <div className="flex flex-col">
          <span className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4">
            {item.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            {item.name}
          </h1>

          <div className="flex items-center gap-6 mb-8">
            <div className="flex items-center gap-2 bg-yellow-100 px-3 py-1.5 rounded-lg">
              <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
              <span className="font-bold text-yellow-700">{item.rating}</span>
            </div>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600 font-medium">
              {item.stock} items available
            </span>
          </div>

          <div className="text-4xl font-black text-indigo-700 mb-8">
            ${item.price}
          </div>

          <p className="text-xl text-gray-600 leading-relaxed mb-10 border-l-4 border-indigo-500 pl-6">
            {item.description}
          </p>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-8 border-y border-gray-100 mb-10">
            <div className="flex items-center gap-3 text-sm font-semibold text-gray-700">
              <Truck className="text-indigo-600 w-5 h-5" /> Fast Shipping
            </div>
            <div className="flex items-center gap-3 text-sm font-semibold text-gray-700">
              <ShieldCheck className="text-indigo-600 w-5 h-5" /> 1 Year
              Warranty
            </div>
            <div className="flex items-center gap-3 text-sm font-semibold text-gray-700">
              <Package className="text-indigo-600 w-5 h-5" /> Easy Returns
            </div>
          </div>

          <button className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-bold text-xl hover:bg-indigo-700 transition-all active:scale-95 shadow-xl shadow-indigo-200">
            Add to Shopping Cart
          </button>
        </div>
      </div>
    </div>
  );
};
