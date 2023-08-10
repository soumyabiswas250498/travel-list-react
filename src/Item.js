export function Item({ obj, onDelete, onToggle }) {
  return (
    <li>
      <input
        type="checkbox"
        value={obj.packed}
        onChange={() => onToggle(obj.id)}
      />
      <span style={obj.packed ? { textDecoration: 'line-through' } : {}}>
        {obj.quantity} {obj.description}
      </span>
      {/* <button onClick={onDelete(obj.id)}>❌</button> */}
      <button onClick={() => onDelete(obj.id)}>❌</button>
    </li>
  );
}
