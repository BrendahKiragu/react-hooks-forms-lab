import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  let itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  })

   function onSearchChange(e){
    
    const value = e.target.value;
    setSearch(value);
   
  }
    
    itemsToDisplay = items.filter((item) => {
      if(!search) return true;
      return (item.name).toLowerCase().includes(search.toLowerCase());
    }
      );

  return (
    <div className="ShoppingList">
      <ItemForm/>
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
