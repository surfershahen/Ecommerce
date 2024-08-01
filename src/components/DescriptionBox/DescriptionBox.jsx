import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum odio,
          expedita nemo doloremque totam veniam distinctio veritatis ab minima
          iusto dicta debitis nobis esse facere eum placeat eligendi quas
          suscipit?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          dolores inventore, asperiores veritatis laboriosam nam cum dignissimos
          dolor aut ex quisquam laborum enim dicta eum iure quidem quaerat
          necessitatibus distinctio?
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
