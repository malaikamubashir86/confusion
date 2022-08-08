import React, { Component } from 'react';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { Card, CardImg,CardImgOverlay, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
    import { Link } from 'react-router-dom';

class Menu extends Component {
  

    constructor(props) {
        super(props);
        this.state = {
          dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS,
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }

 RenderMenuItem ({dish, onClick}) {
    return (
        <Card>
            {/* <Link to={`/menu/${dish.id}`} > */}
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            {/* </Link> */}
        </Card>
    );
}


    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }
    // comments
    
    renderComment(comments) {
      if (comments != null)
          return(
              <div> <h4>Comments</h4>
               <Card>
                   
                    <CardBody>
                      <CardTitle>{comments.author}</CardTitle>
                      <CardText>{comments.comment}</CardText>
                    </CardBody>
                </Card>          
             </div> 
          );
      else
          return(
              <div></div>
          );
  }
}

export default Menu;
