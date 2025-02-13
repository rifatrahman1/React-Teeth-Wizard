import { useContext, useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Auth_Context } from "../Provider/Auth_provider";

const Register = () => {
    const {handle_register, set_user, manage_profile, handle_google_login} = useContext(Auth_Context);
    const [error, set_error] = useState('');
    const handle_submit = (event) => {
        event.preventDefault();
        set_error('');
        const name = event.target.name.value;
        const profile = event.target.profile.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const con_password = event.target.con_password.value;
        console.log(name, profile, email, password, con_password);

        if (password !== con_password) {
          set_error("This is password did't not match");
          return;
        }
        if (!(/[a-z]/).test(password)) {
          set_error('Password must contain at last Lowercase letter..');
          return;
        }
        if (!(/[A-Z]/).test(password)) {
          set_error('Password must container at last Uppercase letter..');
          return;
        }
        if (password.length < 6) {
          set_error('Password must contain at last 6 characters..');
          return;
        }

        handle_register(email, password)
        .then((result) => {
          set_user(result.user);
          manage_profile(name, profile)
        })
        .catch((error) => {
          if(error) {
            set_error('This is email already exit...');
            return;
          }
        });
        
    }
    return (
        <form onSubmit={handle_submit}>
        <div className='w-[600px] mx-auto px-14 py-10 bg-white shadow-2xl rounded-2xl'>
          <h3 className='text-2xl font-bold'>Create an account</h3>
          <div className='flex flex-col'>
            <input className='border-b-2 mt-5 border-x-0 border-t-0 font-bold border-[#C5C5C5] focus:outline-none px-2 py-3 rounded-none' type="text" name="name" placeholder='Full Name' id="" />
            <input className='border-b-2 mt-5 border-x-0 border-t-0 font-bold border-[#C5C5C5] focus:outline-none px-2 py-3 rounded-none' type="profile" name="profile" placeholder='Select your image URL' id="" />
            <input className='border-b-2 mt-5 border-x-0 border-t-0 font-bold border-[#C5C5C5] focus:outline-none px-2 py-3 rounded-none' type="email" name="email" placeholder='Username or Email' id="" />
            <input className='border-b-2 mt-5 border-x-0 border-t-0 font-bold border-[#C5C5C5] focus:outline-none px-2 py-3 rounded-none' type="password" name="password" placeholder='Password' id="" />
            <input className='border-b-2 mt-5 border-x-0 border-t-0 text-black font-bold border-[#C5C5C5] focus:outline-none px-2 py-3 rounded-none' type="password" name="con_password" placeholder='Confirm Password' id="" />
            {
              error && <p className="text-red-500">{error}</p>
            }
            <div className='flex items-center mt-6 justify-between font-bold'>
              <div className='flex items-center gap-4'><input type="checkbox" name="box" id="" />
              <p>Remember Me</p></div>
              <button className='text-[#F9A51A] cursor-pointer underline underline-offset-4'>Forgot Password</button>
            </div>
            <button className='bg-[#F9A51A] font-medium cursor-pointer py-3.5 mt-12.5'>Create an account</button>
            <p className='mt-4 font-medium text-center'>Already have an account? <Link to={'/login'} className='text-[#F9A51A] underline underline-offset-4'>Login</Link></p>
          </div>
          <div>
        <div className="divider mt-6">OR</div>
        <button className='flex mt-9 items-center border-2 py-2.5 w-8/12 mx-auto px-2 rounded-full'><FaFacebook className='text-4xl text-blue-500'/><p className='text-center mx-auto font-medium'>Continue with Facebook</p></button>
        <button onClick={handle_google_login} className='flex mt-2 items-center border-2 py-2.5 w-8/12 mx-auto px-2 rounded-full'><FaGoogle className='text-4xl text-yellow-400'/><p className='text-center mx-auto font-medium cursor-pointer'>Continue with Google</p></button>
        </div>
        </div>
        </form>
    );
};

export default Register;