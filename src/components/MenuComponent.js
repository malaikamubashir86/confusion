import React, { Component } from 'react';
import Home from './HomeComponent';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import DishdetailComponent from './DishdetailComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
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
    
    renderComment(dish) {
      if (dish != null)
          return(
            
              <div> <h4>Comments</h4>
            {dish.comments.map((x) => {
              return (
                <ul className='list-unstyled'><li style={{fontSize:"1.35rem"}}>{ x.comment }<br></br>--{ x.author}</li></ul>
              );
            })}</div>
             
            
  
             
          );
      else
          return(
              <div></div>
          );
  }

    render() {
        const HomePage = () => {
          return(
              <Home 
              />
          );
        }
      
        const menu = this.props.dishes.map((dish) => {
            return ( 
              <div  className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                  onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });
        return (
          
          <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <DishdetailComponent menu={menu} renderDish={this.renderDish(this.state.selectedDish)} renComment={this.renderComment(this.state.selectedDish)}></DishdetailComponent>} />
              <Redirect to="/home" />
                      
          </Switch>
      
              );
          

    }
}

export default Menu;