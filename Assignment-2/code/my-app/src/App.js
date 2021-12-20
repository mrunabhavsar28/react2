import logo from './logo.svg';
import './App.css';
import {employee} from "./object.js"


function App() {
  return (
    <div>
    <img  class="datacell1"src={employee.profileImg} alt="Images"/>
    <h1 class="datacell">name:{employee.name}</h1>
    <h1 class="datacell">location:{employee.location}</h1>
    <h1 class="datacell">bloodGroup:{employee.bloodGroup}</h1>
    <h1 class="datacell">age:{employee.age}</h1>
    

    
</div>
)
  }
export default App;