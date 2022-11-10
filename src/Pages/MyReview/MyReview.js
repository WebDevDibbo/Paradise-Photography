import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import ReviewRow from "./ReviewRow";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://picture-perfect-server.vercel.app/reviews?email=${user?.email}`,
     {
      headers: {
        authorization: `Bearer  ${localStorage.getItem("photo-token")}`,
      },
    }
    )
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete this?");
    if (proceed) {
      fetch(`https://picture-perfect-server.vercel.app/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remaining = reviews.filter((rev) => rev._id !== id);
            setReviews(remaining);
          }
        });
    }
  };

  const handleUpdate = (id) => {
    fetch(`https://picture-perfect-server.vercel.app/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 1) {
          const remaining = reviews.filter((rev) => rev._id !== id);
          const approving = reviews.find((rev) => rev._id === id);
          approving.status = "Edited";

          const newReviews = [...remaining, approving];
          setReviews(newReviews);
        }
      });
  };
  return (
   <div className="mb-24">
    <h2 className="text-center text-4xl font-semibold my-16">You have {reviews.length} reviews</h2>
     <div className="overflow-x-auto w-full">
      
      <table className=" table w-full" >
        <tbody>
          {reviews.map((review) => (
            <ReviewRow
              key={review._id}
              review={review}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
            ></ReviewRow>
          ))}
        </tbody>
      </table>
    </div>
   </div>
  );
};

export default MyReview;
