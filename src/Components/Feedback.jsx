/* eslint-disable react/prop-types */

import { FaStar } from "react-icons/fa";

const Feedback = ({feedback_data}) => {
    return (
        <div className="space-y-8 my-12 self-start ">
            {
                feedback_data?.map ((feedback) => <div key={feedback.reviewId} className="shadow w-6/12 p-5 rounded-lg">
                    <div className="flex gap-6 items-center">
                        <img className="w-12 h-12 rounded-full" src={feedback.userImg} alt="" />
                        <h3>{feedback.name}</h3>
                    </div>
                    <p className="mt-3">{feedback.review}</p>
                    <div className="flex items-center gap-4 mt-3">
                        <p className="flex items-center gap-3 font-semibold">Rating:<FaStar className="text-amber-500"/>{feedback.rating}</p>
                        <p className="font-semibold ">Date: {feedback.date}</p>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Feedback;