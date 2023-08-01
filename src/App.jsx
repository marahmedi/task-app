import Background from "./Background";
import TaskList from "./TaskList";
import Navbar from "./Navbar";
import CreateTodo from './CreateTodo'
import ViewOptions from './ViewOptions'

function App() {
  return (
    <>
      <Navbar />
      <CreateTodo/>
      <Background />
      <TaskList />
      <ViewOptions/>
    </>
  );
}

export default App;
