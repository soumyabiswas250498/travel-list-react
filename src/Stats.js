export function Stats({ items }) {
  const numItems = items.length;
  const packedItems = items.filter(item => item.packed).length;
  if (!numItems) {
    return (
      <p className="stats">Start adding some items in your packing list</p>
    );
  }
  return (
    <footer className="stats">
      <em>
        {numItems === packedItems
          ? 'You have packed everything! Now you are ready to go ✈️'
          : `You have ${numItems} items on your list, and you already packed ${packedItems}`}
      </em>
    </footer>
  );
}
