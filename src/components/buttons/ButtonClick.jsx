"use client";
import { ShoppingCart } from "lucide-react";
import { toast } from "react-toastify";

const ButtonClick = ({ item }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        toast.success("Successfully Added");
      }}
      className="btn btn-primary btn-outline cursor-pointer"
      disabled={item.stock === 0}
    >
      <ShoppingCart className="h-5 w-5 mr-2" />
      {item.stock === 0 ? "Out of Stock" : "Add to Cart"}
    </button>
  );
};

export default ButtonClick;
