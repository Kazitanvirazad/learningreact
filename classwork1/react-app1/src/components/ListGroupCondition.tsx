//React doesn't support for loop
function ListGroup() {
    let items = ["New York", "Kolkata", "Bangalore", "Mumbai"];

    return (
        <>
            <h1>List</h1>
            {items.length === 0 ? <p>No items found</p> : null}
            <ul className="list-group">
                {items.map(item => <li key={item} className="list-group-item">{item}</li>)}
            </ul>
        </>
    );
}

export default ListGroup;