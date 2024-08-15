export default function Counter({ numberOfPackedItems, totalNumberOfItems }) {
  return (
    <p>
      <b>{numberOfPackedItems}</b> / {totalNumberOfItems} items packed
    </p>
  );
}
