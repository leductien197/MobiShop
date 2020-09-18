import React, { useState } from 'react'
import { processImage } from '../../utils/index'
import { Link } from 'react-router-dom'
import { BsStar } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";

export default function item(props) {
  console.log('prop.data', props.data)


  const onAddWistLish = () => {
    
  }

  return (
    <div class="product-item card text-center">
      <div
        style={{ position: "absolute", top: "5px", right: "10px" }}
        onClick={onAddWistLish}
      >
        <BsStar />
      </div>
      <Link to={`/product/${props.data._id}`}>
        <img src={processImage(props.data.image)} alt="" />
      </Link>
      <h4>
        <Link to={`/product/${props.data._id}`}>{props.data.name}</Link>
      </h4>
      <p>
        Giá Bán: <span>{props.data.price}</span>
      </p>
    </div>
  );
}