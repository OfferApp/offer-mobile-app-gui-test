import React, { Component } from 'react';
import { Container, H1, Content, Form, Item, Input, Label, Button,
Text, View, Col, Grid, H3 } from 'native-base';

 class SignUp extends Component {
  render() {
    const {
      headStyle,
      contentStyle,
      alignStyle,
      signUpStyle,
      formStyle,
      buttonStyle,
      facebookStyle,
      googleStyle,
      labelStyle,
      colStyle,
      headerStyle,
      gridStyle
      } = styles;
    return (
    <Container>
      <Content style={contentStyle}>
        <View style={headStyle}>
          <H1 style={{ fontWeight: 'bold', alignSelf: 'center' }}> HELLO! </H1>
          <H3 style={headerStyle}>SIGN UP TO GET STARTED</H3>
        </View>

        <View style={signUpStyle}>
            <Form style={formStyle}>
              <Item floatingLabel>
                <Label style={labelStyle}>UserName</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label style={labelStyle}>Email address</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label style={labelStyle}>Phone number</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label style={labelStyle}>Password</Label>
                <Input />
              </Item>
              <Item floatingLabel>
          <Label style={labelStyle}>Confirm Password</Label>
                <Input />
              </Item>
            </Form>
            <View style={buttonStyle}>
              <Button block success>
                <Text style={{ color: '#006600' }}>Sign Up</Text>
              </Button>
            </View>
            <View>
              <Text style={{ alignSelf: 'center', color: '#cbcbcb', flex: 1 }}>
                ──────── OR ────────
              </Text>
            </View>
          <View style={buttonStyle}>
          <Grid style={gridStyle}>
           <Col style={colStyle}>
                <Button style={facebookStyle}>
                <Text style={{ alignSelf: 'center' }}> Facebook</Text>
                </Button>
           </Col>
           <Col style={colStyle}>
               <Button style={googleStyle}>
               <Text style={{ alignSelf: 'center' }} > Google + </Text>
               </Button>
           </Col>
         </Grid>
       </View>

        <View style={alignStyle}>
          <Text style={{ color: '#d3d3d3' }}>Have an account ?
            <Text style={{ color: 'mediumseagreen' }}> Sign In</Text>
          </Text>
        </View>
        </View>

        </Content>
      </Container>
    );
  }
}

const styles = {
  contentStyle: {
    marginTop: 20
  },
  facebookStyle: {
    padding: 15,
    backgroundColor: '#3a549b'
  },
  googleStyle: {
    padding: 15,
    backgroundColor: '#dd4333'
  },
  alignStyle: {
    alignSelf: 'center',
    marginLeft: 5,
    marginRight: 5,
    padding: 10
  },
  gridStyle: {
    alignItems: 'center'
  },
  headerStyle: {
    marginLeft: 5,
    marginRight: 5,
    alignSelf: 'center',
    flex: 1
  },
  buttonStyle: {
    padding: 10
  },
  headStyle: {
    padding: 10
 },
 formStyle: {
   marginTop: 5,
   marginLeft: 10,
   marginRight: 10,
   paddingRight: 10,
},
 signUpStyle: {
   marginLeft: 10,
   marginRight: 10,
 },
 labelStyle: {
   alignSelf: 'center',
   fontStyle: 'italic'
 },
 colStyle: {
   alignSelf: 'center'
 }
 };

export default SignUp;
