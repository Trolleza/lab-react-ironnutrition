import React, { Component } from 'react';

class FoodBox extends Component {
  state = {
    quantity: 0,
    image: "",
    name: "",
    calories: ""
  };

  handleQuantity = (event) => {
    if (this.state.quantity >= 0) {
      this.setState({ quantity: event.target.value });
    }
  };

  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.name}</strong> <br />
                <small>{this.props.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  name="quantity"
                  type="number"
                  value={this.state.quantity}
                  onChange={this.handleQuantity}
                  min="0"
                />
              </div>
              <div className="control">
                <button
                
                  className="button is-info"
                  onClick={ () => this.props.onClick(this.props.image, this.props.name, this.props.calories) }
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default FoodBox;
