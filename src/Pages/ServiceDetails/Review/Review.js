import React, { useContext } from "react";
import { useLoaderData, } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const Review = () => {
  const { user } = useContext(AuthContext);
  const { _id,name } = useLoaderData();
  

  const handleSubmitReview = (event) => {
    if(!user){
       alert('Please login first')

    }
    else{
      event.preventDefault();
      const form = event.target;
      const fullName = form.fullname.value;
      const email = user?.email || "unregistered";
      const message = form.message.value;
      console.log(name, email, message);
  
      const review = {
        service: _id,
        serviceName:name,
        customer: fullName,
        email,
        message,
      };
      fetch("https://picture-perfect-server.vercel.app/reviews", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(review),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if(data.acknowledged){
              alert('Your review has been added succesfully')
              form.reset()
          }
        })
        .catch((e) => console.error(e));
    }
  };
  return (
    <div>
      
      <form onSubmit={handleSubmitReview} className="mb-32 w-full md:w-3/4 mx-auto mt-28 pb-20 px-24">
      <h2 className="text-3xl text-center underline">Add Review</h2>
        <div className="grid grid-cols-1 gap-6 mt-24">
          <input
            name="fullname"
            type="text"
            placeholder="full Name"
            className="input input-bordered"
          />

          <input
            name="email"
            type="text"
            placeholder="Your Email"
            className="input input-bordered"
            defaultValue={user?.email}
          />
        </div>

        <textarea
          name="message"
          className="textarea textarea-bordered w-full my-6"
          required
          placeholder="Your Message"
        ></textarea>

        <button  className="bg-primary rounded text-white font-semibold py-3 w-full">
         Add Review
        </button>
      </form>
    </div>
  );
};

export default Review;
