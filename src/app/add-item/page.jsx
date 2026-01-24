import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import AddItemForm from "@/components/AddItemForm";

export default async function AddItemPage() {
  const session = await getServerSession(authOptions);

  // extra safety (middleware already handles this)
  if (!session) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Add New Item</h1>
      <AddItemForm />
    </div>
  );
}
