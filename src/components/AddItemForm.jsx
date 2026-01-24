"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function AddItemForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    // console.log(formData);

    const payload = {
      name: formData.get("name"),
      price: Number(formData.get("price")),
      image:
        formData.get("image") ||
        "https://i.pinimg.com/1200x/9d/c1/03/9dc1031a043b41738e1c747fd04b203f.jpg",
      category: formData.get("category"),
      stock: Number(formData.get("stock")),
      description: formData.get("description"),
    };
    // console.log(payload);

    const res = await fetch(`${process.env.YOUR_DOMAIN}/api/items`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setLoading(false);

    if (res.ok) {
      toast.success("Item added successfully!");
      router.push("/items");
    } else {
      toast.error("Failed to add item");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Input name="name" placeholder="Item Name" required />
      <Input name="price" type="number" placeholder="Price" required />
      <Input name="image" placeholder="Image URL" />
      <Input name="category" placeholder="Category" />
      <Input name="stock" type="number" placeholder="Stock Quantity" />
      <Textarea name="description" placeholder="Item Description" />

      <Button disabled={loading}>{loading ? "Adding..." : "Add Item"}</Button>
    </form>
  );
}
