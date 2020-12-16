import React from "react"

const Pizza = (props) => {
  let pizza = props.pizza

  const handleVeg = (veg) => {
    if (veg) {
      return "Yes"
    } else {
      return "No"
    }
  }

  const handleEdit = () => {
    props.editPizza(props.pizza)
  }

  return(
    <tr>
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      <td>{handleVeg(pizza.vegetarian)}</td>
      <td><button type="button" className="btn btn-primary" onClick={() => handleEdit()}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
