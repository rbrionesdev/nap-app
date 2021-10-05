import React from 'react';

function RestaurantForm(props) {
  

  return (
    <div>
      <h1>Form</h1>
      <form>
        <input placeholder="name" />
        <label name="name">Name</label>
        <input placeholder="city" />
        <label name="city">City</label>
        <input placeholder="zip" />
        <label name="zip">Zip</label>
        <input placeholder="phone" />
        <label name="phone">Phone</label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RestaurantForm;