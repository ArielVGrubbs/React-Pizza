import React from "react"

const PizzaForm = (props) => {

  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" name="topping" className="form-control" placeholder="Pizza Topping" value={props.pizzaInfo.topping} onChange={(event) => props.handleChangeTopping(event.target.value)}/>
        </div>
        <div className="col">
          <select value={props.pizzaInfo.size} className="form-control" name="size" onChange={(event) => props.selectSize(event.target.value)}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" checked={props.pizzaInfo.vegetarian} onClick={() => props.toggleRadio(false)}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" checked={!props.pizzaInfo.vegetarian} onClick={() => props.toggleRadio(true)}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={() => props.submitForm(props.pizzaInfo)}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
