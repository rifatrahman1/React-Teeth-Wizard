import banner from '../assets/banner1.png'

const Banner = () => {
    return (
        <div className="flex items-center justify-between w-7/12 mx-auto mt-20">
            <div>
            <h1 className='text-5xl font-black bebas text-amber-600 leading-12'>Brighten Your Smile with <br /> Expert Dental Care</h1>
            <p className='font-medium mt-4 text-lg'>Experience professional dental services tailored to your needs. <br /> From whitening to checkups, we ensure a healthy <br /> and confident smile.</p>
            <button className='text-lg bg-amber-600 text-white px-9 font-semibold mt-7 rounded-lg cursor-pointer py-2.5'>Book an Appointment</button>
            </div>
            <img src={banner} alt="" />
        </div>
    );
};

export default Banner;