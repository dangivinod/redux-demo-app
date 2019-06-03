import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col, Container, Alert, Media } from 'reactstrap';
var imgStyle = {
  'width': 200,
  'height': 200
}

class ListView extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  render(){
    let { item, onClick } = this.props
    return(
      <Card>
        <Media left href="#">
          <Media style={imgStyle} object src={item.image} alt="Generic placeholder image" />
        </Media>
        <Button id={item.id} onClick={onClick}>Add To Cart</Button>
      </Card>
    )
  }
}

export default ListView;
