import React from "react";
import TeaCard from "./TeaCard";

function TeaList(){

  const masterTeaList = [
    {
      name: "",
      type: "",
      origin: "",
      flavor: "",
      price: ,
      amount: ,
      image: "",
    },
    {
      name: "",
      type: "",
      origin: "",
      flavor: "",
      price: ,
      amount: ,
      image: "",
    },
    {
      name: "",
      type: "",
      origin: "",
      flavor: "",
      price: ,
      amount: ,
      image: "",
    },
    {
      name: "English Breakfast",
      type: "Black Tea Blend",
      origin: "Assam, Ceylon, Kenya",
      flavor: "Full bodied brew, strong and moderately caffeinated.",
      price: 9,
      amount: 35,
      image: "https://cdn.shopify.com/s/files/1/0888/8900/products/9000-Decaf_English_Breakfast.jpg?v=1445269330",
    },
    {
      name: "",
      type: "",
      origin: "",
      flavor: "",
      price: ,
      amount: ,
      image: "",
    },
    {
      name: "",
      type: "",
      origin: "",
      flavor: "",
      price: ,
      amount: ,
      image: "",
    },
    
  ];

  return (
    <TeaCard
      name="3A"
      type="Thato and Haley"
      origin="Firebase will not save record!"
      flavor=""
      price=""
      amount=""
      image=""/>
  );
}

export default TeaList;