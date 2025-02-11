import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Card from "../Components/Card";
import Feedback from "../Components/Feedback";

const Home = () => {
    const services = useLoaderData();
    const {service_data, feedback_data} = services || {};
    return (
        <div>
            <Banner></Banner>
            <h1 className="bebas font-black text-5xl opacity-95 my-12 text-center">Comprehensive Dental Care for Every Need</h1>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {
                service_data.slice(0, 4).map((service) => <Card key={service.id} service={service}></Card> )
            }
            </div>
            <Link to={'/all-treatments'} className="flex justify-center my-12"><button className='text-lg  bg-amber-600 text-white px-9 font-semibold mt-7 rounded-lg cursor-pointer py-2.5'>Show All</button></Link>
            <div className="ml-56">
                <h1 className="font-bold text-2xl">Customer Feedback</h1>
                <Feedback feedback_data={feedback_data}></Feedback>
            </div>
        </div>
    );
};

export default Home;