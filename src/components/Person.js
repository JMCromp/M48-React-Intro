const Person = (props) => {
    // do some js
    return (
        <div>
            <img src={props.image}></img>
            <h1>My unique word is {props.word}</h1>
            <p>This is the sub-heading: {props.sub}</p>
        </div>
    );
}

export default Person;