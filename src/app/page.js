
import React from 'react';
import Hero from './components/Hero';
import himer from "../himer.jpg"

const page = () => {
  return (
    <div>
      <Hero headline={"Free Food Munch. One for the Price of None."} image={himer} />
    </div>
  );
};

export default page;