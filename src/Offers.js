import React, { Component } from 'react';
import { Image, Dimensions } from 'react-native';
import { Container,
  CardItem,
  Content,
  Header,
  Button,
  Right,
  Title,
  Left,
  View,
  Icon,
  Body,
  Text,
  Card
} from 'native-base';
 import accessories from './img/accessories.jpg';
 import Electronics1 from './img/Electronics1.jpg';
 import clothes from './img/clothes.jpg';
 import hotels from './img/hotels.jpg';
 import foods from './img/foods.jpg';
 import shoe from './img/shoe.jpg';

class Offers extends Component {
  render() {
    const {
      textContainerStyle,
      backgroundImage,
      containerStyle,
      cardItemStyle,
      headerStyle,
      textStyle,
      viewStyle,
      cardStyle,
      titleStyle
      } = styles;

    return (
      <Container style={containerStyle}>
        <Header style={headerStyle}>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title style={titleStyle}>CATEGORY</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View style={{ flex: 1 }} >
            <View style={viewStyle} >
              <Card style={cardStyle}>
                <CardItem style={cardItemStyle} cardBody>
                  <Image
                    source={foods}
                    style={backgroundImage}
                  >
                  <View style={textContainerStyle}>
                    <Text style={textStyle}>Foods</Text>
                  </View>
                  </Image>
                </CardItem>
              </Card>
            </View>
            <View style={viewStyle} >
              <Card style={cardStyle}>
              <CardItem style={cardItemStyle} cardBody>
                <Image
                  source={hotels}
                  style={backgroundImage}
                >
                <View style={textContainerStyle}>
                    <Text style={textStyle}>Hotels</Text>
                  </View>
                </Image>
              </CardItem>
              </Card>
            </View>
            <View style={viewStyle} >
              <Card style={cardStyle}>
              <CardItem style={cardItemStyle} cardBody>
                <Image
                  source={clothes}
                  style={backgroundImage}
                >
                <View style={textContainerStyle}>
                    <Text style={textStyle}>Clothes</Text>
                  </View>
                </Image>
              </CardItem>
              </Card>
            </View>
            <View style={viewStyle} >
              <Card style={cardStyle}>
              <CardItem style={cardItemStyle} cardBody>
                <Image
                  source={accessories}
                  style={backgroundImage}
                >
                <View style={textContainerStyle}>
                    <Text style={textStyle}>Accessories</Text>
                  </View>
                </Image>
              </CardItem>
              </Card>
            </View>
            <View style={viewStyle} >
              <Card style={cardStyle}>
              <CardItem style={cardItemStyle} cardBody>
                <Image
                  source={shoe}
                  style={backgroundImage}
                >
                <View style={textContainerStyle}>
                    <Text style={textStyle}>Shoes</Text>
                  </View>
                </Image>
              </CardItem>
              </Card>
            </View>
            <View style={viewStyle} >
              <Card style={cardStyle}>
              <CardItem style={cardItemStyle} cardBody>
                <Image
                  source={Electronics1}
                  style={backgroundImage}
                >
                <View style={textContainerStyle}>
                  <Text style={textStyle}>Electronics</Text>
                </View>
                </Image>
              </CardItem>
              </Card>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
const { height, width } = Dimensions.get('window');
const styles = {
  cardItemStyle: {
    flex: 1
  },
  backgroundImage: {
   flex: 1,
   height: height / 5,
   width
 },
 cardStyle: {
   flex: 1,
   borderColor: 'black'
 },
 textStyle: {
   alignSelf: 'center',
   paddingTop: height / 15,
   fontSize: 30,
   textAlign: 'center',
   fontWeight: 'bold',
   color: 'white'
 },
 headerStyle: {
   backgroundColor: 'black',
   borderBottomColor: 'black'
 },
 titleStyle: {
   fontWeight: 'bold',
   backgroundColor: 'black',
   color: 'white',
   textAlign: 'center',
   fontSize: 18,
 },
 containerStyle: {
   backgroundColor: 'black',
   marginTop: 20
 },
 viewStyle: {
   marginTop: -4,
   marginBottom: -4,
   flex: 1
 },
 textContainerStyle: {
   backgroundColor: 'rgba(0,0,0,0)',
   height: height / 5,
   width
}
};

export default Offers;
