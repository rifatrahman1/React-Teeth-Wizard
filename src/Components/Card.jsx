/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Card = ({service}) => {
    const {image, treatment, description, cost, id} = service || {};
    return (
        <div className="shadow-2xl p-7 rounded-lg flex-col justify-between flex">
            <img className="h-[300px] rounded-lg" src={image} alt="" />
            <h2 className="text-xl font-bold mt-4">{treatment}</h2>
            <p className="font-medium mt-4">{description.slice(0,100)}. . .</p>
            <p className="font-bold mt-4">Price: <span className="text-amber-600">$ {cost}</span></p>
            <Link to={`/details/${id}`} className="flex justify-end"><button className="px-8 mt-5  cursor-pointer font-semibold text-lg py-2 rounded-lg bg-amber-600 text-white">Details</button></Link>
        </div>
    );
};

export default Card;