import React from 'react';
//import { Dimensions } from 'react-native';
import {
  Container,
  CardItem,
  Content,
  Header,
  Input,
  Item,
  View,
  Icon,
  Text,
  Card
} from 'native-base';

class SideBar extends React.Component {
  render() {
    const {
      containerStyle,
      cardItemStyle,
      headerStyle,
      iconStyle,
      textStyle,
      viewStyle,
      cardStyle,
      } = styles;

    return (
      <Container style={containerStyle}>
      <Header searchBar rounded style={headerStyle}>
        <Item style={{ backgroundColor: '#2f323b' }}>
          <Icon style={iconStyle} name="ios-search" />
          <Input style={{ color: 'white' }} autoCorrect={false} />
        </Item>
      </Header>
        <Content>
        <View style={viewStyle} >
          <Card style={cardStyle}>
            <CardItem style={cardItemStyle}>
              <Icon style={iconStyle} name="ios-person" />
              <Text style={textStyle}>Profile</Text>
            </CardItem>
          </Card>
          </View>
          <View style={viewStyle} >
          <Card style={cardStyle}>
            <CardItem style={cardItemStyle}>
              <Icon style={iconStyle} name="ios-image" />
              <Text style={textStyle}>Categories</Text>
            </CardItem>
          </Card>
          </View>
          <View style={viewStyle} >
          <Card style={cardStyle}>
            <CardItem style={cardItemStyle}>
              <Icon style={iconStyle} name="ios-log-out" />
              <Text style={textStyle}>Sign Out</Text>
            </CardItem>
          </Card>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = {
 cardItemStyle: {
    flex: 1,
    backgroundColor: '#343843',
 },
 cardStyle: {
   flex: 1,
   backgroundColor: '#343843',
   borderColor: '#343843'
 },
 iconStyle: {
   color: 'white'
 },
 textStyle: {
   fontWeight: 'bold',
   color: 'white',
   paddingLeft: 10
 },
 headerStyle: {
   paddingTop: 0,
   backgroundColor: '#343843',
   borderBottomColor: '#343843'
 },
 containerStyle: {
   backgroundColor: '#343843',
   marginTop: 20
 },
 viewStyle: {
   marginLeft: 4,
   marginRight: 4,
   flex: 1
 }
};
export default SideBar;
