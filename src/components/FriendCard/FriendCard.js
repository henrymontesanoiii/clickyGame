import React from "react";
import "../../css/hover.css";

const FriendCard = props => (
  <div >
    <div className="img-container mr-5 mb-5 hvr-grow ">
      <img alt={props.name} src={props.image}  onClick={()=> props.handleClicked(props.id)} />
    </div>
    
    
  </div>
);

export default FriendCard;
