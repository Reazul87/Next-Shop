import { getItems } from "@/actions/server/items";
import ItemsPage from "@/components/ItemsPage";

const Items = async () => {
  // const items = await getItems();
  const res = await fetch(`${process.env.YOUR_DOMAIN}/api/items`, {
    cache: "no-store",
  });
    const {items} = await res.json();
  return (
    <div>
      <ItemsPage items={items}></ItemsPage>
    </div>
  );
};

export default Items;
