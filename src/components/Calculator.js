import './calculator.css'

const Calculator = (props) => {
    return (
        <div className="calculator-parent">
            {props.data.map(
                (value) => {
                    return (
                        <div className="calculator-child">
                            <p>{value}</p>
                        </div>
                    );
                }
            )
            }
        </div>
    );
}

export default Calculator;