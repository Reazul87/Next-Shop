export const ItemSkeleton = () => {
  return (
    <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 flex flex-col h-full animate-pulse">
      {/* Image Placeholder */}
      <div className="aspect-[4/3] bg-gray-200" />

      {/* Content Placeholder */}
      <div className="p-2.5 flex flex-col flex-grow">
        <div className="flex justify-between mb-4">
          <div className="h-3 w-16 bg-gray-200 rounded" />
          <div className="h-4 w-12 bg-gray-200 rounded" />
        </div>

        <div className="h-6 w-3/4 bg-gray-200 rounded mb-3" />
        <div className="space-y-2 mb-6">
          <div className="h-3 w-full bg-gray-200 rounded" />
          <div className="h-3 w-5/6 bg-gray-200 rounded" />
        </div>

        {/* Button Placeholder */}
        <div className="h-12 w-full bg-gray-200 rounded-xl mt-auto" />
      </div>
    </div>
  );
};

// export default function ItemGrid({ items, isLoading }) {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//       {isLoading
//         ? Array(8)
//             .fill(0)
//             .map((_, i) => <ItemSkeleton key={i} />)
//         : items.map((item) => <ItemCard key={item.id} item={item} />)}
//     </div>
//   );
// }
