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

class OfferDetailScreen extends Component {
  constructor() {
    super();
    this.state = {
      bookmark: false
    };
  }
  onBookmarkPress = () => {
    if (this.state.bookmark) {
        this.setState({ bookmark: false });
    } else { this.setState({ bookmark: true }); }
  }
  closeDrawer = () => {
    this.drawer._root.close();
  }
  openDrawer = () => {
    this.drawer._root.open();
  }
  renderBookmark = () => {
    const { cardIconStyle } = styles;
    if (this.state.bookmark) {
      return (
        <Icon
        style={cardIconStyle}
        ios='ios-bookmark'
        android='bookmark'
        />
      );
    }
    return (
      <Icon
      style={cardIconStyle}
      ios='ios-bookmark-outline'
      android='bookmark-outline'
      />
    );
  }
  render() {
    const {
//      textContainerStyle,
//      backgroundImage,
      containerStyle,
      cardItemStyle,
//      cardIconStyle,
      headerStyle,
      iconStyle,
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
          <Left style={{ marginRight: -(width / 4), flexDirection: 'row' }}>
            <Button transparent style={{ padding: 0 }} onPress={this.openDrawer.bind(this)}>
              <Icon style={iconStyle} name='menu' />
            </Button>
            <Button transparent style={{ padding: 0 }}>
            <Icon
              style={iconStyle}
              ios='ios-arrow-back'
              android='arrow-back'
            />
            </Button>
          </Left>
          <Body>
              <Title style={titleStyle}>OFFERS DETAILS</Title>
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
              </Card>
            </View>
            <View style={viewStyle} >
              <Card style={cardStyle}>
                <CardItem style={cardItemStyle}>
                  <Left
                    style={{
                      alignSelf: 'flex-start',
                      flexDirection: 'column',
                      alignItems: 'flex-start' }}
                  >
                    <Text style={{ alignSelf: 'flex-start', fontSize: 25 }}>Offer Name</Text>
                    <Text style={{ alignSelf: 'flex-start', fontSize: 12 }}>Vendor Name</Text>
                  </Left>
                  <Right
                    style={{
                      alignSelf: 'flex-end',
                      flexDirection: 'column',
                      alignItems: 'flex-end',
                      paddingRight: 10 }}
                  >
                    <Button
                      transparent
                      style={{ height: 30, padding: 0 }}
                      onPress={this.onBookmarkPress.bind(this)}
                    >
                    {this.renderBookmark()}
                    </Button>
                    <Text style={{ fontSize: 10 }}>
                      Validity: <Text style={{ alignSelf: 'flex-end', fontSize: 10 }}>
                      22, Nov 2017
                      </Text>
                    </Text>
                  </Right>
                </CardItem>
                <CardItem style={cardItemStyle}>
                  <Body
                    style={{
                      alignSelf: 'center',
                      flexDirection: 'column',
                      alignItems: 'center',
                      paddingLeft: 10,
                      paddingRight: 20
                    }}
                  >
                  <Text
                    style={{
                      margin: 0,
                      paddingTop: 5,
                      alignSelf: 'center',
                      fontSize: 10
                    }} note
                  >
                    When asked for his name by the coffee shop clerk,
                    my brother-in-law answered, “Marc, with a C.” Minutes later,
                    he was handed his coffee with his name written on the side: Cark.
                  </Text>
                  <Text
                    style={{
                      margin: 0,
                      paddingTop: 5,
                      alignSelf: 'center',
                      fontSize: 10
                    }} note
                  >
                    I bought one of those tapes to teach you Spanish in your sleep.
                    During the night, the tape skipped. Now I can only stutter in Spanish.
                  </Text>
                  <Text
                    style={{
                      margin: 0,
                      paddingTop: 5,
                      alignSelf: 'center',
                      fontSize: 10
                    }} note
                  >
                  The black lacquer stand holding his prized samurai swords was dusty,
                  so my husband left our cleaning lady a note, reading, “Check out my swords.”
                  That evening, he found the stand just as dirty as before but
                  with this appended to his note: “Nice swords.”
                  </Text>
                  </Body>
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
 iconStyle: {
   color: 'white',
   marginLeft: 5,
   marginRight: 0,
 },
 cardIconStyle: {
   color: '#f93450',
   fontSize: 30
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

export default OfferDetailScreen;
