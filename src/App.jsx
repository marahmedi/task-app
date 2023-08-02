import Background from "./components/Background";
import TaskList from "./components/TaskList";
import Navbar from "./components/Navbar";
import CreateTodo from './components/CreateTodo'
import ViewOptions from './components/ViewOptions'
import Note from './components/Note'

function App() {
  return (
    <>
      <Background>
      <Navbar />
      <CreateTodo/>
      <TaskList />
      <ViewOptions/>
      <Note/>
      </Background>
    </>
  );
}

export default App;
