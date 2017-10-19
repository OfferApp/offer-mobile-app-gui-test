import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import AHImage from 'react-native-auto-height-image';
import {
  Container,
  CardItem,
  Content,
  Header,
  Drawer,
  Button,
  Right,
  Title,
  Text,
  Left,
  View,
  Icon,
  Body,
  Card
} from 'native-base';
import SideBar from './SideBar';

const offer1 = 'http://www.ttkprestige.com/media/images/html/Banner(5).jpg';
const offer2 = 'http://ste.india.com/sites/default/files/2017/03/24/580841-amazonsuer.jpg';
const offer3 = 'http://www.wtzupcity.com/upload/23253luluwtzupkochi.jpg';
const offer4 = 'http://www.ttkprestige.com/media/images/html/Appliancess-Offers.jpg';

class CategoryScreen extends Component {
  closeDrawer = () => {
    this.drawer._root.close();
  }
  openDrawer = () => {
    this.drawer._root.open();
  }
  render() {
    const {
//      textContainerStyle,
//      backgroundImage,
      containerStyle,
      cardItemStyle,
      headerStyle,
//      textStyle,
      viewStyle,
      cardStyle,
      titleStyle
      } = styles;
    const offerMargin = 9;
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
            <Title style={titleStyle}>OFFERS</Title>
          </Body>
          <Right style={{ marginLeft: -(width / 4) }} />
        </Header>
        <Content style={{ paddingTop: 5 }}>
          <View style={{ flex: 1 }} >
            <View style={viewStyle} >
              <Card style={cardStyle}>
                <CardItem style={cardItemStyle} cardBody>
                <View>
                <AHImage
                  imageURL={offer1}
                  width={width - offerMargin}
                />
                </View>
                </CardItem>
                <CardItem style={cardItemStyle}>
                  <Left
                    style={{
                      alignSelf: 'flex-start',
                      flexDirection: 'column',
                      alignItems: 'flex-start' }}
                  >
                    <Text style={{ alignSelf: 'flex-start', fontSize: 25 }}>Offer Name</Text>
                    <Text style={{ alignSelf: 'flex-start', fontSize: 10 }}>Vendor Name</Text>
                  </Left>
                  <Right>
                    <Text style={{ fontSize: 10, paddingTop: 25, paddingRight: 10 }}>
                      Validity: <Text style={{ fontSize: 10 }}>
                      22, Nov 2017
                      </Text>
                    </Text>
                  </Right>
                </CardItem>
              </Card>
            </View>
            <View style={viewStyle} >
              <Card style={cardStyle}>
              <CardItem style={cardItemStyle} cardBody>
                <AHImage
                  imageURL={offer2}
                  width={width - offerMargin}
                />
              </CardItem>
              <CardItem style={cardItemStyle}>
                <Left
                  style={{
                    alignSelf: 'flex-start',
                    flexDirection: 'column',
                    alignItems: 'flex-start' }}
                >
                  <Text style={{ alignSelf: 'flex-start', fontSize: 25 }}>Offer Name</Text>
                  <Text style={{ alignSelf: 'flex-start', fontSize: 10 }}>Vendor Name</Text>
                </Left>
                <Right>
                  <Text style={{ fontSize: 10, paddingTop: 25, paddingRight: 10 }}>
                    Validity: <Text style={{ fontSize: 10 }}>
                    22, Nov 2017
                    </Text>
                  </Text>
                </Right>
              </CardItem>
              </Card>
            </View>
            <View style={viewStyle} >
              <Card style={cardStyle}>
              <CardItem style={cardItemStyle} cardBody>
                <AHImage
                  imageURL={offer3}
                  width={width - offerMargin}
                />
              </CardItem>
              <CardItem style={cardItemStyle}>
                <Left
                  style={{
                    alignSelf: 'flex-start',
                    flexDirection: 'column',
                    alignItems: 'flex-start' }}
                >
                  <Text style={{ alignSelf: 'flex-start', fontSize: 25 }}>Offer Name</Text>
                  <Text style={{ alignSelf: 'flex-start', fontSize: 10 }}>Vendor Name</Text>
                </Left>
                <Right>
                  <Text style={{ fontSize: 10, paddingTop: 25, paddingRight: 10 }}>
                    Validity: <Text style={{ fontSize: 10 }}>
                    22, Nov 2017
                    </Text>
                  </Text>
                </Right>
              </CardItem>
              </Card>
            </View>
            <View style={viewStyle} >
              <Card style={cardStyle}>
              <CardItem style={cardItemStyle} cardBody>
                <AHImage
                  imageURL={offer4}
                  width={width - offerMargin}
                />
              </CardItem>
              <CardItem style={cardItemStyle}>
                <Left
                  style={{
                    alignSelf: 'flex-start',
                    flexDirection: 'column',
                    alignItems: 'flex-start' }}
                >
                  <Text style={{ alignSelf: 'flex-start', fontSize: 25 }}>Offer Name</Text>
                  <Text style={{ alignSelf: 'flex-start', fontSize: 10 }}>Vendor Name</Text>
                </Left>
                <Right>
                  <Text style={{ fontSize: 10, paddingTop: 25, paddingRight: 10 }}>
                    Validity: <Text style={{ fontSize: 10 }}>
                    22, Nov 2017
                    </Text>
                  </Text>
                </Right>
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
    flex: 1,
    paddingRight: 0,
    paddingLeft: 0,
  },
  backgroundImage: {
    flex: 1, height: null, width: null, resizeMode: 'cover'
 },
 cardStyle: {
   flex: 1,
   marginRight: 0,
   marginLeft: 0
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
