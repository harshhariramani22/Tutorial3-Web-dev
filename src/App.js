import './App.css';
import UserForm from './components/UserForm';
import{Route,Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      {/* <Routes> */}
      <UserForm/>
        {/* <Route path={"/profile"} element={<UserForm/>}/> */}
      {/* </Routes> */}
    </div>
  );
}

export default App;
