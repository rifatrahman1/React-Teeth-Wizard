import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="bg-sky-800 min-h-24">
            <div className=" flex items-center justify-between pt-6 container mx-auto">
            <h1 className="text-amber-600 font-black text-5xl bebas ">Teeth Wizard</h1>
            <div className="flex gap-10">
                <NavLink className={({isActive}) => isActive ? 'text-amber-600 font-bold text-lg': 'text-white text-lg font-bold'} to={'/'}>Home</NavLink>
                <NavLink className={({isActive}) => isActive ? 'text-amber-600 font-bold text-lg': 'text-white text-lg font-bold'} to={'/all-treatments'}>All Treatments</NavLink>
                <NavLink className={({isActive}) => isActive ? 'text-amber-600 font-bold text-lg': 'text-white text-lg font-bold'} to={'/my-appoinments'}>My Appointments</NavLink>
                <NavLink className={({isActive}) => isActive ? 'text-amber-600 font-bold text-lg': 'text-white text-lg font-bold'} to={'/profile'}>Profile</NavLink>
            </div>
            <Link to={'/login'}><button className="px-8 cursor-pointer font-bold text-lg py-2 rounded-lg bg-amber-600 text-white">Login</button></Link>
        </div>
        </div>
    );
};

export default Header;