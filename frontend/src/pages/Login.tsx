import { createSignal } from 'solid-js';
import line from "../assets/images/line.svg";
import { A, useNavigate } from '@solidjs/router';

function Login() {
  const [email, setEmail] = createSignal('');
  const [password, setPassword] = createSignal('');
  const navigate = useNavigate();

  const handleSubmit = async (e: Event) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'username': email(),
          'password': password()
        }
      });

      const data = await response.json();

      if (response.ok) {
        // Login successful, handle the token or other response data as needed
        console.log(data.message);
        console.log('Token:', data.token);

        // Redirect to the homepage
        navigate('/home');
      } else {
        // Login failed, handle the error message
        console.log(data.message);
      }
    } catch (error) {
      // Error occurred while making the request
      console.error('Error:', error);
    }
  };

  return (
    <div class='w-1/4 mx-auto bg-white/10 py-10 px-5 mt-40 rounded-lg shadow-lg'>
      <h1 class='text-center font-mauline text-emerald-600 text-5xl'>Login</h1>
      <img src={line} class='mt-7 mb-5'/>
      <form onSubmit={handleSubmit}>
      <div class='flex gap-5 w-full'>
          <label class='font-montserrat font-semibold my-auto'>Email:</label>
          <input
            class='w-full rounded-md px-4 py-[6px] bg-white/20 outline-none text-white font-medium font-montserrat'
            type="email"
            value={email()}
            onInput={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div class='flex my-2 gap-5'>
          <label class='font-montserrat font-semibold my-auto'>Password:</label>
          <input
            class='w-full rounded-md px-4 py-[6px] bg-white/20 outline-none text-white font-medium font-montserrat'
            type="password"
            value={password()}
            onInput={(e) => setPassword(e.target.value)}
            required
          />
          </div>
        <button type="submit" class='bg-yellow-200 hover:bg-yellow-300 transition duration-500 px-5 py-2 rounded-3xl text-emerald-800 font-bold font-montserrat mx-auto flex mt-7'>LogIn</button>
        <p class='font-montserrat text-center text-sm mt-5 font-medium text-emerald-600'>Not Signed Up Yet? <span class='font-bold underline cursor-pointer'><A href='/signup'>Sign Up</A></span></p>
      </form>
    </div>
  );
}

export default Login;
