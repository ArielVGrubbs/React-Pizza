import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  state = {
    pizzas: [],
    pizzaEdit: {}
  }

  componentDidMount(){
    fetch('http://localhost:3000/pizzas')
    .then(res => res.json())
    .then((data) => {
      this.setState({
        ...this.state,
        pizzas: data
      })
    })
  }

  handleFormSubmit = (pizza) => {
    // console.log(pizza)
    fetch(`http://localhost:3000/pizzas/${pizza.id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        topping: pizza.topping,
        size: pizza.size,
        vegetarian: pizza.vegetarian
      })
    })
    .then(res => res.json())
    .then((data) => {
      console.log(data)
      let newPizzasArray = this.state.pizzas.map(p => {
        if (p.id === data.id) {
          p = data
        }
        return p
      })
      this.setState({
        ...this.state,
        pizzas: newPizzasArray
      })
    })
  }

  toggleRadio = (veg) => {
    if (veg === true) {
      veg = false
    } else {
      veg = true
    }
    this.setState({
      ...this.state,
      pizzaEdit: {
        ...this.state.pizzaEdit,
        vegetarian: veg
      }
    })
  }

  selectSize = (s) => {
    this.setState({
      ...this.state,
      pizzaEdit: {
        ...this.state.pizzaEdit,
        size: s
      }
    })
  }

  handleChangeTopping = (top) => {
    this.setState({
      ...this.state,
      pizzaEdit: {
        ...this.state.pizzaEdit,
        topping: top
      }
    })
  }

  handleEditRequest = (pizza) => {
    // console.log(pizza)
    this.setState({
      ...this.state,
      pizzaEdit: pizza
    })
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizzaInfo={this.state.pizzaEdit} submitForm={this.handleFormSubmit} changeForm={this.handleFormChange} toggleRadio={this.toggleRadio} selectSize={this.selectSize} handleChangeTopping={this.handleChangeTopping}/>
        <PizzaList pizzas={this.state.pizzas} handleEditRequest={this.handleEditRequest}/>
      </Fragment>
    );
  }
}

export default App;
