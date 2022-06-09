import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";


function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filterValue, setFilterValue] = useState("");
  const [submittedData, setSubmittedData]= useState(items)
  const [formData, setFormData] = useState({
    id: uuid(),
    name: "Product",
    category: "Produce"
  })
  console.log(formData)

  function handleFormDataChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({...formData,
      [name]: value,
    })
  }

  function handleFormDataSubmit(event) {
    event.preventDefault()
    const newData = {id: formData.id, name: formData.name, category: formData.category}
    const newItems = [...submittedData, newData]

    setSubmittedData(newItems)
    console.log("this is new and old data" , newItems)
  }

  function handleFilterValueChange(event) {
    setFilterValue(event.target.value)
    console.log(filterValue)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = submittedData.filter(item => 
    item.name.toLowerCase().includes(filterValue.toLowerCase())).filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  })
  ;

  return (
    <div className="ShoppingList">
      <ItemForm 
        name={formData.name} 
        category={formData.category} 
        handleFormDataChange={handleFormDataChange}
        handleFormDataSubmit={handleFormDataSubmit}
      />
      <Filter onCategoryChange={handleCategoryChange} onFilterChange={handleFilterValueChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
