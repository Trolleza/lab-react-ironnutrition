import React from 'react';
import 'bulma/css/bulma.css';
import foods from '../foods.json';
import FoodBox from './FoodBox';

class App extends React.Component {
  state = {
    foodList: [],
  };
  handleAdd = (image, name, calories) => {
    let newFood = { image: image, name: name, calories: calories };
    this.setState({ foodList: [newFood, ...this.state.foodList] });
    console.log(this.state.foodList);
  };

  render() {
    return (
      <div className="App, columns">
        <div className="column">
          {foods.map((food) => {
            return (
              <div>
                <FoodBox
                  onClick={this.handleAdd}
                  image={food.image}
                  name={food.name}
                  calories={food.calories}
                  quantity={food.quantity}
                />
              </div>
            );
          })}
        </div>
        <div className="column">
          <div className="box">
            <h2 className="subtitle">Today's foods</h2>
            <ul>
              {this.state.foodList.map((x) => {
                return (
                  <li>
                    {this.props.quantity} {x.name} = {x.calories}
                  </li>
                );
              })}
            </ul>
            <strong>Total: cal</strong>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
