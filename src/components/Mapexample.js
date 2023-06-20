const Mapexample = () => {
    let bookPrices = [2.5, 4.5, 3.5, 6, 8]

    let salePrices = bookPrices.map((price) => {
        return (price * 0.5) + ", "; 
    });

    return (
        <div>
            <p>{bookPrices}</p>
            <p>{salePrices}</p>
        </div>
    );
}

export default Mapexample;