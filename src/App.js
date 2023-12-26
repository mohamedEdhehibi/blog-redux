import './App.css';
import CreatePost from './components/posts/CreatePost';
import PostList from './components/posts/PostList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/Navbar';
import Post from './components/posts/Post';
import Home from './components/dashboard/Home';
import CreateTodo from './components/todolist/CreateTodo';
import TodoList from './components/todolist/TodoList';
import Todo from './components/todolist/Todo';

function App() {

  return (
    <div className="App ">

      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Post />}>
            <Route index element={<PostList />} />
            <Route path="createpost" element={<CreatePost />} />
            <Route path="postlist" element={<PostList />} />
          </Route>
          {/* <Route path="/todo" element={<ToDo />}>
              <Route index element={<AddToDo />} />
              <Route path="addToDo" element={<AddToDo />} />
              <Route index path="todoList" element={<ToDoList todos={todos} />} />
           </Route> */}
          <Route path="/todos" element={<Todo />}>
          <Route index element={<TodoList />} />

          <Route path="createtodo" element={<CreateTodo />} />

            <Route path="todolist" element={<TodoList />} />

          </Route>
        </Routes>

      </Router>
      {/* <CreatePost />
      <PostList /> */}
    </div>
  );
}

export default App;
