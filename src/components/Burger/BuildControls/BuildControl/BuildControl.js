import classes from "./BuildControl.module.css";

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.label}>{props.label}</div>
        <button
            className={classes.Less}
            onClick={props.less}
            disabled={props.disabled}
        >
            Less
        </button>
        <button className={classes.More} onClick={props.more}>
            More
        </button>
    </div>
);

export default buildControl;
