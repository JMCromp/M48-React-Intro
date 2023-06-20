const Statetest = (props) => {

    const updateState = () => {
        props.dataMethod("Hello world!");
    }

    return (
        <div>
            <p>{props.data}</p>
            <button onClick={updateState}>Click me</button>
        </div>
    );
}

export default Statetest;