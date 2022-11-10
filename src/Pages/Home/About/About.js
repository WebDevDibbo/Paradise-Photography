import React from "react";
import person from '../../../assets/person.jpg'

const About = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 mt-6">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2">
          <img src =
            {person}
            className=" lg:max-w-lg shadow-2xl rounded-lg"
            alt=""
          />
          </div>
          <div className="lg:w-1/2 py-10 lg:py-0">
            <p className="font-bold text-primary text-center lg:text-left">About Me</p>
            <h1 className="text-5xl font-bold pt-2 text-center lg:text-left">I am qualified <br /> & experience <br /> in this field</h1>
            <p className="py-6 text-gray-600 hidden lg:block">
            I'm photographer specializing in people & portrait photography, <br /> based in London.
            Photography is my passion and I love to turn<br/> ideas  into beautiful things. Looking for a caring, fun  passionate  and creative photographer? It's me!
            </p>
            <p className="py-8 text-gray-600 text-center lg:hidden">
            I'm photographer specializing in people & portrait photography,based in London.
            Photography is my passion and I love to turn ideas  into beautiful things. Looking for a caring, fun  passionate  and creative photographer? It's me!
            </p>
            <div className="text-center lg:text-left">
            <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
