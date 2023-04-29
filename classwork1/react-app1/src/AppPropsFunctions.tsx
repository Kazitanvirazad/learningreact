import ListGroupPropsFunction from './components/ListGroupPropsFunction';

function App() {
  let items = ["New York", "Kolkata", "Bangalore", "Mumbai"];
  let handle = (item: string) => {
    console.log(item);
  };

  return (<div><ListGroupPropsFunction items={items} heading="Cities" onSelectItem={handle} /></div>);
}

export default App;