import Header from "./Header"
import SearchItem from "./SearchItem.jsx";
import AddItem from "./AddItem.jsx";
import Content from "./Content.jsx"
import Footer from "./Footer.jsx"
import { useState } from "react";
import { useEffect } from "react";

// we want to show how many items we have in our footer, footer have to access content. We can use {useContext}, we'll learn that later but here we'll learn props drilling. We cannot access Content directly from Footer, so From App we will pass props to Content and Footer.


function App() {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem("shoppingList")) || []);  // we are getting items from our local storage. Now, even when we refresh the page, we'll see the same previous items.
  // we are adding || [], because if we don't have anything in our local storage, then error will occur, having empty array [] will helps us to add items. 

  const [newItem, setNewItem] = useState("");

  const [search, setSearch] = useState("");

  useEffect(() => {   // when items changes, we'll save it to local storage.

    localStorage.setItem('shoppingList', JSON.stringify(items));

  }, [items]);

  function addItem (item) {
    // we need id, checked and item property

    const id = items.length ? items[items.length - 1].id + 1 : 1;
        //we are taking last item's id and adding 1, to add new item.
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);

  }

  function handleCheck (id) {
      const listItems = items.map((item) => item.id === id ? {
          ...item, checked: !item.checked } : item);

      setItems(listItems);

  }

  function handleDelete (id) {
      const listItems = items.filter((item) => item.id !== id);
      setItems(listItems);
    
  }

  function handleSubmit (e) {

    e.preventDefault();  // so, it won't reload the page.

    if(!newItem) return;

    addItem(newItem);

    setNewItem("");  // so, after submitting we will have empty input.

  }

  return (
    <div className="app">
        <Header title="Groceries:"/>

        <AddItem
                newItem ={newItem}
                setNewItem={setNewItem}
                handleSubmit={handleSubmit}/>

        <SearchItem
                search={search}
                setSearch={setSearch}/>

        <Content items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}

                  handleCheck={handleCheck}
                    handleDelete={handleDelete}/> 
        <Footer length={items.length}/>     
    </div>
  )
}

export default App
