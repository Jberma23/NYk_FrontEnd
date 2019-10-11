
// import { Nav, NavItem, NavLink } from "reactstrap";
import CreateAccount from "./Create_Account";
import { NavLink } from "react-router-dom"
import React from 'react'
import { Link } from "react-router-dom"
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import Logout from '../../containers/Pre-Login/Logout'
const LoginForm = (props) => (
  <React.Fragment>
    {/* <Headr /> */}
    <Grid textAlign='center' style={{ height: '85vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>

        </Header>
        <Form size='large' onSubmit={(event) => props.handleLoginSubmit(event)}>
          <Segment stacked>
            <Form.Input fluid icon='user' id="email" iconPosition='left' placeholder='E-mail address' onChange={(event) => props.handleLoginChange(event)} />
            <Form.Input
              fluid
              icon='lock'
              id="password"
              iconPosition='left'
              placeholder='Password'
              type='password'
              onChange={(event) => props.handleLoginChange(event)}
            />


            <Button type="submit" color='teal' fluid size='large' >
              Login
          </Button>


            <Link to="#" onClick={(event) => alert("That Sucks")}>Forgot Your Password?</Link>
          </Segment>
        </Form>
        <Message>
          New to us? <Link to='/register'>Sign Up</Link>
        </Message>
      </Grid.Column>
    </Grid>

    {/* <Logout handleUserLogOut={this.props.handleUserLogOut} /> */}
  </React.Fragment>
)

export default LoginForm


