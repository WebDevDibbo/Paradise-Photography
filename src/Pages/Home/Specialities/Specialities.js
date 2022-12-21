import React from "react";
import familyImg from '../../../assets/families.jpg'
import weddingImg from '../../../assets/wed1.jpg'
import coupleImg from '../../../assets/couple.jpg'
import fashionImg from '../../../assets/fashion.jpg'
import portraitImg from '../../../assets/portraits.jpg'
import childrenImg from '../../../assets/children.jpg'

const Specialities = () => {
  return (
    <div className="my-6 py-6">
      <h2 className="text-center text-primary font-semibold text-xl uppercase mb-5">My Specialities</h2>
      <h3 className="text-xl text-center mb-16 mx-auto w-full md:w-2/4">
        I'd like to give you a unique photography experience, capturing your 
        products with excellent composition and lighting skills.
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="shadow-2xl mb-16 border border-gray-300 rounded-lg"> 
          <img className="mx-auto" src={familyImg} alt="" />
          <h4 className="text-xl text-center py-10">FAMILIES</h4>
        </div>
        <div className="shadow-2xl mb-16 border border-gray-300 rounded-lg"> 
          <img className="mx-auto" src={weddingImg} alt="" />
          <h4 className="text-xl text-center py-10">WEDDINGS</h4>
        </div>
        <div className="shadow-2xl mb-16 border border-gray-300 rounded-lg"> 
          <img className="mx-auto" src={coupleImg} alt="" />
          <h4 className="text-xl text-center py-10">COUPLES</h4>
        </div>
        <div className="shadow-2xl mb-16 border border-gray-300 rounded-lg"> 
          <img className="mx-auto" src={fashionImg} alt="" />
          <h4 className="text-xl text-center py-10">FASHION</h4>
        </div>
        <div className="shadow-2xl mb-16 border border-gray-300 rounded-lg"> 
          <img className="mx-auto"  src={portraitImg} alt="" />
          <h4 className="text-xl text-center py-10">PORTRAITS</h4>
        </div>
        <div className="shadow-2xl mb-16 border border-gray-300 rounded-lg"> 
          <img className="mx-auto"  src={childrenImg} alt="" />
          <h4 className="text-xl text-center py-10">CHILDREN</h4>
        </div>
      </div>
    </div>
  );
};

export default Specialities;
