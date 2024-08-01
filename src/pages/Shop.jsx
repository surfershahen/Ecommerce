import React from "react";

import {
  Popular,
  Offers,
  NewCollections,
  NewsLetter,
  Hero,
} from "../components";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  );
};

export default Shop;
