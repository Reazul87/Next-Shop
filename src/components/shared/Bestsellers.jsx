import Image from "next/image";
import Link from "next/link";

export default async function Bestsellers() {
  const res = await fetch(`${process.env.YOUR_DOMAIN}/api/items`, {
    cache: "no-store",
  });
  const { items = [] } = await res.json();
  const bestItems = items.filter((item) => item.rating >= 4.7).slice(0, 4);

  return (
    <section
      id="bestsellers"
      className="py-8 md:py-10  bg-linear-to-r from-indigo-50 to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-extrabold">
            🔥 Best Sellers
          </h2>
          <p className="mt-4 text-md md:text-base text-gray-600 max-w-3xl mx-auto">
            Our customers&apos; most loved products — highest rated & most
            popular right now!
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {bestItems.map((item) => (
            <div
              key={item._id}
              className="
                group bg-white rounded-2xl overflow-hidden 
                shadow-md hover:shadow-2xl transition-all duration-300 
                border border-gray-100 flex flex-col h-full
              "
            >
              {/* Image */}
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={item.image}
                  alt={`${item.name} - ${item.category}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Rating badge */}
                <div className="absolute top-3 left-3 bg-yellow-400 text-yellow-900 text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
                  ★ {item.rating.toFixed(1)}
                </div>

                {/* Low stock badge */}
                {item.stock <= 10 && (
                  <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    Low Stock
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-2.5 flex flex-col grow">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-700 transition-colors line-clamp-2 mb-2">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-600 mb-4 line-clamp-2 grow">
                  {item.description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <p className="text-2xl font-bold text-indigo-700">
                    ${item.price}
                  </p>

                  <Link
                    href={`/items/${item._id}`}
                    className="font-medium btn btn-primary btn-outline"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See all link */}
        <div className="mt-4 md:mt-8 text-center">
          <Link href="/items" className="btn btn-error btn-outline">
            View All →
          </Link>
        </div>
      </div>
    </section>
  );
}
