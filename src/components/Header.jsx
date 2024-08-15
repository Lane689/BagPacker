import { useItemsStore } from "../stores/itemsStore";
import Counter from "./Counter";
import Logo from "./Logo";

export default function Header() {
  const items = useItemsStore((state) => state.items);
  return (
    <header>
      <Logo />
      <Counter
        numberOfPackedItems={items.filter((item) => item.packed).length}
        totalNumberOfItems={items.length}
      />
    </header>
  );
}
