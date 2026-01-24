"use client";
import React, { useState, useMemo } from "react";
import { Search, Filter, ChevronDown } from "lucide-react";
import { ItemCard } from "./Cards/ItemCard";

export const ItemsPage = ({ items = [] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const categories = useMemo(() => {
    const unique = [
      "All Categories",
      ...new Set(items.map((item) => item.category)),
    ];
    return unique;
  }, [items]);

  const filteredProducts = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch = item.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All Categories" ||
        item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, items, selectedCategory]);

  return (
    <div className="bg-white p-4 md:p-6">
      <div className="mb-7 flex flex-col justify-center items-center">
        <h2 className="text-center text-3xl font-bold">All Products</h2>
        <p className='text-center'>Browse our complete collection of amazing products</p>
      </div>
      {/* Header Section: Search & Filters */}
      <div className="flex flex-col md:flex-row gap-2.5 mb-4 items-center justify-between">
        {/* Search Input */}
        <div className="relative w-full md:w-1/4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 text-black"
          />
        </div>

        <div className="relative w-full md:w-48 group">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="appearance-none w-full px-4 py-2 pl-10 border border-gray-200 rounded-md focus:outline-none cursor-pointer text-black"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
        </div>
      </div>

      {/* Product Count */}
      <div className="mb-6 text-gray-500">
        Showing {filteredProducts.length} products
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredProducts.map((item) => (
            <ItemCard key={item._id} item={item} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-400">
          No products found with that name or category.
        </div>
      )}
    </div>
  );
};

export default ItemsPage;
