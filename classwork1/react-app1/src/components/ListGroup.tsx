// import { Fragment } from 'react';

function ListGroup() {
    //To add multiline jsx markup we should use () parenthesis
    //in a react single component we cannot use multiple elements, to 
    //avoid this we need to wrap all elements in a div or use a fragment
    return (
        //in case of fragment we can import Fragment and use Fragment tags,
        //Another shortcut is use empty tags
        <>
            <h1>List</h1>
            <ul className="list-group">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
                <li className="list-group-item">A fourth item</li>
                <li className="list-group-item">And a fifth one</li>
            </ul>
        </>
        // <Fragment>
        //     <h1>List</h1>
        //     <ul className="list-group">
        //         <li className="list-group-item">An item</li>
        //         <li className="list-group-item">A second item</li>
        //         <li className="list-group-item">A third item</li>
        //         <li className="list-group-item">A fourth item</li>
        //         <li className="list-group-item">And a fifth one</li>
        //     </ul>
        // </Fragment>
        //      <div>
        //      <h1>List</h1>
        //      <ul className="list-group">
        //          <li className="list-group-item">An item</li>
        //          <li className="list-group-item">A second item</li>
        //          <li className="list-group-item">A third item</li>
        //          <li className="list-group-item">A fourth item</li>
        //          <li className="list-group-item">And a fifth one</li>
        //      </ul>
        //  </div>
    );
}

export default ListGroup;