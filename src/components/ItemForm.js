import React, {useState} from "react";

function ItemForm({name, category, handleFormDataChange, handleFormDataSubmit}) {

  return (
    <form className="NewItem" onSubmit={handleFormDataSubmit}>

      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleFormDataChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={handleFormDataChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
