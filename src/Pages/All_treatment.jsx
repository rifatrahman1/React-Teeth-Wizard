import { useLoaderData } from "react-router-dom";
import Card from "../Components/Card";

const All_treatment = () => {
    const services = useLoaderData();
    return (
        <div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 gap-12">
            {
                services.map((service) => <Card key={service.id} service={service}></Card> )
            }
            </div>
        </div>
    );
};

export default All_treatment;