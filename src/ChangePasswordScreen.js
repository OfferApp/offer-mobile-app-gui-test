import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import {
  Container,
  ListItem,
  Content,
  Header,
  Drawer,
  Button,
  Right,
  Input,
  Title,
  Text,
  List,
  Left,
  View,
  Icon,
  Body,
} from 'native-base';
import SideBar from './SideBar';

class ChangePasswordScreen extends Component {
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
//      cardItemStyle,
      headerStyle,
//      buttonStyle,
      iconStyle,
      textStyle,
      viewStyle,
//      cardStyle,
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
            <Title style={titleStyle}>Password</Title>
          </Body>
          <Right style={{ marginLeft: -(width / 4) }} >
            <Button style={{ alignSelf: 'flex-end', alignItems: 'flex-end' }} transparent light>
              <Text style={{ ...textStyle, fontSize: 18 }}>Done</Text>
            </Button>
          </Right>
        </Header>
        <Content style={{ paddingTop: 5 }}>
          <View style={viewStyle} >
            <List>
              <ListItem style={{ height: 25 }} itemDivider />
              <ListItem icon>
                <Left>
                  <Icon
                    style={iconStyle}
                    ios='ios-lock'
                    android='lock'
                  />
                </Left>
                <Body>
                  <Input placeholder='Current Password' />
                </Body>
              </ListItem>
              <ListItem style={{ height: 25 }} itemDivider />
              <ListItem icon>
                <Left>
                  <Icon
                    style={iconStyle}
                    ios='ios-lock'
                    android='lock'
                  />
                </Left>
                <Body>
                  <Input placeholder='New Password' />
                </Body>
              </ListItem>
              <ListItem icon>
                <Left>
                  <Icon
                    style={iconStyle}
                    ios='ios-lock'
                    android='lock'
                  />
                </Left>
                <Body>
                  <Input placeholder='New Password, again' />
                </Body>
              </ListItem>
              <ListItem style={{ height: height / 2 }} itemDivider />
            </List>
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
   color: 'gray'
 },
 textStyle: {
   alignSelf: 'center',
   fontSize: 15,
   textAlign: 'center',
   paddingRight: 0,
   paddingLeft: 0,
   margin: 0
 },
 buttonStyle: {
   margin: 0
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
   flex: 1
 },
 textContainerStyle: {
   backgroundColor: 'rgba(0,0,0,0)',
   height: height / 5,
   width
}
};

export default ChangePasswordScreen;
