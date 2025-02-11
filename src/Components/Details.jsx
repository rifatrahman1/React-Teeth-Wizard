import { FaRegStar, FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Modal from "./Modal";

const Details = () => {
    const {cost, description, image} = useLoaderData();
    return (
            <div className="flex items-center gap-8 bg-white shadow-2xl p-8 rounded-3xl w-7/12 mx-auto mt-12">
                <img className="rounded-2xl w-[500px] " src={image} alt='' />
            <div>
                <p className="mt-4 text-[18px] text-[#09080F99]">{description}</p>
                <p className="font-bold mt-4">Price: <span className="text-amber-600">$ {cost}</span></p>
                <p className="mt-4 text-[18px] font-bold flex items-center gap-4">Rating <FaStar className="text-2xl text-[#F9C004]" /></p>
                <div className="flex items-center text-2xl text-[#F9C004] mt-4 gap-6">
                    <div className="flex items-center">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaRegStar />
                    </div>
                </div>
                <div className="flex items-center gap-6">
                <button onClick={()=>document.getElementById('my_modal_5').showModal()} className='text-lg bg-amber-600 text-white px-9 font-semibold mt-7 rounded-lg cursor-pointer py-2.5'>Book an Appointment</button>
                </div>
            </div>
            <Modal></Modal>
        </div>
        
    );
};

export default Details;