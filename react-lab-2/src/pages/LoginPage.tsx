import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import toast from 'react-hot-toast';

export default function LoginPage() {
  const [name, setName] = useState('');
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!name.trim()) {
      toast.error('Please enter your name');
      return;
    }
    login(name);
    navigate('/TodoPage');
  };

  return (
    <div className='bg-gray-300 w-[30rem] p-8 rounded-2xl shadow-lg w-80s'>
      <h1 className='text-2xl font-bold mb-4 '>Hi. Whats your name?</h1>
        <div className = 'flex flex-row gap-x-2'>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter your name'
            className='bg-gray-700 text-white basis-120 w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black-500'
          />
          <button
            onClick={handleLogin}
            className='basis-64 text-[14px] h-[3rem] bg-black text-white py-2 rounded-lg hover:bg-white hover:text-black hover:border border-black transition'
          >
            Login
          </button>
        </div>
    </div>
  );
}