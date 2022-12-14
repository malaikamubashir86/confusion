import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function DishdetailComponent(props) {
  
  return (
  
      <div className="container">
      <div className="row">
          <Breadcrumb>

              <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
              <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
              <h3>{props.dish.name}</h3>
              <hr />
          </div>                
      </div>
      <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <renderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <renderComment comments={props.comments} />
                    </div>
                </div>
      
      </div>
      
  );
 
      
  
  
}
