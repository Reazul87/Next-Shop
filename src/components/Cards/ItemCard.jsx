// import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";

export const ItemCard = ({ item }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full">
      {/* Image Section */}
      <div className="relative aspect-4/3 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <div className="bg-white/90 backdrop-blur-md text-gray-900 text-xs font-bold px-2.5 py-1 rounded-lg shadow-sm flex items-center gap-1">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            {item.rating}
          </div>
        </div>

        {item.stock <= 10 && (
          <div className="absolute top-3 right-3 bg-red-500 text-white text-[10px] uppercase tracking-wider font-black px-2.5 py-1 rounded-lg shadow-lg">
            Limited Stock
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-2.5 flex flex-col grow">
        <div className="flex justify-between items-start mb-2">
          <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">
            {item.category}
          </span>
          <span className="text-lg font-bold text-gray-900">${item.price}</span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors mb-2 line-clamp-1">
          {item.name}
        </h3>

        <p className="text-sm text-gray-500 line-clamp-2 mb-6 grow">
          {item.description}
        </p>

        {/* Action Button */}
        <Link
          href={`/items/${item._id}`}
          className="relative flex items-center justify-center gap-2 w-full bg-gray-900 text-white py-3.5 rounded-xl font-bold text-sm overflow-hidden transition-all active:scale-95 hover:bg-purple-600"
        >
          View Details
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
