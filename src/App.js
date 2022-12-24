import './App.css';
import Listing from './components/Listing';

let dataFile = require("./data/etsy.json");
let product = JSON.parse(JSON.stringify(dataFile));

function App() {
 
  return (
    <Listing item = {product}/>
  );
}

export default App;