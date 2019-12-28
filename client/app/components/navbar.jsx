import React, { Component } from "react";
import {
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
  OverlayTrigger,
  Popover
} from "react-bootstrap";
import Profile from "../images/Profile";
import styled from "styled-components";

// Customizing style using styled component which can be used as regular React Component
const Styles = styled.div`
  // .navbar {
  //   background-color: #61dafb;
  // }
  // .hover {
  //     color: white;
  //   }
  // }
`;

class CustomNavBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" className="color-nav">
          <Navbar.Brand href="/">React Web App</Navbar.Brand>
          <Nav className="mr-auto" fill variant="tabs">
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/blog">Blog</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/wrong">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search POD"
              className="mr-sm-2"
            />
            <Button variant="outline-info">Search</Button>
          </Form>
          <Profile>
            {["bottom"].map(placement => (
              <OverlayTrigger
                trigger="hover"
                key={placement}
                placement={placement}
                overlay={
                  <Popover id={`popover-positioned-${placement}`}>
                    <Popover.Title as="h3">Hello User</Popover.Title>
                    <Popover.Content>Edit Profile</Popover.Content>
                    <Popover.Content>Logout</Popover.Content>
                  </Popover>
                }
              >
                <Button variant="secondary">Profile</Button>
              </OverlayTrigger>
            ))}
          </Profile>
        </Navbar>
      </div>
    );
  }
}

export default CustomNavBar;
