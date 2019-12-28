import React, { Component } from "react";
import styled from "styled-components";

// Customizing style using styled component which can be used as regular React Component
const Styles = styled.div`
  .navbar {
    background-color: #61dafb;
  }
  .hover {
      color: white;
    }
  }
`;

class Contact extends Component {
  render() {
    return (
      <Styles>
        <div>
          <h2>Contact Page</h2>
          <p>Long text ..... </p>
        </div>
      </Styles>
    );
  }
}

export default Contact;
