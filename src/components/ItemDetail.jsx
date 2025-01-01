import React from "react";
import { Link } from "react-router-dom";
function ItemDetail(props) {
  const { price, title, description, text, img, id } = props;

  return (
    <div className="">
      <img src={img} alt="product img" />
      <div className="">
        <h3 className="">{title}</h3>
        <p className="">{text}</p>
        <div>
          <p className="">$ {price}</p>
        </div>
        <p>{description}</p>
        <Link to={`/item/${id}`}>Ver Más</Link>
      </div>
    </div>
  );
}

export default ItemDetail;
