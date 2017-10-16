import React, { Component } from 'react';
import { Image, Dimensions } from 'react-native';
import {
  Container,
  CardItem,
  Content,
  Header,
  Drawer,
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
import SideBar from './SideBar';
import accessories from './img/accessories.jpg';
import electronics from './img/electronics.jpg';
import clothes from './img/clothes.jpg';
import hotels from './img/hotels.jpg';
import foods from './img/foods.jpg';
import shoe from './img/shoe.jpg';

class CategoryScreen extends Component {
  closeDrawer = () => {
    this.drawer._root.close();
  }
  openDrawer = () => {
    this.drawer._root.open();
  }
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
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<SideBar />}
        onClose={() => { this.closeDrawer(); }}
      >
      <Container style={containerStyle}>
        <Header style={headerStyle} iosBarStyle='light-content'>
          <Left style={{ marginRight: -(width / 4) }}>
            <Button transparent onPress={this.openDrawer.bind(this)}>
              <Icon style={{ color: 'white' }} name='menu' />
            </Button>
          </Left>
          <Body>
            <Title style={titleStyle}>CATEGORIES</Title>
          </Body>
          <Right style={{ marginLeft: -(width / 4) }} />
        </Header>
        <Content style={{ paddingTop: 5 }}>
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
                  source={electronics}
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
      </Drawer>
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
   paddingTop: 0,
   backgroundColor: '#f93450',
   borderBottomColor: '#f93450'
 },
 titleStyle: {
   fontWeight: 'bold',
   color: 'white',
   textAlign: 'center',
   fontSize: 18,
 },
 containerStyle: {
   backgroundColor: 'white',
   marginTop: 20
 },
 viewStyle: {
   marginLeft: 4,
   marginRight: 4,
   flex: 1
 },
 textContainerStyle: {
   backgroundColor: 'rgba(0,0,0,0)',
   height: height / 5,
   width
}
};

export default CategoryScreen;
