import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

import Aux from "../../hoc/hoc";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENTS_PRICE = {
  bacon: 25,
  cheese: 8,
  meat: 40,
  salad: 10,
};

export class BurgerBuilder extends Component {
  state = {
    UI_ingredients: [
      "cheese",
      "salad",
      "cheese",
      "meat",
      "meat",
      "meat",
      "cheese",
    ],
    ingredients: {
      bacon: 0,
      cheese: 3,
      salad: 1,
      meat: 3,
    },
    totalPrice: 250,
    purchasing: false,
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredient = {
      ...this.state.ingredients,
    };
    const updatedUIIngredients = [...this.state.UI_ingredients, type];
    updatedIngredient[type] = updatedCount;
    const priceAddition = INGREDIENTS_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredient,
      UI_ingredients: updatedUIIngredients,
    });
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedUI_ingredients = [...this.state.UI_ingredients];
    const updatedCount = oldCount - 1 > 0 ? oldCount - 1 : 0;
    if (oldCount) {
      const updatedIngredient = {
        ...this.state.ingredients,
      };
      const lastIndex = updatedUI_ingredients.lastIndexOf(type);
      updatedUI_ingredients.splice(lastIndex, 1);
      updatedIngredient[type] = updatedCount;
      const priceDeduction = INGREDIENTS_PRICE[type];
      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice - priceDeduction;
      this.setState({
        totalPrice: newPrice,
        ingredients: updatedIngredient,
        UI_ingredients: updatedUI_ingredients,
      });
    }
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  cancelPurchaseHandler = () => {
    this.setState({ purchasing: false });
  };

  render() {
    // checking whether any ingredient in empty, then, we have to disable the 'less' button for that.
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          cancelPurchaseHandler={this.cancelPurchaseHandler}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}
            clickedCancel={this.cancelPurchaseHandler}
            clickedContinue={this.cancelPurchaseHandler}
          />
        </Modal>
        <Burger
          ingredients={this.state.ingredients}
          UI_ingredients={this.state.UI_ingredients}
        />
        <BuildControls
          addHandler={this.addIngredientHandler}
          removeHandler={this.removeIngredientHandler}
          disableCheck={disabledInfo}
          price={this.state.totalPrice}
          purchaseHandler={this.purchaseHandler}
          cancelPurchaseHandler={this.cancelPurchaseHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
