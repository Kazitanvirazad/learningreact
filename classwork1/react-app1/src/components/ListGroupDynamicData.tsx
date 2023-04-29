//React doesn't support for loop
function ListGroup() {
    let items = ["New York", "Kolkata", "Bangalore", "Mumbai"];
    //maintainig key of mapped items in react is very important as react 
    // need to know exactly which key to refer

    if (items.length == 0) {
        return (<><h1>List</h1>
            <p>No items found</p></>);
    }
    return (
        <>
            <h1>List</h1>
            <ul className="list-group">
                {items.map(item => <li key={item} className="list-group-item">{item}</li>)}
            </ul>
        </>
    );
}

export default ListGroup;