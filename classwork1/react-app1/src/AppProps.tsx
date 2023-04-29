import ListGroupProps from './components/ListGroupProps';

function App() {
  let items = ["New York", "Kolkata", "Bangalore", "Mumbai"];
  return (<div><ListGroupProps items={items} heading="Cities" /></div>);
}

export default App;