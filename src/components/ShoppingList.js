import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, addItem}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  }).filter((item)=>
  search === ""? true : item.name.toLowerCase().includes(search.toLowerCase())
  )

   function onSearchChange(e){
    
    const value = e.target.value;
    setSearch(value);
   
  } 

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={addItem}/>
      <Filter 
      onCategoryChange={handleCategoryChange} 
      onSearchChange={onSearchChange} 
      search={search} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
