import React from 'react';
//import { Image } from 'react-native';
import {
  Container,
  Thumbnail,
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
          <Icon
            style={iconStyle}
            ios='ios-search'
            android='search'
          />
          <Input style={{ color: 'white' }} autoCorrect={false} />
        </Item>
      </Header>
        <Content>
        <View style={viewStyle} >
          <Card style={cardStyle}>
            <CardItem style={{ ...cardItemStyle, paddingLeft: 10 }}>
              <Thumbnail
                small
                source={{ uri: 'http://s3.amazonaws.com/cdn.roosterteeth.com/default/md/user_profile_male.jpg' }}
              />
              <Text style={{ ...textStyle, paddingLeft: 15 }}>Tejas Rathod</Text>
            </CardItem>
          </Card>
          </View>
          <View style={viewStyle} >
          <Card style={cardStyle}>
            <CardItem style={cardItemStyle}>
              <Icon
                style={iconStyle}
                ios='ios-image'
                android='image'
              />
              <Text style={textStyle}>Categories</Text>
            </CardItem>
          </Card>
          </View>
          <View style={viewStyle} >
          <Card style={cardStyle}>
            <CardItem style={cardItemStyle}>
              <Icon
                style={iconStyle}
                ios='ios-bookmark'
                android='bookmark'
              />
              <Text style={textStyle}>Bookmark</Text>
            </CardItem>
          </Card>
          </View>
          <View style={viewStyle} >
          <Card style={cardStyle}>
            <CardItem style={cardItemStyle}>
              <Icon
                style={iconStyle}
                ios='ios-log-out'
                android='log-out'
              />
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
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#343843',
 },
 cardStyle: {
   flex: 1,
   backgroundColor: '#343843',
   borderColor: '#343843',
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
   borderBottomColor: '#343843',
   marginRight: 10
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
