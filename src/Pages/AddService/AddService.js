import React from 'react';

const AddService = () => {
    return (
        <div>
            <h2 className='text-4xl font-bold text-primary text-center my-4 pb-8'>Add Your Service</h2>
            <form>
           <div className="grid grid-cols-1 gap-6">
           <input type="text" placeholder="service name" className="input input-bordered input-primary w-full " />
            <input type="text" placeholder="image url" className="input input-bordered input-primary w-full" />
            <input type="text" placeholder="service name" className="input input-bordered input-primary w-full" />
            <textarea
          name="message"
          className="textarea textarea-bordered textarea-primary w-full"
          required
          placeholder="service details"
        ></textarea>
           
           </div>
            <div className='my-6'>
            <button className="bg-primary rounded text-white font-semibold py-3 w-full">
         Add Service
        </button>
            </div>
            </form>
            
        </div>
    );
};

export default AddService;