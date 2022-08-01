import React from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
export default function DishdetailComponent(props) {
  return (
    <div className="container">
    <div className="row">
       {props.menu}
    </div>
    <div className="row">
      <div  className="col-12 col-md-5 m-1">
        {props.renderDish}
      </div>
      {/* for comments */}
      <div  className="col-12 col-md-5 m-1">
        {props.renComment}
      </div>
    </div>
</div>
      
  )
}
