import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    {
        label: "Bacon",
        type: "bacon",
    },
    {
        label: "Cheese",
        type: "cheese",
    },
    {
        label: "Meat",
        type: "meat",
    },
    {
        label: "Salad",
        type: "salad",
    },
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>
            Current Price: ₹<b>{props.price.toFixed(2)}</b>
        </p>
        {controls.map((ctrl) => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                more={() => props.addHandler(ctrl.type)}
                less={() => props.removeHandler(ctrl.type)}
                disabled={props.disableCheck[ctrl.type]}
            />
        ))}

        {props.price > 6 ? (
            <button
                className={classes.OrderButton}
                onClick={props.purchaseHandler}
            >
                ORDER NOW
            </button>
        ) : (
            <button className={classes.OrderButton} disabled={true}>
                ORDER NOW
            </button>
        )}
    </div>
);

export default buildControls;
