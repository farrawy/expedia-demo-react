import React from "react";

const Checkout = (props) => {
  const { name, age, location } = props.location.state;
  return <div>{name}</div>;
};

export default Checkout;
