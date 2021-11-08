import "./Modal.css";
import Aux from "../../../hoc/hoc";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => {
    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.cancelPurchaseHandler} />
            <div
                className="Modal"
                style={{
                    transform: props.show
                        ? "translateY(0)"
                        : "translateY(-100vh)",
                    opacity: props.show ? "1" : "0",
                }}
            >
                {props.children}
            </div>
        </Aux>
    );
};

export default Modal;
