import { useState } from "react"

function App() {

   const [counter, setCounter] = useState(15);

   const AddValue = ()=>{
      console.log("Clicked", counter);
      setCounter((prevCounter) => {
         if(prevCounter < 20){
            return prevCounter + 1;
         }
         return prevCounter;
      })
   }

   const RemoveValue = () =>{
      console.log("Removed", counter);
      setCounter((prevCounter) => {
         if(prevCounter > 0){
            return prevCounter -1;
         }
         return prevCounter;
      })
       
   }
   return (
   <>
      <h1>Counter App</h1>
      <button onClick={AddValue}>AddValue : {counter}</button>
      <br/>
      <button onClick={RemoveValue}>RemoveValue : {counter}</button>
   </>
   )
}

export default App
