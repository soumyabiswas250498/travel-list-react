import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import { Stats } from "./Stats";

function App() {
  const [items, setItems] = useState([]);

  function AddItemsHandler(item) {
    setItems((items) => [...items, item]);
  }
  function DeleteHandler(id) {
    setItems((item) => item.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    setItems([]);
  }
  return (
    <>
      <Logo />
      <Form onAddItems={AddItemsHandler} />
      <PackingList
        items={items}
        onDelete={DeleteHandler}
        onToggle={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </>
  );
}

export default App;
