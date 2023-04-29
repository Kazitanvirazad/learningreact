
function ListGroup() {
    let items: string[] = [];
    let message = items.length === 0 ? <p>No items found</p> : null;

    let getMessage = () => {
        //shortcut ternary condition true && "item" = "item"
        return items.length === 0 && <p>No items found</p>;
    };
    return (
        <>
            <h1>List</h1>
            {getMessage()}
            <ul className="list-group">
                {items.map(item => <li key={item} className="list-group-item">{item}</li>)}
            </ul>
        </>
    );
}

export default ListGroup;