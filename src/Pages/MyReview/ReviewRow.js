import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const ReviewRow = ({ review,handleDelete }) => {
  const { _id,serviceName, customer, email, service, message } = review;
  const [reviewService, setReviewService] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/services/${service}`)
      .then((res) => res.json())
      .then((data) => setReviewService(data));
  }, [service]);

  
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded w-24 h-24">
              {
                reviewService?.image &&
                <img src={reviewService.image} alt="" />
                
              }
            </div>
          </div>
          <div>
            <div className="font-bold">{customer}</div>
            <div className="text-sm opacity-50">{serviceName}</div>
          </div>
        </div>
      </td>
      <td>
        {email}
        
      </td>
      <td>{message}</td>
      <th>
        <button onClick={()=>handleDelete(_id)} className="btn btn-ghost btn-xs"><FaTrash></FaTrash></button>
        <button className="btn btn-ghost btn-xs"><FaEdit></FaEdit></button>
      </th>
    </tr>
  );
};

export default ReviewRow;
