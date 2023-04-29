import { MouseEvent } from 'react';
function ListGroup() {
    let items = ["New York", "Kolkata", "Bangalore", "Mumbai"];

    let handleClick = (event: MouseEvent) => {
        console.log(event);
    };

    return (
        <>
            <h1>List</h1>
            <ul className="list-group">
                {items.map((item, index) => <li key={item}
                    onClick={handleClick}
                    className="list-group-item">{item}</li>)}
            </ul>
        </>
    );
}

export default ListGroup;