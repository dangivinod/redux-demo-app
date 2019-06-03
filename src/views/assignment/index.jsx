import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col, Container, Alert, Media } from 'reactstrap';
import _ from 'lodash';

import ListView from '../../components/assignment/listView'
import CartView from '../../components/assignment/cartView'

var imgStyle = {
  'width': 200,
  'height': 200
}

const dataSet = [
  {
    "id": 1,
    "image": "http://hdqwalls.com/wallpapers/captain-marvel-movie-2019-4k-cl.jpg",
    "add_cart":false,
  },
  {
    "id": 2,
    "image": "https://cdn.wallpapersafari.com/0/44/a16HOY.jpg",
    "add_cart":false,
  },
  {
    "id": 3,
    "image": "http://getwallpapers.com/wallpaper/full/b/9/0/261204.jpg",
    "add_cart":false,
  },
  {
    "id": 4,
    "image": "https://wallpapercave.com/wp/wp3003567.jpg",
    "add_cart":false,
  },
  {
    "id": 5,
    "image": "http://sfwallpaper.com/images/marvel-superheroes-wallpaper-hd-22.jpg",
    "add_cart":false,
  },
  {
    "id": 6,
    "image": "https://wallimpex.com/data/out/288/marvels-wallpapers-hd-6683401.jpg",
    "add_cart":false,
  },
  {
    "id": 7,
    "image": "https://www.gstatic.com/webp/gallery3/3.png",
    "add_cart":false,
  },
  {
    "id": 8,
    "image": "https://www.gstatic.com/webp/gallery/5.webp",
    "add_cart":false,
  }
]

let cartData = []

class Assignment extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cartData:[]
    }
  }

  AddToCart = (ids) => {
    var id = ids.currentTarget.id;
    var obj = _.find(dataSet, { 'id': JSON.parse(id) });
    cartData.push(obj)
    var evens = _.remove(dataSet, function(n) {
      return n.id == id;
    });
    this.setState({
      cartData:cartData
    })
  }

  RemoveToCart = (ids) => {
    var id = ids.currentTarget.id;
    var evens = _.remove(this.state.cartData, function(n) {
      return n.id == id;
    });
    dataSet.push(evens[0])

    this.setState({
      cartData:this.state.cartData
    })
  }

  render(){
    let data = dataSet;
    return(
      <Container>
        <Row>
          <Col >
            <Alert color="primary">
              <Col sm="6">
                first
              </Col>
            </Alert>
          </Col>
        </Row>
        <Row>
          <Col sm="6">
            {data.map((item) => {
              return (<ListView item={item} onClick={this.AddToCart} />)
            })}
          </Col>

          <Col sm="6">
            {cartData.map((item) => {
              return (<CartView item={item} onClick={this.RemoveToCart} />)
            })}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Assignment;
