import React from "react";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { name, _id, image, price, description } = service;
  return (
    <div>
      <div className="card card-compact mx-auto  max-w-sm bg-base-100 shadow-2xl border border-gray-300 rounded-lg">
        <PhotoProvider>
          <PhotoView src={image}>
            <figure>
              <img src={image} alt="Shoes" />
            </figure>
          </PhotoView>
        </PhotoProvider>
        <div className="card-body">
          <h2 className="card-title font-bold">{name}</h2>
          <div className="flex justify-between text-primary">
            <p className="text-2xl font-semibold">Price : {price}</p>
          </div>
          <p>
            {description.length > 100
              ? description.slice(0, 100) + "..."
              : description}
          </p>
          <div className="card-actions justify-end mt-4">
            <Link to={`/services/${_id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
