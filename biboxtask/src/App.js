import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/Home";
import Items from "./components/Items";
import DragDrop from "./components/DragDrop";
import FinalProduct from "./components/FinalProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/items" exact><Items /></Route>
          <Route path="/dnd" exact><DragDrop /></Route>
          <Route path="/finalProduct" exact><FinalProduct /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
