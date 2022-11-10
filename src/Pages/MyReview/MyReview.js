import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import ReviewRow from "./ReviewRow";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  const handleDelete = (id) =>{
    const proceed = window.confirm('Are you sure you want to delete this?')
    if(proceed){
        fetch(`http://localhost:5000/reviews/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount >0){
                alert('deleted successfully')
                const remaining = reviews.filter(rev => rev._id !== id)
                setReviews(remaining)
            }
        })
    }
  }
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <tbody>
          {reviews.map((review) => (
            <ReviewRow key={review._id} review={review}
            handleDelete={handleDelete}
            ></ReviewRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyReview;
