import React, { Component } from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
// import image from "assets/image.jpg";

// Customizing style using styled component which can be used as regular React Component
const Styles = styled.div``;

class Jumbotron extends Component {
  render() {
    return (
      <Styles>
        <Jumbo fluid className="jumbp">
          <div className="overlay" />
          <Container>
            <h1>Welcome to React Web App</h1>
            <p>You can always learn , just try, co-oporate and accept</p>
          </Container>
        </Jumbo>
      </Styles>
    );
  }
}

export default Jumbotron;
