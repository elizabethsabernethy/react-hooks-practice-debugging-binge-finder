import React from "react";

function TVShow(props) {

  function handleShow(){
    props.selectShow(props.show)
  }

  return (
    <div>
      <br />
      <img src={props.show.image.medium} onClick={handleShow} alt="" />
    </div>
  );
}

export default TVShow;
