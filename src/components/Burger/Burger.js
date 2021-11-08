import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
    // console.log(
    //     "what? ",
    //     Object.keys(props.ingredients)
    //         .map((igKey) => {
    //             return [...Array(props.ingredients[igKey])].map((_, index) => (
    //                 <BurgerIngredient key={igKey + index} type={igKey} />
    //             ));
    //         })
    //         .reduce((arr, value) => {
    //             console.log(arr);
    //             return arr.concat(value);
    //         }, [])
    // );

    /*
    here below,
    1) Object.keys gives an array of keys [salad, cheese...]

    then we iterate over that array, because we want the value of the ingredient, but it is in
    map, so to iterate over it, we use this array.

    2) We iterate over that array of keys, and we will get the values of like salad, cheese etc, and we can use those values to get the value/count of ingredients from the map of ingredients. Which we will store it in a array, and that array will look like [undefined, undefined] --> if we have 2 as the value of salad, then an array with length 2 will be generated, Spread Operator converts it into array then we can iterate over that array.

    Note: Array(n) creates 'n' length of array, but it will be like this : [undefined x n] or [ <n empty items> ]

    In simple we are first creating an array of names/keys and then use those names/keys to get the count and return the jsx that many times.

    3) Then we iterate over 'count' array and then we will create a <BurgerIngredient /> element/component.

    Now we have array of arrays -> [[jsx, jsx], [jsx],....]

    4) We use reduce function to convert all into one single array, instead of nested arrays.
    all_the_above_code.reduce((arr, nestedArrayValue) => arr.concate(nestedArrayValue), []) this second arg, empty array is arr.
    */
    const transformedIngredients = Object.keys(props.ingredients)
        .map((igKey) => {
            return [...Array(props.ingredients[igKey])].map((_, index) => (
                <BurgerIngredient key={igKey + index} type={igKey} />
            ));
        })
        // here when there is no object still Array will be of length 4 -> [Array(0), Array(0), Array(0), Array(0)]
        // because in elements/nested arrays will have the values, they will be empty if there is no element, so, we will never know whether our array is empty or not to show some kinda prompt to add the elements.
        // So, we reduce it to one single array, if there are no elements then it will be empty else.
        .reduce((arr, ele) => {
            return arr.concat(ele);
        }, []);

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients.length < 1
                ? "Please add ingredients"
                : transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;
