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
        ingredients: {
            salad: 1,
            bacon: 2,
            cheese: 3,
            meat: 4,
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
        updatedIngredient[type] = updatedCount;
        const priceAddition = INGREDIENTS_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredient });
    };

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount - 1 > 0 ? oldCount - 1 : 0;
        const updatedIngredient = {
            ...this.state.ingredients,
        };
        updatedIngredient[type] = updatedCount;
        const priceDeduction = INGREDIENTS_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredient });
        this.setState({ ingredients: updatedIngredient });
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
                <Burger ingredients={this.state.ingredients} />
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
