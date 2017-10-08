import React, { Component } from 'react';
import { Container, H1, Content, Form, Item, Input, Label, Button,
Text, View } from 'native-base';

 class Login extends Component {
  render() {
    const {
      headStyle,
      contentStyle,
      alignStyle,
      facebookStyle,
      googleStyle,
      buttonStyle,
      signInStyle,
      formStyle
    } = styles;
    return (
    <Container>
      <Content style={contentStyle}>
        <View style={headStyle}>
          <H1 style={alignStyle}>Login</H1>
        </View>
        <View style={buttonStyle}>
          <Button block style={facebookStyle}>
            <Text style={alignStyle}> Continue with Facebook</Text>
          </Button>
        </View>
        <View style={buttonStyle}>
          <Button block style={googleStyle}>
            <Text style={alignStyle}> Continue with Google </Text>
          </Button>
        </View>
        <View>
          <Text style={{ alignSelf: 'center', color: '#cbcbcb' }}>
            ──────── OR ────────
          </Text>
        </View>
        <View style={signInStyle}>
            <Form style={formStyle}>
              <Item floatingLabel>
                <Label style={{ alignSelf: 'center' }} >Username</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label style={{ alignSelf: 'center' }} >Password</Label>
                <Input />
              </Item>
            </Form>
            <View style={buttonStyle}>
              <Button block success>
                <Text style={alignStyle}>Sign In</Text>
              </Button>
            </View>
            <View style={alignStyle}>
              <Text>Dont have an account ?
                <Text style={{ color: 'mediumseagreen' }}> Sign Up</Text>
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
  buttonStyle: {
    padding: 10
  },
  headStyle: {
    padding: 10,
 },
 formStyle: {
   marginTop: 5,
   marginLeft: 10,
   marginRight: 10,
   paddingRight: 10
 },
 signInStyle: {
   backgroundColor: '#f3f3f3',
   marginTop: 5,
   marginLeft: 10,
   marginRight: 10,
 }
 };

export default Login;
