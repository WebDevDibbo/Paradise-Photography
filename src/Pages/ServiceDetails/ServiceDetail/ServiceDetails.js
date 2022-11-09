import React from "react";
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
    const service = useLoaderData()
    console.log(service)
  
  return (
    <div>
     
      <div className="card bg-base-100 shadow-2xl my-6 rounded-lg border border-primary">
        <PhotoProvider>
          <figure>
            <PhotoView src={service.image}>
              <img src={service.image} alt="Shoes" />
            </PhotoView>
          </figure>
        </PhotoProvider>
        <div className="card-body">
          <h2 className="card-title font-bold">{service.name}</h2>
          <div className="flex justify-between text-primary">
            <p className="text-2xl font-semibold">Price : {service.price}</p>
          </div>
          <p>
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
