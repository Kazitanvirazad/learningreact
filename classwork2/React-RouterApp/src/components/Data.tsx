import { useState } from "react";
import DataTable from "./DataTable";
import NavigationBar from "./NavigationBar";

const Data = () => {
    let fetchUserData = () => {
        fetch("https://jsonplaceholder.typicode.com/todos/")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setTodoData(data)
            });
    };

    let [todoData, setTodoData] = useState([]);

    return (
        <>
            <NavigationBar />
            <button type="button" onClick={fetchUserData} className="btn btn-primary">Get Data</button>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody><DataTable todoData={todoData} ></DataTable></tbody>

            </table>
        </>
    );
};

export default Data;