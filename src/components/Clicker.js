const Clicker = (props) => {

    const increaseClicker = () => {
        props.clickerMethod(props.clickerValue + 1)
    }

    const decreaseClicker = () => {
        if (!props.clickerValue < 1) {
            props.clickerMethod(props.clickerValue - 1);
        }
    }

    return (
        <div>
            <h1>{props.clickerValue}</h1>
            <button onClick={increaseClicker}>+</button>
            <button onClick={decreaseClicker}>-</button>
        </div>
    );
}

export default Clicker;