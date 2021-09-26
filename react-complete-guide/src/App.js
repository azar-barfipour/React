import ExpenseItem from "./components/ExpenseItem";

function App() {
  const Hello = [
    {
      title: "Hello worls",
      age: 30,
    },
    {
      title: "Hello Azar",
      age: 31,
    },
    {
      title: "Hello Azar khoshgele",
      age: 32,
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={Hello[0].title} age={Hello[0].age} />
      <ExpenseItem title={Hello[1].title} age={Hello[1].age} />
      <ExpenseItem title={Hello[2].title} age={Hello[2].age} />
    </div>
  );
}

export default App;
