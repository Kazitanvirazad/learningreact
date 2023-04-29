import { useState } from "react";//returns a state value and a function to update it

interface ListGroupProps {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {

    let defaultSelectedValue = 1;
    let [selectedIndex, setSelectedIndex] = useState(defaultSelectedValue);

    return (
        <>
            <h1>{heading}</h1>
            <ul className="list-group">
                {items.map((item, index) => <li key={item}
                    onClick={() => {
                        setSelectedIndex(index);
                        onSelectItem(item);
                    }}
                    className={selectedIndex === index ? "list-group-item active" : "list-group-item"}>{item}</li>)}
            </ul>
        </>
    );
}

export default ListGroup;