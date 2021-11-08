import Aux from "../../../hoc/hoc";

import Button from "../../UI/Button/Button";

const OrderSummary = (props) => {
    const orderSummary = Object.keys(props.ingredients).map((igKey) => (
        <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}>{igKey}</span> :{" "}
            {props.ingredients[igKey]}
        </li>
    ));
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A Delicious burger with the following ingredients: </p>
            <ul>{orderSummary}</ul>
            <p>
                <b>Your total bill is : ₹{props.price.toFixed(2)}</b>
            </p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={props.clickedCancel}>
                CANCEL
            </Button>
            <Button btnType="Success" clicked={props.clickedContinue}>
                CONTINUE
            </Button>
        </Aux>
    );
};

export default OrderSummary;
