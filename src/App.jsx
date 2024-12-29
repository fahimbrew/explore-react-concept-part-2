
import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';

function App() {
  

  function handleClick(){
    alert('Button clicked');
  }

  const clickedBtn2 = () =>{
    alert('Button 2 Clicked');
  }
  const addFive = (num)=>{
    alert(num+5);
  }

  return (
    <>
      
      <h3>React Core Concept Part 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={clickedBtn2}>Click 2</button>
      <button onClick={()=>alert("Button 3 clicked")}>Third</button>
      {/* Vejailla Jinish */}
      <button onClick={()=>addFive(2)}>Add Five</button>
      
      
     
    </>
  )
}

export default App
