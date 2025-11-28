import { useEffect, useState } from "react";


function App() {

  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/greet/Rikke')
    .then(response => response.text())
    .then(data => setGreeting(data));
  }, []);

  return (
    <>
      <form>
        <h1>Todo</h1>

        <section className="create-task">
          <input type="text" name="create-task" placeholder="Create Task"/>
          <button>Add</button>
        </section>


        
      </form>
    </>
  )
}

export default App
