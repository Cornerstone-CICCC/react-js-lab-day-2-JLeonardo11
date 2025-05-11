import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function TodoPage() {
  const { user, logout } = useContext(UserContext);
  const [todos, setTodos] = useState<{ id: string; text: string }[]>([]);
  const [task, setTask] = useState('');
  const navigate = useNavigate();

  const addTodo = () => {
    if (!task.trim()) {
      toast.error('Task cannot be empty');
      return;
    }
    setTodos([...todos, { id: uuidv4(), text: task }]);
    setTask('');
  };

  const removeTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleLogout = () => {
    logout();
    toast.success("Logged out");
    navigate('/');
  }

  return (
    <div className='bg-gray-300 w-[30rem] p-8 rounded-2xl shadow-lg w-80'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-xl font-semibold'>Hello, {user.name} 👋</h2>
        <button
          onClick={handleLogout }
          className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition'
        >
          Logout
        </button>
      </div>
      <div className='flex mb-4'>
        <input
          type='text'
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder='Add a new task'
          className='bg-gray-700 text-white basis-120 w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black-500'
        />
        <button
          onClick={addTodo}
          className='basis-64 text-[14px] h-[3rem] bg-black text-white py-2 rounded-lg hover:bg-white hover:text-black hover:border border-black transition'
        >
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className='flex justify-between items-center bg-gray-100 p-2 mb-2 rounded-lg'
          >
            <span>{todo.text}</span>
            <button
              onClick={() => removeTodo(todo.id)}
              className='text-red-500 hover:text-red-700'
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}


