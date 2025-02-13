
import { useContext, useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Auth_Context } from "../Provider/Auth_provider";

const Login = () => {
  const {handle_login, handle_google_login} = useContext(Auth_Context);
  const [error, set_error] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const submit_login = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        
        handle_login (email, password)
        .then((result) => {
          console.log(result.user);
          navigate(location.state.from);
        })
        .catch((error) => {
          console.log(error);
          if (error.code === "auth/invalid-credential") {
            set_error("User does not exist. Please register first!");
        } else if (error.code === "auth/wrong-password") {
            set_error("Incorrect password! Please try again.");
        } else {
            set_error("Login failed! " + error.message);
        }
        });
  };

  const handle_google = () => {
    handle_google_login()
    .then((result) => {
      navigate(location.state.from)
    })
  }
    return (
        <div className='w-[600px] mx-auto px-14 py-10 bg-white shadow-2xl mt-24 rounded-2xl'>
          <h3 className='text-2xl font-bold'>Login</h3>
          <form onSubmit={submit_login}>
          <div className='flex flex-col'>
            <input className='border-b-2 mt-5 border-x-0 border-t-0 border-[#C5C5C5] focus:outline-none px-2 py-3 rounded-none' type="text" name="email" placeholder='Username or Email' id="" />
            <input className='border-b-2 mt-5 border-x-0 border-t-0 border-[#C5C5C5] focus:outline-none px-2 py-3 rounded-none' type="password" name="password" placeholder='Password' id="" />
            <div className='flex items-center mt-6 justify-between font-bold'>
              <div className='flex items-center gap-4'><input type="checkbox" name="box" id="" />
              <p>Remember Me</p></div>
              <button className='text-[#F9A51A] cursor-pointer underline underline-offset-4'>Forgot Password</button>
            </div>
            {
              error && <p className="text-red-500 font-medium">{error}</p>
            }
            <button className='bg-[#F9A51A] font-medium cursor-pointer py-3.5 mt-12.5'>Login</button>
            <p className='mt-4 font-medium text-center'>Don’t have an account? <Link to={'/register'} className='text-[#F9A51A] underline underline-offset-4'>Create an account</Link></p>
          </div>
          </form>
          <div>
        <div className="divider mt-6">OR</div>
        <button className='flex mt-9 items-center border-2 py-2.5 w-8/12 mx-auto px-2 rounded-full'><FaFacebook className='text-4xl text-blue-500'/><p className='text-center mx-auto font-medium'>Continue with Facebook</p></button>
        <button onClick={handle_google} className='flex mt-2 cursor-pointer items-center border-2 py-2.5 w-8/12 mx-auto px-2 rounded-full'><FaGoogle className='text-4xl text-yellow-400'/><p className='text-center mx-auto font-medium'>Continue with Google</p></button>
        </div>
        </div>
    );
};

export default Login;