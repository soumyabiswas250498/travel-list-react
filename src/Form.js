import { useState } from 'react';

function Form({ onAddItems }) {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);
  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      description: description,
      quantity: quantity,
      packed: false,
      id: Date.now(),
    };
    onAddItems(newItem);
    // initialItems.push(newItem);
  }
  return (
    <form className="add-form" onSubmit={e => handleSubmit(e)}>
      <h3>What do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={e => {
          setQuantity(parseInt(e.target.value));
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
        {/* <option value={1}>1</option> */}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={e => {
          setDescription(e.target.value);
        }}
      ></input>
      <button>Add</button>
    </form>
  );
}

export default Form;
