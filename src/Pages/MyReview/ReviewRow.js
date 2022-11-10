import React, { useContext, useEffect, useState } from "react";
import { FaEdit, FaTrash, FaUser, FaUserAlt } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const ReviewRow = ({ review, handleDelete, handleUpdate }) => {
  const { user } = useContext(AuthContext);
  const { _id, serviceName, customer, email, service, message } = review;
  const [reviewService, setReviewService] = useState({});
  useEffect(() => {
    fetch(`https://picture-perfect-server.vercel.app/services/${service}`)
      .then((res) => res.json())
      .then((data) => setReviewService(data));
  }, [service]);

  return (
   
      <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar m-2">

              {user?.photoURL ? (
                <img
                  style={{ height: "30px" }}
                  rounded-xl
                  src={user?.photoURL}
                  title={`${user?.displayName}`}
                  alt="No Img"
                />
              ) : user?.uid ? (
                <FaUser></FaUser>
              ) : (
                <></>
              )}
           
          </div>
          <div>
            <div className="font-bold">{customer}</div>
            <div className="text-sm opacity-50">{serviceName}</div>
          </div>
        </div>
      </td>
      <td>{email}</td>
      <td>{message}</td>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-ghost btn-xs"
        >
          <FaTrash></FaTrash>
        </button>
        <button
          onClick={() => handleUpdate(_id)}
          className="btn btn-ghost btn-xs"
        >
          <FaEdit></FaEdit>
        </button>
      </th>
    </tr>
    
  );
};

export default ReviewRow;
