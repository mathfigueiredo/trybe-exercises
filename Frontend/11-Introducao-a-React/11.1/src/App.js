import './App.css';

const Task = (value) => {
  return <li>{value}</li>;
};

function App() {
  const tasks = ['estudar', 'comer', 'malhar'];
  const list = tasks.map((x) => Task(x));
  return <div className="App">{list}</div>;
}

export default App;
