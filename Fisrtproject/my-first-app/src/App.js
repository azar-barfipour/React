import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  return(
    <div className='container'>
      <Header title='Hello World'/>
      <Tasks />
    </div>
  );
}

export default App;
