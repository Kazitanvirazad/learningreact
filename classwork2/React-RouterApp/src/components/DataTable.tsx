interface TodoProps {
    userId: string;
    id: string;
    title: string;
    completed: string;
}

//syntax for setting 'any' type in tsx
const DataTable = ({ todoData }: any) => {
    return (
        <>
            {todoData.map((item: TodoProps, index: Number) =>
                <tr key={String(index)}><td> {item.id}</td><td> {item.title}</td><td> {item.completed ? "Yes" : "No"} </td></tr>
            )}
        </>
    );
};

export default DataTable;