import { useState } from "react";//returns a state value and a function to update it

interface ListGroupProps {
    items: string[];
    heading: string;
}

function ListGroup({ items, heading }: ListGroupProps) {

    let defaultSelectedValue = 1;
    //React Hook - useState
    //useState hook returns an array with two elements, where in first element we 
    //pass variable or value and in second element we add updater function
    let [selectedIndex, setSelectedIndex] = useState(defaultSelectedValue);

    return (
        <>
            <h1>{heading}</h1>
            <ul className="list-group">
                {items.map((item, index) => <li key={item}
                    onClick={() => setSelectedIndex(index)}
                    className={selectedIndex === index ? "list-group-item active" : "list-group-item"}>{item}</li>)}
            </ul>
        </>
    );
}

export default ListGroup;