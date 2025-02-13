import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Modal = () => {
    const handle_submit = (event) => {
        event.preventDefault();
        console.log(event);
        
        const first = event.target.first.value;
        const last = event.target.last.value;
        const number = event.target.number.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(first, last, number, email, password);
    }
    return (
//         {/* Open the modal using document.getElementById('ID').showModal() method */}
// <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="w-7/12 bg-white">
  <form onSubmit={handle_submit}>
        <div className='w-[600px] mx-auto px-14 py-10 bg-white shadow-2xl rounded-2xl'>
          <h3 className='text-2xl font-bold'>Create an account</h3>
          <div className='flex flex-col'>
            <input className='border-b-2 mt-5 border-x-0 border-t-0 font-bold border-[#C5C5C5] focus:outline-none px-2 py-3 rounded-none' type="text" name="first" placeholder='First Name' id="" />
            <input className='border-b-2 mt-5 border-x-0 border-t-0 font-bold border-[#C5C5C5] focus:outline-none px-2 py-3 rounded-none' type="text" name="last" placeholder='Last Name' id="" />
            <input className='border-b-2 mt-5 border-x-0 border-t-0 text-black font-bold border-[#C5C5C5] focus:outline-none px-2 py-3 rounded-none' type="number" name="number" placeholder='Confirm Password' id="" />
            <input className='border-b-2 mt-5 border-x-0 border-t-0 font-bold border-[#C5C5C5] focus:outline-none px-2 py-3 rounded-none' type="email" name="email" placeholder='Username or Email' id="" />
            <input className='border-b-2 mt-5 border-x-0 border-t-0 font-bold border-[#C5C5C5] focus:outline-none px-2 py-3 rounded-none' type="password" name="password" placeholder='Password' id="" />
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
        <button className='flex mt-2 items-center border-2 py-2.5 w-8/12 mx-auto px-2 rounded-full'><FaGoogle className='text-4xl text-yellow-400'/><p className='text-center mx-auto font-medium'>Continue with Facebook</p></button>
        </div>
        </div>
        </form>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    );
};

export default Modal;